const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { createNewUser, getUserByEmail} = require("../models/userModel")

const signup = async (req, res) => {
    try{
        const {full_name, email, password} = req.body;

        // USER EXISTS

        const userExists = await getUserByEmail(email);
        if(userExists) return res.status(409).json({message:"Email in use."})

        // HASH PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);

        // SAVE NEW USER OT DATABASE
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