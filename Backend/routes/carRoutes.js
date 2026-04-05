const express = require("express");
const router = express.Router();
const {
    getCars, 
    getCar, 
    addCar, 
    editCar, 
    removeCar
} = require("../controllers/carController");
const { protect } = require("../middleware/authMiddleware")

// PUBLIC
router.get("/", getCars);
router.get("/:id", getCar)

// PROTECTED
router.post("/", protect, addCar)
router.put("/:id",protect, editCar)
router.delete("/:id",protect, removeCar)

module.exports = router;