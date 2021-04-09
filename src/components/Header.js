import React from 'react'
import AuthModule from './AuthModule'
import Server from './Server'
import EditPortal from './EditPortal'

function Header() {
    return (
        <div className="header">
            <Server />
            <EditPortal />
            <AuthModule />
            
        </div>
    )
}

export default Header
