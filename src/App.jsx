import { useState } from 'react';

import Navbar from "./components/navbar.jsx";
import Vehicles from "./components/vehicles.jsx";
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import Footer from "./components/footer.jsx";


const TESTIMONIALS = [
  { name: "Maximilian V.", location: "Geneva, Switzerland", text: "RedBlue Rolls delivered the Phantom in a condition that surpassed every expectation. The white-glove service was unmatched.", rating: 5 },
  { name: "Sophia Laurent", location: "Monaco", text: "The Ghost I ordered was configured to my exact specifications. Delivered to my door with a handwritten note. Extraordinary.", rating: 5 },
  { name: "James Thornton", location: "London, UK", text: "Third purchase through RedBlue. The process never ceases to amaze me — seamless, personal, and perfectly curated.", rating: 5 },
]




function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [register, setRegister] = useState(false);
  const [registerMessage, setRegisterMessage] = useState("");

  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitMessage("Your Enquiry has been received successfully!");
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 3000);
    },1500)
  }


  const navigate = (page) =>{
    setCurrentPage(page);
    window.scrollTo({top:0, behavior:"smooth"});
  }

  const handleRegistry = () =>{
    setRegister(true);
    setRegisterMessage(" You have been added to our private list");

    setTimeout(() => {
      setRegister(false)
      setRegisterMessage("");
    },3000)
  }

  return (
    <>
    
    {/* HOME PAGE */}
    {currentPage === "home" && (<>
    <main className="home-page">
      {/* NAVBAR */}
      <Navbar currentPage={currentPage} navigate={navigate} />
      {/* MAIN CONTENT INTRO TEXT */}
      <section className="main_text">
        <p className=" supscript">Est. 1904 · Goodwood, England</p>
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
                <p className="stats_text">CONCIERGE</p>
              </div>
            </div>
          </div>
      </section>

      {/* INFINITE CAROUSEL */}
      <section className="marquee-section">
        <div className="marquee-track">
        {[...Array(2)].flatMap((_, i) =>
  ["Phantom", "Ghost", "Wraith", "Dawn", "Cullinan", "Spectre"].map((name, j) => (
    <div key={`${name}-${i}-${j}`}>
      <span className="marquee-item">{name}</span>
      <span className="marquee-dot" />
    </div>
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
      
      <Vehicles />
        
      </section>

      {/* HERITAGE SECTION */}
      <section className="heritage_container">
        <div className="heritage_image">
          <img className="heritage_image" src="/home/rolls-royce-logo.avif" alt="Engage with our heritage" />
        </div>
        <div className="heritage_text">
          <h1 id="heritage_title">BESPOKE PROGRAMME</h1>
          <h2 className="title heritage_heading">Every Detail <br />Hand-Crafted</h2>
          <p className="heritage_paragraph">At Goodwood, over 2,000 skilled artisans spend an average of 450 hours crafting a single vehicle. From the 20-hide 
            leather interiors to hand-painted coachlines drawn in one breath. Perfection is not an aspiration, it is a standard.</p>
            <button onClick={() => navigate("about")} className="heritage_button">DISCOVER OUR HERITAGE</button>
        </div>
      </section>

      {/* EXPERIENCE INTRO TEXT */}
      <section className="experience_section">
        <p className="supscript">Client Stories</p>
        <h2 className="experience_heading title">The <span className="title_span">Rolls Experience</span></h2>
        <div className="testimonials_container">
        {
          TESTIMONIALS.map((t) =>(
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(t.rating)].map((_,i) => <span key={i} className="star">★</span>)}
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
              <button className="registry-button" onClick={handleRegistry}>JOIN REGISTRY</button>
            </div>
            {register && (
               <p
               style={{
                display: register ? "block":none
               }}
               ><span>RedBlue Rolls — ✓ </span>{registerMessage}</p>
            )}
          </div>
      </section>
    </main>
    <Footer currentPage={currentPage} navigate={navigate} />
    </>)}


    {/* COLLECTION PAGE */}
    {currentPage === "collection" && (
      <>
      <main className="collection-page">
        {/* NAVBAR */}
        <Navbar currentPage={currentPage} navigate={navigate} />

        {/* VEHICLES */}
        <section className="vehicles_section">
          {/* VEHICLES INTRO TEXT */}
          <div>
            <p className="supscript">FULL COLLECTION</p>
            <h1 className="vehicles_heading title">Every <span className="title_span">Masterpiece</span></h1>
          </div>

          <Vehicles />
        </section>
      </main>
      {/* FOOTER CONTENT */}
      <Footer currentPage={currentPage} navigate={navigate} />
      </>
    )}

    {/* ABOUT PAGE */}
    {currentPage === "about" && (
      <>
      <main className="about-page">
        {/* NAVBAR */}
        <Navbar currentPage={currentPage} navigate={navigate} />
      
        {/* INTRO_TEXT */}
        <section className="about_intro_text">
          <p className="supscript">OUR STORY</p>
          <h1 className="title about_heading">RedBlue Rolls</h1>
        </section>
        
        {/* MISSION */}
        <section className="about_mission">
          <p className="supscript">OUR MISSION</p>
          <h1 className="title mission_heading">A <span className="mission_span">Different</span> Standard</h1>
          <p className="mission_paragraph">RedBlue Rolls was founded with a singular conviction: that acquiring
             a Rolls-Royce should be as extraordinary as owning one. We are not a dealership. We are a curation 
             house.</p>
          <p className="mission_paragraph">
            Each vehicle in our collection is personally inspected, certified, and presented. Each client is 
            assigned a dedicated acquisition specialist who remains their personal contact from first 
            conversation to final delivery.
          </p>
        </section>
        <section className="about_heritage_section">
          {/* HERITAGE INTRO TEX */}
            <div className="about_heritage_container">
              <p className="supscript">TIMELINE</p>
              <h1 className="title about_heritage_heading">Our <span className="about_heritage_span">Heritage</span></h1>
            </div>

            {/* TIMELINE */}
            <div className="timeline_container">
              {[
                { year: "2010", title: "Founded in Monaco", desc: "RedBlue Rolls begins as a private acquisition service for UHNW clients in the South of France." },
                { year: "2014", title: "Official Rolls-Royce Partnership", desc: "A formal alliance with the Goodwood factory establishes direct access to bespoke commissions." },
                { year: "2018", title: "Global Expansion", desc: "Offices open in London, Dubai, and Singapore. Client base grows to 400+ ultra-high-net-worth individuals." },
                { year: "2022", title: "Digital Launch", desc: "The RedBlue Rolls online platform debuts, bringing white-glove service to a digital-first audience." },
                { year: "2024", title: "Record Year", desc: "Over 120 bespoke Rolls-Royce vehicles delivered worldwide. 100% client satisfaction rating maintained." },
              ].map((item) => (
                <div key={item.year}>
                  <div className="event">
                    <div className="event-year">
                      <p className="flex_para">
                      <span className="event_year">{item.year}</span>
                      <span className="event_dot">.</span></p>
                    </div>
                    <div>
                      <h3 className="event_title">{item.title}</h3>
                      <p className="event_desc">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))
              }
            </div>
        </section>

        {/* STATS SECTION */}
        <section>
          <div className="about_vehicle_stats">
            {
            [{stats:"120+", content:"Vehicles Delivered"}, 
              {stats:"15", content:"Years of Excellence"},
               {stats:"40+", content:"Countries Served"},
                {stats:"100%", content:"Satisfaction Rate"}].map((item)=>(
              <div className="statics_container" key={item.stats}>
                <p className="stats_numerical">{item['stats']}</p>
                <p className="stats_text">{item['content']}</p>
              </div>
            ))
            }
          </div>
        </section>
      </main>
      <Footer currentPage={currentPage} navigate={navigate} />
      </>
    )}


    {/* CONTACT PAGE */}
    {currentPage === "contact" && (
      <>
      <main className="contact-page">
        {/* NAVBAR */}
        <Navbar currentPage={currentPage} navigate={navigate} />

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
                <form onSubmit={handleSubmit}>
                  <div className="user_initials">
                    <div>
                      <label htmlFor="fullName">Full Name</label><br />
                      <input type="text" name="fullName" placeholder="Your name" style={{width:"19.5rem"}} required /><br />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label><br />
                      <input type="email" name="email" placeholder="your@email.com" style={{width:"19.5rem"}} required /><br />
                    </div>
                  </div>
                  <label htmlFor="phone">PHONE</label><br />
                  <input type="tel" name="phone" placeholder="+1 000 000 0000" required /><br />
                  <label htmlFor="interest">MODEL OF INTEREST</label><br />
                  <select name="interest" id="interest" required>
                    <option value="select" selected hidden disabled>Select a Model</option>
                    {CARS.map(car => (
                      <option key={car.id} value={`${car.name} - ${car.price}`}>
                        {`${car.name} - ${car.price}`}
                      </option>
                    ))}
                    </select><br />
                  <label htmlFor="message">MESSAGE</label><br />
                  <textarea name="message" id="message" placeholder="Tell us about your vision..."></textarea><br />
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting...." : "SUBMIT ENQUIRY"}
                  </button>
                </form>
                <div>
                  {submitMessage && (
                    <p className="submit-message"><span>RedBlue Rolls</span> {submitMessage}</p>
                  )}
                </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER CONTENT */}
      <Footer currentPage={currentPage} navigate={navigate} />
      </>
    )}

    {currentPage === "login" &&(
      <>
        <Navbar currentPage={currentPage} navigate={navigate} />
        <Login navigate={navigate} />
      </>
    )}

    {currentPage === "signup" &&(
      <>
        <Navbar currentPage={currentPage} navigate={navigate} />
        <Signup navigate={navigate} />
      </>
    )}
    </>
  )
}

export default App
