import { useState } from 'react';

function Navbar({ currentPage, navigate }){
    return (
        <nav>
          {/* INTRO TEXT */}
          <div className="navigation-intro-text">
            <button onClick={() => navigate("home")} className="nav-intro-text">RED<span>BLUE</span> ROLLS</button>
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
            <button className="login nav-button" onClick= {() => navigate("login")}>LOGIN</button>
            <button className="signup nav-button" onClick= {() => navigate("signup")}>SIGN UP</button>
          </div>
        </nav>
    )
}

export default Navbar;