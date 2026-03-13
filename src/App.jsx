import { useState, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)

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
          <div class="explore_container">
            <div className="explore_button_container">
              <button>EXPLORE COLLECTION</button>
              <button>OUR STORY</button>
            </div>
            <div className="stats_container">
              <div>
                <p>6+</p>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
      </section>

      {/* INFINITE CAROUSEL */}
      <section></section>
    </main>
  )
}

export default App
