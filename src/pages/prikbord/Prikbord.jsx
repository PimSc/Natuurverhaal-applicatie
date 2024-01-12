import { useState } from 'react';
import './Prikbord.css';
import WriteBulletin from '../../components/writeBulletin/WriteBulletin.jsx';

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
                <div className="bulletinBoardButtons" id="bulletinBoardButton1">
                    <button type="button" onClick={toggleWriteBulletinVisibility}>
                        {isWriteBulletinVisible ? 'Verberg prikbord bericht aanmaken ' : 'Prikbord bericht aanmaken'}
                    </button>
                </div>

                {isWriteBulletinVisible && (
                    <div className="inner-content-container-quill">
                        <WriteBulletin />
                    </div>
                )}

                {isWriteBulletinVisible && (
                    <div className="bulletinBoardButtons">
                        <button type="button" onClick={handleVersturenClick}>
                            Prikbord bericht plaatsen
                        </button>
                    </div>
                )}

                <h2>prikbord pagina</h2>
                <br />
                <p>prikbord bericht plaatsen</p>
                <p>prikbord overzicht</p>
            </div>
        </>
    );
}

export default Prikbord;