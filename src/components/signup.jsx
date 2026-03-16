function Signup(){
    return(
        <>
        {/* SIGN UP INTRO TEXT */}
        <div>
            <h1>Join the Registry</h1>
            <p>Create your private account for exclusive access.</p>
        </div>
        <button>✕</button>
        {/* FORM  CONTENT */}
        <form action="#">
            <label htmlFor="fullname">FULL NAME</label>
            <input type="text" name="fullname" placeholder="Your name" />
            <label htmlFor="email">EMAIL</label>
            <input type="email" name="email" placeholder="your@email.com" />
            <label htmlFor="password">PASSWORD</label>
            <input type="password" name="password" placeholder="........" />
            <button type="submit">CREATE ACCOUNT</button>
        </form>
        <p>Already have an account?</p>
        <a href="#">sign in</a>
        </>
    )
}