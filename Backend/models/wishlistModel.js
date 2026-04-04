const db = require("../config/db");

// GET ALL WISHLIST ITEMS SPECIFIC TO USER

const getUserWishlistItems = async(user_id)=>{
    const [cars] = await db.query("SELECT * FROM wishlist WHERE user_id = ?", [user_id]);
    return cars;
}

// CHECK IF CAR IS ALREADY IN WISHLIST

const isCarInWishlist = async(user_id, car_id) =>{
    const [rows] = await db.query("SELECT * FROM wishlist WHERE user_id = ? AND car_id = ?", [user_id, car_id]);
    return rows.length > 0;
}

// ADD NEW WISHLIST ITEM

const addWishlistItem = async(item_data)=>{
    const {user_id,car_id} = item_data;

    if(!await isCarInWishlist(user_id,car_id)){
        const [item] = await db.query(
            `INSERT INTO wishlist
            (user_id, car_id)
            VALUES(?,?)`, [user_id, car_id])
        return item.insertId;
    }else{
        return null;
    }
}


// DELETE WISHLIST ITEM

const removeWishlistItem = async(item_id) =>{
    const [removed] = await db.query("DELETE FROM wishlist WHERE id = ?", [item_id])
    return removed.affectedRows;
}

// CLEAR USER WISHLIST

const clearUserWishlist = async (user_id) =>{
    const [clear] = await db.query("DELETE FROM wishlist WHERE user_id = ?", [user_id]);
    return clear.affectedRows;
}

module.exports = {getUserWishlistItems, addWishlistItem, removeWishlistItem, clearUserWishlist}