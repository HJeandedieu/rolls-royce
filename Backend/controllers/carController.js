const {getAllCars, getCarById, getCarsByCategory, createCar, updateCar, deleteCar} = require("../models/carModel")

// GET CARS

const getCars = async(req,res) => {
    try{
        const {category} = req.query
        const cars = category ? await getCarsByCategory(category) : await getAllCars()
        res.status(200).json(cars)
    }catch(err){
        res.status(500).json({message: "Failed to fetch cars"})
    }
}

const getCar = async (req, res) => {
    try{
        const car = await getCarById(req.params.id)
        if(!car) return res.status(404).json({message: "Car not found"})
        res.status(200).json(car)
    }catch(err){
        res.status(500).json({message: "Failed to fetch car."})
    }
}

const addCar = async (req,res) => {
    try{
        const newCarId = await createCar(req.body)
        res.status(201).json({message: "Car added", id: newCarId})
    }catch(err){
        res.status(500).json({message:"Failed to add car"});
    }
}

const editCar = async (req,res) => {
    try{
        const updated = await updateCar(req.params.id, req.body)
        if (!updated) return res.status(404).json({message:"Car not found"})
        res.status(200).json({message:"Car updated"});
    }catch (err){
        res.status(500).json({message:"Failed to update car."})
    }
}


const removeCar = async (req,res) => {
    try{
        const deleted = await deleteCar(req.params.id)
        if(!deleted) return res.status(494).json({message: "Car not found"})
        res.status(200).json({message: "Car deleted"})
    }catch(err){
        res.status(500).json({message:"Failed to delete car."})
    }
}

module.exports = {getCars, getCar, addCar, editCar, removeCar}