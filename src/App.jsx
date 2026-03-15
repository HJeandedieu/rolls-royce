import { useState } from 'react'

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
]

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

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const navigate = (page) =>{
    setCurrentPage(page);
    window.scrollTo({top:0, behavior:"smooth"});
  }
  return (
    <>
    
    {/* HOME PAGE */}
    {currentPage === "home" && (<>
    <main className="home-page">
      {/* NAVBAR */}
      <nav>
        {/* INTRO TEXT */}
        <div className="navigation-intro-text">
          <h1 className="nav-intro-text">RED<span>BLUE</span> ROLLS</h1>
        </div>
        {/* NAVIGATION LINKS */}
        <div className="navigation-links">
          <button onClick= {() => navigate("home")}>HOME</button>
          <button onClick= {() => navigate("collection")}>COLLECTION</button>
          <button onClick= {() => navigate("about")}>ABOUT</button>
          <button onClick= {() => navigate("contact")}>CONTACT</button>
        </div>
        {/* USER AUTH BUTTONS */}
        <div className="nav-buttons">
          <button className="login nav-button">LOGIN</button>
          <button className="signup nav-button">SIGN UP</button>
        </div>
      </nav>
      
      {/* MAIN CONTENT INTRO TEXT */}
      <section className="main_text">
        <p className="main_text supscript">Est. 1904 · Goodwood, England</p>
        <h1 className="main_text_heading title">Where Silence <br />Becomes <span className="title_span">Luxury</span></h1>
        <p className="main_text_paragraph">RedBlue Rolls curates the world's most exceptional motor cars for <br />
        discerning collectors. Each vehicle a masterpiece. Each acquisition an<br />
           event.</p>
          <div className="explore_container">
            <div className="explore_buttons_container">
              <button className="explore_collection">EXPLORE COLLECTION</button>
              <button className="explore_story">OUR STORY</button>
            </div>
            <div className="stats_container">
              <div>
                <p className="stats_number">6+</p>
                <p className="stats_text">MODELS</p>
              </div>
              <div>
                <p className="stats_number">100%</p>
                <p className="stats_text">CERTIFIED</p>
              </div>
              <div>
                <p className="stats_number">24/7</p>
                <p className="stats_text">CONVERGE</p>
              </div>
            </div>
          </div>
      </section>

      {/* INFINITE CAROUSEL */}
      <section className="marquee-section">
        <div className="marquee-track">
        {[...Array(2)].flatMap(()=>
        ["Phantom", "Ghost", "Wraith", "Dawn", "Cullinan", "Spectre"].map(name =>(
          <span key={name + Math.random()} className="marquee-item">
            {name} <span className="marquee-dot" />
          </span>
        ))
        )}
        </div>
      </section>

      {/* VEHICLES */}
      <section className="vehicles_section">
        {/* VEHICLES INTRO TEXT */}
        <div>
          <p className="supscript">THE FLEET</p>
          <h1 className="vehicles_heading title">Latest <span className="title_span">Vehicles</span></h1>
        </div>
        <div className="categories_buttons_container">
          {
            CATEGORIES.map(category => 
              <button key={category} className="category_button">{category}</button>
            )
          }
        </div>
        {/* VEHICLE CATEGORIZATION TABS */}
        <div className="vehicles_container">
          {
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
              </div>
            </div>
            )
          }
        </div>
      </section>

      {/* HERITAGE SECTION */}
      <section className="heritage_container">
        <div>
          <img className="heritage_image" src="/home/rolls-royce-logo.avif" alt="Engage with our heritage" />
        </div>
        <div className="heritage_text">
          <h1 id="heritage_title">BESPOKE PROGRAMME</h1>
          <h2 className="title heritage_heading">Every Detail <br />Hand-Crafted</h2>
          <p className="heritage_paragraph">At Goodwood, over 2,000 skilled artisans spend an average of 450 hours crafting a single vehicle. From the 20-hide 
            leather interiors to hand-painted coachlines drawn in one breath. Perfection is not an aspiration, it is a standard.</p>
            <button className="heritage_button">DISCOVER OUR HERITAGE</button>
        </div>
      </section>

      {/* EXPERIENCE INTRO TEXT */}
      <section className="experience_section">
        <p className="supscript">Client Stories</p>
        <h2 className="experience_heading title">The <span className="title_span">Rolls Experience</span></h2>
        <div className="testimonials_container">
        {
          TESTIMONIALS.map((t, i) =>(
            <div key={i} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(t.rating)].map((_, si) => <span key={si} className="star">★</span>)}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-location">{t.location}</p>
              </div>
            </div>
          ))}
          </div>
      </section>

          {/* JOIN THE COMMUNITY */}
      <section>
          <div className="join-container">
            <p className="supscript join_span">Private List</p>
            <p className="title join-heading">First Access</p>
            <p className="title join-heading">Always</p>
            <p className="join-text">Join our private registry for exclusive previews and bespoke acquisition opportunities.</p>
            <div className="join-form">
              <input type="text" placeholder="Your email address" className="input-registry" />
              <button className="registry-button">JOIN REGISTRY</button>
            </div>
          </div>
      </section>
    </main>
    <footer>
      <div className="footer-container">
        <div>
          <h2 className="footer-heading title">Red<span>Blue</span> Rolls</h2>
          <p className="footer-text">The world's most exclusive Rolls-Royce <br />acquisition service. Private. Precise. Perfection.</p>
        </div>
        
        {FOOTER_CONTENT.map((content, index)=>
        <div key={index} className="footer-content">
        <h1 className="footer-content-heading">{content.heading}</h1>
        <div className="footer-links">{content.links.map((element, index)=>(
          <p className="footer-link" key={index}>{element}</p>
        ))}</div>
        </div>
        )}
        </div>
      <div className="footer-bottom">
        <p>© 2024 RedBlue Rolls. All rights reserved. Not affiliated with Rolls-Royce Motor Cars Ltd.</p>
        <p>Monaco · London · Dubai · Singapore</p>
      </div>
    </footer>
    </>)}


    {/* COLLECTION PAGE */}
    {currentPage === "collection" && (
      <>
      <main className="collection-page">
        {/* NAVBAR */}
        <nav>
          {/* INTRO TEXT */}
          <div className="navigation-intro-text">
            <h1 className="nav-intro-text">RED<span>BLUE</span> ROLLS</h1>
          </div>
          {/* NAVIGATION LINKS */}
          <div className="navigation-links">
            <button onClick= {() => navigate("home")}>HOME</button>
            <button onClick= {() => navigate("collection")}>COLLECTION</button>
            <button onClick= {() => navigate("about")}>ABOUT</button>
            <button onClick= {() => navigate("contact")}>CONTACT</button>
          </div>
          {/* USER AUTH BUTTONS */}
          <div className="nav-buttons">
            <button className="login nav-button">LOGIN</button>
            <button className="signup nav-button">SIGN UP</button>
          </div>
        </nav>

        {/* VEHICLES */}
        <section className="vehicles_section">
          {/* VEHICLES INTRO TEXT */}
          <div>
            <p className="supscript">FULL COLLECTION</p>
            <h1 className="vehicles_heading title">Every <span className="title_span">Masterpiece</span></h1>
          </div>
          <div className="categories_buttons_container">
            {
              CATEGORIES.map(category => 
                <button key={category} className="category_button">{category}</button>
              )
            }
          </div>
          {/* VEHICLE CATEGORIZATION TABS */}
          <div className="vehicles_container">
            {
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
                </div>
              </div>
              )
            }
          </div>
        </section>
      </main>
      {/* FOOTER CONTENT */}
      <footer>
        <div className="footer-container">
          <div>
            <h2 className="footer-heading title">Red<span>Blue</span> Rolls</h2>
            <p className="footer-text">The world's most exclusive Rolls-Royce <br />acquisition service. Private. Precise. Perfection.</p>
          </div>
            
          {FOOTER_CONTENT.map((content, index)=>
            <div key={index} className="footer-content">
              <h1 className="footer-content-heading">{content.heading}</h1>
              <div className="footer-links">{content.links.map((element, index)=>(
                <p className="footer-link" key={index}>{element}</p>
              ))}
            </div>
            </div>
          )}
          </div>
        <div className="footer-bottom">
          <p>&copy; 2024 RedBlue Rolls. All rights reserved. Not affiliated with Rolls-Royce Motor Cars Ltd.</p>
          <p>Monaco · London · Dubai · Singapore</p>
        </div>
      </footer>
      </>
    )}

    {/* ABOUT PAGE */}
    {currentPage === "about" && (
      <>
      <main className="about-page">
        {/* NAVBAR */}
        <nav>
          {/* INTRO TEXT */}
          <div className="navigation-intro-text">
            <h1 className="nav-intro-text">RED<span>BLUE</span> ROLLS</h1>
          </div>
          {/* NAVIGATION LINKS */}
          <div className="navigation-links">
            <button onClick= {() => navigate("home")}>HOME</button>
            <button onClick= {() => navigate("collection")}>COLLECTION</button>
            <button onClick= {() => navigate("about")}>ABOUT</button>
            <button onClick= {() => navigate("contact")}>CONTACT</button>
          </div>
          {/* USER AUTH BUTTONS */}
          <div className="nav-buttons">
            <button className="login nav-button">LOGIN</button>
            <button className="signup nav-button">SIGN UP</button>
          </div>
        </nav>
        <section>
          <h1 className="about-heading">Page Content unavailable at the moment</h1>
        </section>
      </main>
      </>
    )}


    {/* CONTACT PAGE */}
    {currentPage === "contact" && (
      <>
      <main className="contact-page">
        {/* NAVBAR */}
        <nav>
          {/* INTRO TEXT */}
          <div className="navigation-intro-text">
            <h1 className="nav-intro-text">RED<span>BLUE</span> ROLLS</h1>
          </div>
          {/* NAVIGATION LINKS */}
          <div className="navigation-links">
            <button onClick= {() => navigate("home")}>HOME</button>
            <button onClick= {() => navigate("collection")}>COLLECTION</button>
            <button onClick= {() => navigate("about")}>ABOUT</button>
            <button onClick= {() => navigate("contact")}>CONTACT</button>
          </div>
          {/* USER AUTH BUTTONS */}
          <div className="nav-buttons">
            <button className="login nav-button">LOGIN</button>
            <button className="signup nav-button">SIGN UP</button>
          </div>
        </nav>

        {/* RESERVE CONSULTATION */}
        <section className="reservation_section">
          {/* JOURNEY INTRO TEXT */}
          <div>
            <p className="supscript">GET IN TOUCH</p>
            <h1 className="reserve_heading title">Begin Your <span className="title_span">Journey</span></h1>
          </div>

          {/* MAIN JOIN COMMUNITY CONTENT*/}

          <div className="join_content_container">
            <div className="address_info_container">
              <h1 className="address_supscript">OUR OFFICES</h1>
              {/* HEADQUARTERS */}
              <div>
                <h1>MONACO HQ</h1>
                <p>Villa Royale, Avenue Princesse Grace</p>
                <p>Monte-Carlo, MC 98000</p>
              </div>
              {/* BRANCHES */}
              <div>
                <h1>LONDON</h1>
                <p>45 Park Lane, Mayfair</p>
                <p>London, W1K 1PN</p>
              </div>
              {/* PHONE CONTACT */}
              <div>
                <h1>PHONE</h1>
                <p>+377 99 99 9000</p>
              </div>
              {/* EMAIL ADDRESS */}
              <div>
                <h1>EMAIL</h1>
                <p>private@redbluerolls.com</p>
              </div>
              {/* WORKING HOURS */}
              <div>
                <h1>HOURS</h1>
                <p>Monday-Saturday</p>
                <p>9:00 AM – 8:00 PM CET</p>
              </div>
            </div>

            {/* REGISTRATION FORM */}
            <div className="reservation_form">
                {/* INTRO TEXT */}
                <div className="reservation_intro_text">
                  <p className="supscript registration-supscript">PRIVATE ENQUIRY</p>
                  <h1 className="reservation_form_heading title">Reserve a Consultation</h1>
                </div>
                <form action="#">
                  <div className="user_initials">
                    <div>
                      <label htmlFor="fullName">Full Name</label><br />
                      <input type="text" name="fullName" placeholder="Your name" style={{width:"19.5rem"}} /><br />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label><br />
                      <input type="email" name="email" placeholder="your@email.com" style={{width:"19.5rem"}} /><br />
                    </div>
                  </div>
                  <label htmlFor="phone">PHONE</label><br />
                  <input type="tel" name="phone" placeholder="+1 000 000 0000" /><br />
                  <label htmlFor="interest">MODEL OF INTEREST</label><br />
                  <select name="interest" id="interest">
                    <option value="select">Select a Model</option>
                  </select><br />
                  <label htmlFor="message">MESSAGE</label><br />
                  <textarea name="message" id="message" placeholder="Tell us about your vision..."></textarea><br />
                  <button>SUBMIT ENQUIRY</button>
                </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER CONTENT */}
      <footer>
        <div className="footer-container">
          <div>
            <h2 className="footer-heading title">Red<span>Blue</span> Rolls</h2>
            <p className="footer-text">The world's most exclusive Rolls-Royce <br />acquisition service. Private. Precise. Perfection.</p>
          </div>

          {FOOTER_CONTENT.map((content, index)=>
          <div key={index} className="footer-content">
          <h1 className="footer-content-heading">{content.heading}</h1>
          <div className="footer-links">{content.links.map((element, index)=>(
            <p className="footer-link" key={index}>{element}</p>
          ))}</div>
          </div>
          )}
          </div>
        <div className="footer-bottom">
          <p>© 2024 RedBlue Rolls. All rights reserved. Not affiliated with Rolls-Royce Motor Cars Ltd.</p>
          <p>Monaco · London · Dubai · Singapore</p>
        </div>
      </footer>
      </>
    )}
    </>
  )
}

export default App
