import React from "react";
import "./Sugest.css";

function Sugest({userphoto, username, legenda}) {
    return (
        <div className="sugestWrapper">
            <img className="sugestImage" alt="foto usuário" src={userphoto}/>
            <div className="sugestProfileName">
                <h3>{username}</h3>
                <h4>{legenda}</h4>
            </div>
            <button className="sugestBtn">Seguir</button>
        </div>
    );
};

export default Sugest;