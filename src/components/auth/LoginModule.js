import React from 'react'

function LoginModule() {
    return (
        <div className="login-form">
            <div className="loginHeader">
                <p>Welcome back!</p>
                <h2>Sign in to Portal.io</h2>
            </div>

            <div className="form-container">
                <div className="form-div">
                    <input type="text" className="textInput input" placeholder=" "></input>
                    <label>Email Address</label>
                </div>
                <div className="form-div">
                    <input type="password" className="passwordInput input" placeholder=" "></input>
                    <label>Password</label>
                </div>
                <a href="" className="forgot-password">Forgot your password ?</a>
                <button className="login-btn">Login</button>
            </div>
        </div>
    )
}

export default LoginModule
