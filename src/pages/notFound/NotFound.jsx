import './NotFound.css'
import {Link, useNavigate} from "react-router-dom";
import React from "react";

function NotFound() {
    const navigate = useNavigate();

    const handleTerugClick = () => {
        navigate(-1); // Navigeer terug naar de vorige pagina
    };

    return (
        <>
            <div className="outer-content-container-column">
                <div className="inner-content-container-column">
                    <h2>Oeps... De de pagina die je zoekt bestaat niet</h2>
                    <button className="simpleButtons margin20PxTopBottom" onClick={handleTerugClick}> Terug naar de vorige pagina
                    </button>
                </div>
            </div>
        </>
    )
}

export default NotFound