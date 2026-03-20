import {useState} from "react";

function Signup(){

    const [submitMessage, setSubmitMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleSubmit(e){
    console.log("Submit handler called"); // Add this
    e.preventDefault();
    console.log("Default prevented"); // Add this
    setIsSubmitting(true);
    
    setTimeout(()=>{
        setSubmitMessage("Account Created Successfully! Stay tuned for more!");
        setIsSubmitting(false);
        setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
}
    return(
        <>
        {/* SIGN UP INTRO TEXT */}
        <div className="login_container">
            <div className="login_heading_container">
                <div className="signup_intro_text">
                <h1 className="login_heading title">Join the Registry</h1>
                <p className="login_paragraph">Create your private account for exclusive access.</p>
            </div>
            <button className="login_close_button">✕</button>
            </div>
            {/* FORM  CONTENT */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullname">FULL NAME</label><br />
                <input type="text" name="fullname" placeholder="Your name" /><br />
                <label htmlFor="email">EMAIL</label><br />
                <input type="email" name="email" placeholder="your@email.com" /><br />
                <label htmlFor="password">PASSWORD</label><br />
                <input type="password" name="password" placeholder="........" /><br />  
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Creating..." : "CREATE ACCOUNT"}
                </button>
            </form>
            <p className="no-account-text">Already have an account? <a className="signup-link" href="#">sign in</a></p>
            {
                submitMessage && (
                    <div className="submit-message">
                        {submitMessage}
                    </div>
                )
            }
        </div>
        </>
    )
}

export default Signup;