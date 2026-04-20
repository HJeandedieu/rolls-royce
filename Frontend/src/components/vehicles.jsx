import { useState } from "react";
import { useEffect } from "react";

import api from "../api/axios"


const CATEGORIES = ['All', "Sedan", "SUV", "Coupe", "Convertible", "Electric"];

function Vehicles(){
  const [cars, setCars] = useState([])
    const [active,  setActive] = useState("All");

    useEffect(() => {
      const fetchCars = async () => {
        try{
          const res = await api.get("/cars")
          setCars(res.data)
        }catch (err){
          console.error("Failed to fetch cars", err)
        }
      }
      fetchCars()
    }, [])

    const filteredCars = active === "All" ? cars : cars.filter(car => car.category === active)

    const handleActive = (category) =>{
        setActive(category);
    }
    return (
        <section>
            {/* VEHICLE CATEGORIZATION TABS */}
            <div className="categories_buttons_container">
              {
                CATEGORIES.map(category => 
                  <button 
                    key={category} 
                    className="category_button"
                    onClick={() => handleActive(category)}
                    style={{ 
                      backgroundColor: active === category ? "#b8965a" : "transparent",
                      color: active === category ? "black" : "rgb(131,130,128)"
                    }}
                  >{category}</button>
                )
              }
            </div>
            <div className="vehicles_container">
            

            {filteredCars.map((car)=>
                <div key={car.id} className="vehicle_card">
                <div className="vehicle_container">
                  <img className="vehicle_img" src={car.img} alt={car.name} />
                  <div className="vehicle_description">
                    <h3 className="vehicle_name">{car.name}</h3>
                    <p className="vehicle_stats">{car.year} . {car.category}</p>
                    <p className="vehicle_description_text" hidden>{car.description}</p>
                    <div className="vehicle-price-tag">
                      <span className="vehicle_price">{car.price}</span>
                      <button className="vehicle_config_button">CONFIGURE</button>
                    </div>
                  </div>
                  <div className="vehicle_badge">
                    <button>{car.badge}</button>
                  </div>
                </div>
              </div>
              )
            }
            </div>
        </section>
    )
}

export default Vehicles;