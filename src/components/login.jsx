function Login({navigate}){

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
            <form>
                <label htmlFor="email">EMAIL</label><br />
                <input type="email" name="email" placeholder="your@email.com" /><br />
                <label htmlFor="password">PASSWORD</label><br />
                
                <input type="password" name="password" placeholder="........" /> <br />
                <button type="submit">SIGN IN</button><br />
            </form>
            <p className="no-account-text">Don't have an account? <a className="signup-link" href="#">Sign Up</a></p>
        </div>
        </>
    )
}

export default Login;