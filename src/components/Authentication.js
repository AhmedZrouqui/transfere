import React from 'react'
import reactDom from 'react-dom'
import LoginModule from './auth/LoginModule'
import SignUpModule from './auth/SignUpModule'
import * as BiIcons from 'react-icons/bi'

function Authentication(props) {

    const {isAuthOpen, setIsAuthOpen } = props

    if(!isAuthOpen) return null

    return reactDom.createPortal(
        <>
            <div className="auth-background" onClick={() => setIsAuthOpen(!isAuthOpen)}>
            </div>
            <div className="authentication">
                <BiIcons.BiX className="close" onClick={props.onClose} />
                <LoginModule />
                <div className="line"></div>
                <SignUpModule />
            </div>
        </>,
        document.getElementById('serverPortal')
    )
}

export default Authentication
