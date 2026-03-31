const express = require("express");
const router = express.Router();
const {getCars, getCar, addCar, editCar, removeCar} = require("../controllers/carController");

router.get("/", getCars);
router.get("/:id", getCar)
router.post("/", addCar)
router.put("/:id", editCar)
router.delete("/:id", removeCar)

module.exports = router;