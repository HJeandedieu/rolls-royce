import {useState} from "react";

import api from "../api/axios"

function Login({navigate}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try{
            const res = await api.post("/auth/login", {email, password})
            localStorage.setItem("token", res.data.token)

            setTimeout(()=>{
                setIsSubmitting(false);
                navigate("home")
            },3000);

        }catch (err){
            setIsSubmitting(false)
        }
        
        
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
                <input type="email" name="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com" required /><br />
                <label htmlFor="password">PASSWORD</label><br />
                
                <input type="password" name="password"
                value={password} onChange={(e) => setPassword(e.target.value)}
                 placeholder="........" required /> <br />
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