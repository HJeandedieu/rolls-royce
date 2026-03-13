import { useState, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
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
    img: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
    color: "#3d5a4e",
  },
  {
    id: 4,
    name: "Wraith",
    year: 2024,
    price: "$330,000",
    category: "Coupé",
    badge: "Limited",
    description: "The most powerful Rolls-Royce ever built. A grand tourer that draws power from the stars — its panoramic Starlight Headliner a testament.",
    specs: { engine: "6.6L V12", power: "624 HP", torque: "820 Nm", top: "250 km/h" },
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    color: "#2d3a4a",
  },
];

const CATEGORIES = ['All', "Sedan", "SUV", "Coupe", "Convertible", "Electric"];
  return (
    <main className="rolls-royce">
      {/* NAVBAR */}
      <nav>
        {/* INTRO TEXT */}
        <div>
          <h1>RED<span>BLUE</span>ROLLS</h1>
        </div>
        {/* NAVIGATION LINKS */}
        <div>
          <a href="#">HOME</a>
          <a href="#">COLLECTION</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
        </div>
        {/* USER AUTH BUTTONS */}
        <div>
          <button>LOGIN</button>
          <button>SIGN UP</button>
        </div>
      </nav>
      
      {/* MAIN CONTENT INTRO TEXT */}
      <section className="main_text">
        <p>Est. 1904 · Goodwood, England</p>
        <h1>Where Silence <br />Becomes <span>Luxury</span></h1>
        <p>RedBlue Rolls curates the world's most exceptional motor 
          cars for discerning collectors. Each vehicle a masterpiece. 
          Each acquisition an event.</p>
          <div className="explore_container">
            <div className="explore_button_container">
              <button>EXPLORE COLLECTION</button>
              <button>OUR STORY</button>
            </div>
            <div className="stats_container">
              <div>
                <p>6+</p>
                <p>MODELS</p>
              </div>
              <div>
                <p>100%</p>
                <p>CERTIFIED</p>
              </div>
              <div>
                <p>24/7</p>
                <p>CONVERGE</p>
              </div>
            </div>
          </div>
      </section>

      {/* INFINITE CAROUSEL */}
      <section></section>

      {/* VEHICLES */}
      <section>
        {/* VEHICLES INTRO TEXT */}
        <div>
          <p>THE FLEET</p>
          <h1>Latest <span>Vehicles</span></h1>
        </div>
        {/* VEHICLE CATEGORIZATION TABS */}
        <div>
          {
            CARS.map((car) =>
            <div key={car.id} className="vehicle_container">
              <img src={car.img} alt={car.name} />
              <div className="vehicle_description">
                <h3>{car.name}</h3>
                <p>{car.year}.{car.category}</p>
                <p className="vehicle_description">{car.description}</p>
                <div>
                  <span>{car.price}</span>
                  <button className="vehicle_config_button">CONFIGURE</button>
                </div>
              </div>
            </div>
            )
          }
        </div>
      </section>

      {/* HERITAGE SECTION */}
      <section>
        <div>
          <div>
            <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80" alt="Engage with our heritage" />
          </div>
          <div>
            <h1 id="heritage_title">BESPOKE PROGRAMME</h1>
            <h2>Every Detail <br />Hand-Crafted</h2>
            <p>At Goodwood, over 2,000 skilled artisans spend an average of 450 hours crafting a single vehicle. From the 20-hide 
              leather interiors to hand-painted coachlines drawn in one breath — perfection is not an aspiration, it is a standard.</p>
              <button>DISCOVER OUR HERITAGE</button>
          </div>
        </div>
      </section>

      {/* EXPERIENCE INTRO TEXT */}
      <section>
        <p>Client Stories</p>
        <h2></h2>
      </section>
    </main>
  )
}

export default App
