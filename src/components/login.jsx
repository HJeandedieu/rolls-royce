function Login(){
    return (
        <>
        {/* LOGIN INTRO TEXT */}
        <div className="login_intro_text">
            <h1>Welcome Back</h1>
            <p>Access your private collection and consultations.</p>
        </div>
        {/* LOGIN FORM */}
        <form action="#">
            <label htmlFor="email">EMAIL</label>
            <input type="email" name="email" placeholder="your@email.com" />
            <label htmlFor="password">PASSWORD</label>
            <input type="password" name="password" placeholder="........" />
            <button type="submit">SIGN IN</button>
        </form>
        <p>Don't have an account?</p>
        <a href="#">Sign Up</a>
        </>
    )
}

export default Login;