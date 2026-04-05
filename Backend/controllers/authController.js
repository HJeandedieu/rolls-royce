const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { createNewUser, getUserByEmail} = require("../models/userModel")


// SIGNUP
const signup = async (req, res) => {
    try{
        const {full_name, email, password} = req.body;

        // USER EXISTS

        const userExists = await getUserByEmail(email);
        if(userExists) return res.status(409).json({message:"Email in use."})

        // HASH PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);

        // SAVE NEW USER IN DATABASE
        const newUserId = await createNewUser({full_name, email, password: hashedPassword});

        // GENERATE JWT TOKEN
        const token = jwt.sign(
            {id: newUserId}, 
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        )

        // RESPONSE
        res.status(201).json({
            message: "Account created Successfully",
            token,
            user: {id: newUserId, full_name, email}
        })

    }catch(err){
        res.status(500).json({message: "Signup failed."})
    }
}

// LOGIN
const login = async(req,res) => {
    try{
        const {email, password} = req.body;

        //FIND USER BY EMAIL
        const user = await getUserByEmail(email);
        if (!user) return res.status(404).json({message: "User not found"});

        // COMPARE PASSWORDS
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch) return res.status(401).json({message: "Invalid credentials"})

        // GENERATE JWT TOKEN
        const token = jwt.sign(
            {id: user.id},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        )

        // SEND RESPONSE
        res.status(200).json({
            message:"Login successful",
            token,
            user: {id: user.id, full_name: user.full_name, email: user.email}
        })


    }catch(err){
        res.status(500).json({message: "Login failed"})
    }
}

// LOGOUT

const logout = async(req,res) => {
    try{
        res.status(200).json({message: "Logged out successfully."})
    }catch(err){
        res.status(500).json({message: "Logout Failed."})
    }
}

const getLoggedInUser = async (req,res) => {
    
}