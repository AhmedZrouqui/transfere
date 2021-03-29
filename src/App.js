import React from 'react'
import './assets/style/global.css'
import Main from './components/Main'
import SideMenu from './components/SideMenu'

function App() {
  return (
    <div className="app">
        <SideMenu>
        </SideMenu>

        <Main></Main>
    </div>
  )
}

export default App
