const db = require("../config/db");

// FETCH ALL CARS

async function getCars(res,req){
    try{
        const [cars] = await db.query("SELECT * FROM cars;");

        if (cars.length === 0){
            return res.status(404).json({message: "No cars found!"});
        }

        res.json(cars);
    }catch (err){
        console.error("Database error:", err);
        res.status(500).json({message: "Server Error"})
    }
}

module.exports = {getCars};