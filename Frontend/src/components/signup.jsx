import { useState } from "react";

import api from "../api/axios"

function Signup({ navigate }) {

  const [user, setUser] = useState(null);

  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showToast = (message) => {
    console.log(message)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try{
      const res = await api.post("/auth/signup", {full_name, email, password})
      localStorage.setItem("token", res.data.token)
      setUser(res.data.user)

      setTimeout(() => {
      setSubmitMessage("Account Created Successfully! Stay tuned for more!");
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 3000);
    }, 3000);

    }catch(err) {
      showToast("Signup failed")
    }
    
  }

  const handleClose = () => {
    navigate("home");
  };
  return (
    <>
      {/* SIGN UP INTRO TEXT */}
      <div className="login_container">
        <div className="login_heading_container">
          <div className="signup_intro_text">
            <h1 className="login_heading title">Join the Registry</h1>
            <p className="login_paragraph">
              Create your private account for exclusive access.
            </p>
          </div>
          <button className="login_close_button" onClick={handleClose}>
            ✕
          </button>
        </div>
        {/* FORM  CONTENT */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">FULL NAME</label>
          <br />
          <input type="text" name="full_name" value={full_name} onChange={(e) => setFullName(e.target.value)} placeholder="Your name" required />
          <br />
          <label htmlFor="email">EMAIL</label>
          <br />
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required />
          <br />
          <label htmlFor="password">PASSWORD</label>
          <br />
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="........" required />
          <br />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "CREATE ACCOUNT"}
          </button>
        </form>
        <p className="no-account-text">
          Already have an account?{" "}
          <a className="signup-link" onClick={()=> navigate("login")} href="#">login</a>
        </p>
        {submitMessage && <div className="submit-message">{submitMessage}</div>}
      </div>
    </>
  );
}

export default Signup;
