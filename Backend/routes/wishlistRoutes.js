const express = require("express")
const router = express.Router()

const {
    fetchUserWishlistItems,
    insertWishlistItem,
    deleteWishlistItems
} = require("../controllers/wishlistController")
const { protect } = require("../middleware/authMiddleware")

// ROUTES

router.get("/", protect, fetchUserWishlistItems );
router.post("/", protect, insertWishlistItem)
router.delete("/:id",protect, deleteWishlistItems)

module.exports = router;
