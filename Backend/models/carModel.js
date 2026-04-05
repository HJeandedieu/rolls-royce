const db = require("../config/db")

// GET ALL CARS

const getAllCars = async () =>{
    const [cars] = await db.query("SELECT * FROM cars");
    return cars;
}

// GET CARS BY ID

const getCarById = async (id) =>{
    const [car] = await db.query("SELECT * FROM cars WHERE id = ?");
    return car[0];
}

// GET CARS BY CATEGORY

const getCarByCategory = async ()=>{
    const [cars] = await db.query("SELECT * FROM cars WHERE category = ?", [category])
    return cars;
}


// ADD NEW CAR
const createCar = async (carData) => {
    const {id, name, year, price, category, badge, description, specs, img, color} = carData;
    const [result] = await db.query(
        `INSERT INTO cars
        (name, year, price, category, badge, description,specs, img, color)
        VALUES (?,?,?,?,?,?,?,?,?)`,
        [name, year, price, category, badge, description, specs, img, color]
    )
    return result.insertId // new car id
}

// UPDATE CAR

const updateCar = async (id, carData) => {
    const { name, year, price, category, badge, description, specs, img, color } = carData;
    const [result] = await db.query(
        `UPDATE cars SET
        name = ?, year = ?, price = ?, category =? ,badge = ?, 
        description = ?, specs= ?, img = ?, color= ?
        WHER id = ?`, 
        [name,year, price, category, badge, description, specs, img, color]
    )
    return result.affectedRows;
}

// DELETE CAR

const deleteCar = async (id) => {
    const [ result] = await db.query("DELETE FROM cars WHERE id = ?", [id])
    return result.affectedRows; // Returns 1 if deleted and 0 otherwise
}

module.exports = {getAllCars, getCarById, getCarByCategory, createCar, updateCar, deleteCar}