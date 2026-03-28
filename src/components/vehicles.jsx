import {usestate} from "react";

const CARS = [
  {
    id: 1,
    name: "Phantom",
    year: 2024,
    price: "$495,000",
    category: "Sedan",
    badge: "Flagship",
    description: "The pinnacle of automotive craftsmanship. 563 horsepower of serene power wrapped in hand-stitched leather and 44 lbs of sound-deadening material.",
    specs: { engine: "6.75L V12", power: "563 HP", torque: "900 Nm", top: "250 km/h" },
    img: "/home/phantom.jpg",
    color: "#c8a96e",
  },
  {
    id: 2,
    name: "Ghost",
    year: 2024,
    price: "$332,500",
    category: "Sedan",
    badge: "Best Seller",
    description: "Post Opulence. A whisper of power, a cathedral of calm. The Ghost redefines what a modern luxury sedan can be.",
    specs: { engine: "6.75L V12", power: "563 HP", torque: "900 Nm", top: "250 km/h" },
    img: "/home/ghost.jpg",
    color: "#9ea8b3",
  },
  {
    id: 3,
    name: "Cullinan",
    year: 2024,
    price: "$348,500",
    category: "SUV",
    badge: "New",
    description: "Effortless everywhere. The world's only true super-luxury SUV, hand-built at Goodwood for those who refuse compromise.",
    specs: { engine: "6.75L V12", power: "563 HP", torque: "850 Nm", top: "250 km/h" },
    img: "/home/cullinan.jpg",
    color: "#3d5a4e",
  },
  {
    id: 4,
    name: "Wraith",
    year: 2024,
    price: "$330,000",
    category: "Coupe",
    badge: "Limited",
    description: "The most powerful Rolls-Royce ever built. A grand tourer that draws power from the stars — its panoramic Starlight Headliner a testament.",
    specs: { engine: "6.6L V12", power: "624 HP", torque: "820 Nm", top: "250 km/h" },
    img: "/home/wraith.jpg",
    color: "#6b4226",
  },
  {
    id: 5,
    name: "Dawn",
    year: 2024,
    price: "$356,000",
    category: "Convertible",
    badge: "Exclusive",
    description: "Open air perfection. The Dawn takes 22 seconds to lower its roof — each second a ceremony of transformation.",
    specs: { engine: "6.6L V12", power: "563 HP", torque: "820 Nm", top: "250 km/h" },
    img: "/home/dawn.jpg",
    color: "#c4a882",
  },
  {
    id: 6,
    name: "Spectre",
    year: 2024,
    price: "$420,000",
    category: "Electric",
    badge: "Electric",
    description: "The first fully electric Rolls-Royce. 585 horsepower of silent, instant torque. The future of effortless luxury.",
    specs: { engine: "Dual Motor EV", power: "585 HP", torque: "900 Nm", top: "250 km/h" },
    img: "/home/spectre.jpg",
    color: "#2d3a4a",
  },
]

function vehicles(){
    return (
        <>
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
            {active === "All" &&
            CARS.map((car) =>
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

            {
              CARS.filter((car) => car.category === active).map((car)=>
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
        </>
    )
}