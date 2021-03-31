import React, { useState } from 'react'
import './assets/style/global.css'
import Main from './components/Main'
import SideMenu from './components/SideMenu'
import utils from './components/utils'

function App() {

  const [portalInfo, setPortalInfo] = useState(utils.portalInfos)

  return (
    <div className="app">
        <SideMenu>
        </SideMenu>

        <Main 
        portalInfo = {portalInfo}
        setPortalInfo = {setPortalInfo} 
        />
    </div>
  )
}

export default App
