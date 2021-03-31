import React, { useState } from 'react'
import Authentication from './Authentication'

function AuthModule() {

    const [isAuthOpen, setIsAuthOpen] = useState(false)

    const loginClickHandler = e => {
        e.preventDefault();
        setIsAuthOpen(!isAuthOpen)
    }

    return (
        <>
            <div className="auth">
                <button className="login" onClick={loginClickHandler}>Login</button>
                <a className="register" onClick={loginClickHandler}>Register</a>
            </div>
            <Authentication isAuthOpen={isAuthOpen}
            setIsAuthOpen={setIsAuthOpen}
            onClose = {() => setIsAuthOpen(!isAuthOpen)}
            />
        </>
    )
}

export default AuthModule
