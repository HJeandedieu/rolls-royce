import {useState} from "react";

function Login({navigate}){
    
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(()=>{
            setIsSubmitting(false);
            navigate("home")
        },3000);
        
    }

    const handleClose = () =>{
        navigate("home");
    }
    return (
        <>
        {/* LOGIN INTRO TEXT */}

        <div className="login_container">
            <div className="login_heading_container">
                <div className="login_intro_text">
                    <h1 className="title login_heading">Welcome Back</h1>
                    <p className="login_paragraph">Access your private collection and consultations.</p>
                </div>
                <button className="login_close_button" onClick={handleClose}>✕</button>
            </div>
            {/* LOGIN FORM */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">EMAIL</label><br />
                <input type="email" name="email" placeholder="your@email.com" required /><br />
                <label htmlFor="password">PASSWORD</label><br />
                
                <input type="password" name="password" placeholder="........" required /> <br />
                <button type="submit" disabled={isSubmitting}>
                    {
                        isSubmitting ? "Signing In..." : "SIGN IN"
                    }
                </button><br />
            </form>
            <p className="no-account-text">Don't have an account? <a className="signup-link" onClick={() => navigate("signup")} href="#">Sign Up</a></p>
        </div>
        </>
    )
}

export default Login;