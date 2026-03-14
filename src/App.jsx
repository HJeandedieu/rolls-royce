import { useState } from 'react'

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
    category: "Coupé",
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
];

const TESTIMONIALS = [
  { name: "Maximilian V.", location: "Geneva, Switzerland", text: "RedBlue Rolls delivered the Phantom in a condition that surpassed every expectation. The white-glove service was unmatched.", rating: 5 },
  { name: "Sophia Laurent", location: "Monaco", text: "The Ghost I ordered was configured to my exact specifications. Delivered to my door with a handwritten note. Extraordinary.", rating: 5 },
  { name: "James Thornton", location: "London, UK", text: "Third purchase through RedBlue. The process never ceases to amaze me — seamless, personal, and perfectly curated.", rating: 5 },
]

const CATEGORIES = ['All', "Sedan", "SUV", "Coupe", "Convertible", "Electric"];

const FOOTER_CONTENT = [
  {heading:"collection", links: ['All Models', 'Phantom', 'Ghost', 'Cullinan', 'Wraith', 'Spectre']},
  {heading: "Company", links: ['Our Story', 'Bespoke', 'Certification', 'Press', 'Careers']},
  {heading: "Contact", links: ['Monaco Office', 'London Office', 'Private Enquiry', 'Concierge', 'FAQ']}
]
  return (
    <>
    <main className="rolls-royce">
      {/* NAVBAR */}
      <nav>
        {/* INTRO TEXT */}
        <div className="navigation-intro-text">
          <h1 className="nav-intro-text">RED<span>BLUE</span> ROLLS</h1>
        </div>
        {/* NAVIGATION LINKS */}
        <div className="navigation-links">
          <a href="#">HOME</a>
          <a href="#">COLLECTION</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
        </div>
        {/* USER AUTH BUTTONS */}
        <div className="nav-buttons">
          <button className="login nav-button">LOGIN</button>
          <button className="signup nav-button">SIGN UP</button>
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
        <div>
          {
            CATEGORIES.map(category => 
              <button key={category} className="category_button">{category}</button>
            )
          }
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
        <h2>The <span>Rolls Experience</span></h2>
        {
          TESTIMONIALS.map((t, i) =>(
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(t.rating)].map((_, si) => <span key={si} className="star">★</span>)}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <span className="testimonial-author">{t.name}</span>
                <span className="testimonial-name">{t.location}</span>
              </div>
            </div>
          ))}
      </section>

          {/* JOIN THE COMMUNITY */}
      <section>
          <div className="join-container">
            <p>Private List</p>
            <p>First Access</p>
            <p>Always</p>
            <p>Join our private registry for exclusive previews and bespoke acquisition opportunities.</p>
            <div>
              <input type="text" placeholder="Your email address" className="input-registry" />
              <button className="registry-button">JOIN REGISTRY</button>
            </div>
          </div>
      </section>
    </main>
    <footer>
      <div className="footer-container">
        <div>
          <h2 className="footer-heading">Red<span>Blue</span> Rolls</h2>
          <p className="footer-text">The world's most exclusive Rolls-Royce acquisition service. Private. Precise. Perfection.</p>
        </div>
        <div>
        {FOOTER_CONTENT.map((content, index)=>
        <div key={index} className="footer-content">
        <h1 className="footer-heading">{content.heading}</h1>
        <ul className="footer-links">{content.links.map((element, index)=>(
          <li className="footer-link" key={index}>{element}</li>
        ))}</ul>
        </div>
        )}
        </div>
      </div>
      <div>
        <p>© 2024 RedBlue Rolls. All rights reserved. Not affiliated with Rolls-Royce Motor Cars Ltd.</p>
        <p>Monaco · London · Dubai · Singapore</p>
      </div>
    </footer>
    </>
  )
}

export default App
