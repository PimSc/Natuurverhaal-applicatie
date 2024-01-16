import { useState } from 'react';
import './Prikbord.css';
import PrikbordOverview from "../../components/prikbordOverview/PrikbordOverview.jsx";


function Prikbord() {
    const [isWriteBulletinVisible, setWriteBulletinVisible] = useState(false);

    const toggleWriteBulletinVisibility = () => {
        setWriteBulletinVisible(!isWriteBulletinVisible);
    };

    const handleVersturenClick = () => {
        // Plaats hier de logica voor het versturen van het bericht
        console.log('Bericht wordt verstuurd...');
    };

    return (
        <>
            <div className="inner-content-container-quill">
                    <button className="SimpleButtons" id="bulletinBoardButton1" type="button" onClick={toggleWriteBulletinVisibility}>
                        {isWriteBulletinVisible ? 'Verberg prikbord bericht aanmaken ' : 'Prikbord bericht aanmaken'}
                    </button>

                {isWriteBulletinVisible && (
                    <div className="inner-content-container-quill">
                    </div>
                )}

                {isWriteBulletinVisible && (
                        <button className="SimpleButtons" type="button" onClick={handleVersturenClick}>
                            Prikbord bericht plaatsen

                            {/*Quill element*/}
                        </button>
                )}

             <PrikbordOverview />
            </div>
        </>
    );
}

export default Prikbord;