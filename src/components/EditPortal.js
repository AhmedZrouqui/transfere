import React, { useState } from 'react'
import UpdatePortal from './UpdatePortal'

function EditPortal() {

    const [editPortalOpen, setEditPortalOpen] = useState(false)

    return (
        <>
            <div className="editPortal" onClick={() => setEditPortalOpen(!editPortalOpen)}>
                <div className="editButton">Edit Portal Information</div>
            </div>
            <UpdatePortal
            editPortalOpen = {editPortalOpen}
            setEditPortalOpen = {setEditPortalOpen}
            onClose = {() => setEditPortalOpen(!editPortalOpen)}
            />
        </>
    )
}

export default EditPortal
