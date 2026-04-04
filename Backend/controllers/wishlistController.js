const {getUserWishlistItems, addWishlistItem, removeWishlistItem, clearUserWishlist} = require("../models/wishlistModel")

// GET ALL USER SPECIFIC WISHLIST ITEMS

const fetchUserWishlistItems = async(req,res) => {
    try{
        const {user} = req.query;
        const items = await getUserWishlistItems(user);
        if (items.length === 0) return res.status(404).json({message: "No wishlist items found"})
        res.status(200).json(items)
    }catch(err){
        res.status(500).json({message: "Failed to fetch wishlist items"})
    }
}

// ADD WISHLIST ITEMS

const insertWishlistItem = async (req,res) => {
    try{
        const inserted = await addWishlistItem(req.body);
        if (!inserted) return res.status(409).json({message: "Item already in wishlist"})
        res.status(201).json({message: "Item added to wishlist successfully"})
    }catch(err){
        res.status(500).json({message: "Failed to add item to wishlist"})
    }
}

// REMOVE WISHLIST ITEM

const deleteWishlistItems = async (req, res)=>{
    try{
        const {user_id} = req.query;
        const {item_id} = req.query;
        const deletedItems = user_id ? await clearUserWishlist(user_id) : await removeWishlistItem(item_id);
        if(!deletedItems) return res.status(404).json({message: "Item not found."})
        res.status(200).json({message: "Wishlist item(s) deleted successfully"})
    }catch(err){
        res.status(500).json({message: "Failed to delete Wishlist item"})
    }
}

module.exports = {fetchUserWishlistItems, insertWishlistItem, deleteWishlistItems};