import React from 'react'
import utils from './utils'
import reactDom from 'react-dom'
import * as BiIcons from 'react-icons/bi'

function ServerHandler(props) {

    const serverPickHandler = e => {
        e.preventDefault();
        props.setServer(e.target.id)
        props.setServerListOpen(!props.serverListOpen);
    }

    if(!props.serverListOpen) return null

    return reactDom.createPortal(
        <>
            <div className="serverBackground" onClick={props.onClose}>
            </div>
            <div className="serverHandler">
                <div className="currentServer">
                    <p className="text-current">Current server: <span>{props.server}</span></p>
                </div>

                <div className="chooseServer">
                    <p>Chose a server:</p>
                </div>
                <div className="serverList">
                    <BiIcons.BiX className="close" onClick={props.onClose} />
                    {
                        utils.servers.map(
                            (server) => <div className="serverItem" id={server.title} onClick={serverPickHandler}> <h3 id={server.title}>{server.title}</h3></div>
                        )
                    }
                </div>
            </div>
        </>,
        document.getElementById('serverPortal')
    )
}

export default ServerHandler
