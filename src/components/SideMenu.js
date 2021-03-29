import React from 'react'
import * as GiIcons  from 'react-icons/gi'
import utils from './utils'

function SideMenu() {
    return (
        <div className="sideMenu">
            <div className="logo">
                <h2 className="portalioTitle">portal.io</h2>
            </div> 
            <div className="line"></div>
            <ul className="menu-wrapper">
                {
                    utils.menu.map((menu,index) => <li key={index} className="menu-item"><a>{menu.title}</a></li>)
                }
            </ul>
        </div>
    )
}

export default SideMenu
