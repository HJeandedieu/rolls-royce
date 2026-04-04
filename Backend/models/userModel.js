const db = require ("../config/db");

// AUTHENTICATION


// CREATE NEW USER

const createNewUser = async (user_data)=>{
    const {full_name, email, password} = user_data;
    const [user] = await db.query(
        `INSERT INTO users
        (full_name, email, password) 
        VALUES(?,?,?)`,
        [full_name, email, password])
    return user.insertId;
}

// FIND USER BY EMAIL

const getUserByEmail = async(email) => {
    const [user] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    return user[0];
}


// FIND USER BY ID

const getUserById = async (user_id) =>{
    const [user] = await db.query("SELECT * FROM users WHERE id = ?", [user_id]);
    return user[0];
}

// PROFILE MANAGEMENT

// UPDATE USER

const updateUser = async(user_id, user_data) => {
    const {full_name, email, password} = user_data;
    const [user] = await db.query(
        `UPDATE users SET full_name = ?, email = ?, password = ?
        WHERE id = ?`, [full_name, email, password, user_id])
    return user.affectedRows;
}

// UPDATE PASSWORD

const updatePassword = async(email,newPassword) => {
    const [updated] =  await db.query(
        `UPDATE users SET password = ?
        WHERE email = ?`,[newPassword, email] )
    return updated.affectedRows;
}

// DELETE ACCOUNT

const deleteAccount = async (user_email) => {
    const [deleted] = await db.query("DELETE FROM users WHERE email = ?", [user_email])
    return deleted.affectedRows;
}

// ADMIN PRIVILEGES

// GET ALL USERS

const getAllUsers = async () => {
    const [users] = await db.query("SELECT * FROM users;");
    return users;
}

// FIND USER BY NAME

const getUserByName = async (user_name) => {
    const [user] = await db.query("SELECT *  FROM users WHERE full_name = ?", [user_name]);
    return user;
}


module.exports = {createNewUser, getUserByEmail, getUserById, updateUser, updatePassword, deleteAccount, getAllUsers, getUserByName}