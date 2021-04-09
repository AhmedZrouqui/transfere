import React, { useEffect, useState } from 'react'
import reactDom from 'react-dom'
import * as BiIcons from 'react-icons/bi'
import utils from './utils'

function UpdatePortal(props) {

    const [optionsArray, setOptionsArray] = useState([])

    useEffect(() => {
        const fillOptionsArray = () => {
            if(optionsArray.length < 10){
                utils.PortalModificators.filter
                ((portal, index) => portal.name === defaultPortal)                 
                .map(portal => {
                    portal.modificators.map((modificator,index) =>
                        setOptionsArray([...optionsArray, <option key={index} value={modificator}>{modificator}</option>])
                    )
                })
            }
        }

        fillOptionsArray()
    })

    const {editPortalOpen, setEditPortalOpen, onClose} = props
    const [serverPosition, setServerPosition] = useState()
    const defaultPortal= 'enutrosor'

    const onUpdatePortal = e => {
        e.preventDefault();
        onClose();
    }

    if(!editPortalOpen) return null

    return reactDom.createPortal(
        <>
            <div className="update-background" onClick={onClose}></div>
            <div className="update-Wrapper">
                <BiIcons.BiX className="close" onClick={onClose} />
                <h2 className='update-title'>Edit Portal Informations</h2>

                <div className="portal-infos">
                    
                    <div className="portal-position" >
                        <div className="position-header head">
                            <h3>Portal position</h3>
                        </div>
                        <div className="formWrapper">
                            <div className="form-div">
                                <input type="number" className="xPosition input" placeholder=" "/>
                                <label>0</label>
                            </div>
                            <div className="form-div">
                                <input type="number" className="yPosition input" placeholder=" "/>
                                <label>0</label>
                            </div>
                        </div>
                    </div>
                    <div className="portal-utilizations" >
                        <div className="utilizations-header head">
                            <h3>Portal utilizations</h3>
                        </div>
                        <div className="formWrapper">
                            <div className="form-div">
                                <input type="number" className="utilizations-left input" placeholder=" "/>
                                <label>130</label>
                            </div>
                        </div>
                    </div>
                    <div className="portal-modificator" >
                        <div className="modificator-header head">
                            <h3>Portal modificator</h3>
                        </div>
                        <div className="formWrapper">
                            <div className="form-div">
                                <select className="modificator-selector">
                                    {
                                        optionsArray.map(option => option)
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="update-button">
                    <button className="update" onClick={onUpdatePortal}>Update</button>
                </div>
            </div>
        </>,
        document.getElementById('updatePortal')
    )
}

export default UpdatePortal
