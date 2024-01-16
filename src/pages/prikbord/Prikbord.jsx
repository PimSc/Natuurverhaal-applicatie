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
            <div className="inner-content-container-textFields">
                    <button className="SimpleButtons" id="bulletinBoardButton1" type="button" onClick={toggleWriteBulletinVisibility}>
                        {isWriteBulletinVisible ? 'Verberg' : 'Prikbord bericht aanmaken'}
                    </button>

                {isWriteBulletinVisible && (
                    <div className="inner-content-container-textFields">
                    </div>
                )}
                {isWriteBulletinVisible && (
                    <>
                        <h1>Prikbord bericht aanmaken</h1>
                        <p>u kunt het venster groter maken in de rechter onderhoek</p>
                        {/*<form onSubmit={handleSubmit}>*/}

                            <p>ID automatisch genereren</p>

                            <label className="Input-Margin">
                                Title: <br/>
                                <textarea className="textAreaOneLine"
                                    name="title"
                                    // value={formData.title}
                                    // onChange={handleChange}
                                />
                            </label>

                            <label className="Input-Margin">
                                Content: <br/>
                                <textarea className="textAreaStory"
                                    name="content"
                                    // value={formData.content}
                                    // onChange={handleChange}
                                />
                            </label>

                        <p>Date automatisch genereren</p>

                        <p>Author automatisch genereren</p>

                        <button className="SimpleButtons" type="button" onClick={handleVersturenClick}>
                            Prikbord bericht plaatsen
                        </button>
                    </>
                )}

             <PrikbordOverview />
            </div>
        </>
    );
}

export default Prikbord;