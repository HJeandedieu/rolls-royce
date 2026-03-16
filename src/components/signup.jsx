function Signup(){
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
            <form action="#">
                <label htmlFor="fullname">FULL NAME</label><br />
                <input type="text" name="fullname" placeholder="Your name" /><br />
                <label htmlFor="email">EMAIL</label><br />
                <input type="email" name="email" placeholder="your@email.com" /><br />
                <label htmlFor="password">PASSWORD</label><br />
                <input type="password" name="password" placeholder="........" /><br />  
                <button type="submit">CREATE ACCOUNT</button>
            </form>
            <p className="no-account-text">Already have an account? <a className="signup-link" href="#">sign in</a></p>
            
        </div>
        </>
    )
}

export default Signup;