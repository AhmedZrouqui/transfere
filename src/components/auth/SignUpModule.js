import React from 'react'

function SignUpModule() {

    const onPasswordConfim = e => {
        const pdoc = document.getElementById("pinput");
        
        if(e.target.value !== pdoc.value){
            e.target.classList.add("invalid-password");
        }
        else{
            e.target.classList.remove("invalid-password");
        }
    }

    return (
        <div className="register-form">
            <div className="register-header">
                <h2>Or, Register</h2>
            </div>
            <div className="form-container">
                <div className="form-div">
                    <input type="email" className="EmailInput input" placeholder=" "></input>
                    <label>Email</label>
                </div>
                <div className="form-div">
                    <input type ="text" className="UsernameInput input" placeholder=" "></input>
                    <label>Username</label>
                </div>
                <div className="form-div">
                    <input type="password" id="pinput" className="PasswordInput input" placeholder=" "></input>
                    <label>Password</label>
                </div>
                <div className="form-div">
                    <input type="password" className="PasswordInput input" placeholder=" " onChange={onPasswordConfim}></input>
                    <label>Confirm Password</label>
                </div>
                <button className="register-btn">Confirm</button>
            </div>
        </div>
    )
}

export default SignUpModule
