import React, { useState } from 'react'
import './assets/style/global.css'
import Main from './components/Main'
import SideMenu from './components/SideMenu'
import utils from './components/utils'
import * as BiIcons from 'react-icons/bi'

function App() {

  const [portalInfo, setPortalInfo] = useState(utils.portalInfos)
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="app">
        <SideMenu 
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        />

        <div className="hum-div">
          <span 
          className="menu-button" 
          onClick={() => setOpenMenu(true)}>
            <BiIcons.BiMenu />
      
          </span>
          <h3 className="title-portalio">
            Portal.io
          </h3>
        </div>


        <Main 
        portalInfo = {portalInfo}
        setPortalInfo = {setPortalInfo} 
        />
    </div>
  )
}

export default App
