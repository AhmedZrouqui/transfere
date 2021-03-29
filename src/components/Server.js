import React, { useState } from 'react'
import ServerHandler from './ServerHandler'


function Server() {

    const [serverListOpen, setServerListOpen] = useState(false);
    const [server, setServer] = useState('Ilyzaelle')

    const onServerClickHandler = e => {
        e.preventDefault()
        setServerListOpen(!serverListOpen)
    }

    return (
        <>
        <div className="server" onClick= {onServerClickHandler}>
            <h3 className="serverName">
                {server}
            </h3>
            <span className="infos">Click to change server</span>
        </div>
        <ServerHandler serverListOpen={serverListOpen} 
        setServerListOpen={setServerListOpen} 
        onClose={() => setServerListOpen(!serverListOpen)} 
        server={server}
        setServer={setServer}
        className="serverPopUp"/>
        </>
    )
}

export default Server
