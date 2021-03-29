import React from 'react'
import AuthModule from './AuthModule'
import Server from './Server'

function Header() {
    return (
        <div className="header">
            <Server />
            <AuthModule />
        </div>
    )
}

export default Header
