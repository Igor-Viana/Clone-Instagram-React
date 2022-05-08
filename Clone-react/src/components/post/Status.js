import React from "react";
import "./Status.css"

function Status({userphoto, username}) {
    return (
        <div className="profileStatus_wrapper">
            <img src={userphoto} className="statusPhoto"/>
            <p>{username}</p>
        </div>
    )
}

export default Status;