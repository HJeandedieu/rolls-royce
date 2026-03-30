// PROMISES UNDERSTANDING EXERCISES

async function getCars(){
    try{
        const cars = await db.query(`SELECT * FROM cars;`);

        if(cars.length === 0){
            console.log("No cars found!")
        }

        cars.forEach(car => {
            console.log(car);
        })
        return cars;
    }catch(err){
        console.error(err)
    }
}