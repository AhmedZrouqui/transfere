import React, { useEffect } from 'react'
import * as BiIcons  from 'react-icons/bi'
import utils from './utils'

function SideMenu(props) {
    const {openMenu, setOpenMenu} = props;

    const openSideMenu = () => {
        const menu=document.getElementById("sidemenu");
        if(openMenu){
            menu.classList.add("open")
        } else menu.classList.remove("open")
    }

    useEffect(() => {
        openSideMenu();
    },[openMenu])

    return (

        <div className="sideMenu" id="sidemenu">
                <BiIcons.BiLeftArrowAlt className="closeMenu" onClick={() => setOpenMenu(false)}/>
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
