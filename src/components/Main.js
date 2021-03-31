import React from 'react'
import Header from './Header'
import PortalInfos from './PortalInfos'

function Main(props) {
    const {portalInfo, setPortalInfo} = props;
    return (
        <div className="main">
            <Header></Header>
            <PortalInfos
            portalInfo = {portalInfo}
            setPortalInfo = {setPortalInfo}
            />
        </div>
    )
}

export default Main
