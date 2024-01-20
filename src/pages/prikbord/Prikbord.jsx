import {useState} from 'react';
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
            <div className="outer-content-container-column">
                <div className="inner-content-container-textFields">

                    {/*Prikbord bericht aanmaken button*/}
                    <button className="SimpleButtons" id="bulletinBoardButton1" type="button"
                            onClick={toggleWriteBulletinVisibility}>
                        {isWriteBulletinVisible ? 'Verberg' : 'Prikbord bericht aanmaken'}
                    </button>

                    {isWriteBulletinVisible && (
                        <div className="inner-content-container-textFields">
                        </div>
                    )}
                    {isWriteBulletinVisible && (
                        <>
                            <div id="PrikbordButtonPrikbord-bericht-aanmaken" className="textCenter">
                                <h1>Prikbord bericht aanmaken</h1>
                                <p>Om een prikbord bericht te kunnen maken <strong>moet je ingelogd zijn.</strong></p>
                                <p>je kan het venster groter maken in de rechter onderhoek</p>


                                <p>ID automatisch genereren</p>

                                <br/>

                                <label className="textStart" htmlFor="title">
                                    <b>Title:</b>
                                </label>
                                <textarea className="textAreaOneLine"
                                          placeholder="Korte pakkende titel"
                                          name="title"
                                          id="title"
                                          autoComplete="on"
                                />


                                <label className="textStart" htmlFor="content">
                                    <b>Content:</b>
                                </label>
                                <textarea className="textAreaStory"
                                          placeholder="Je bericht"
                                          name="content"
                                          id="content"
                                          autoComplete="on"
                                />


                                <p>Date automatisch genereren</p>

                                <p>Author automatisch genereren</p>
                            </div>

                            <button className="SimpleButtons" type="submit" onClick={handleVersturenClick}>
                                Prikbord bericht plaatsen
                            </button>

                        </>
                    )}

                    <PrikbordOverview/>
                </div>
            </div>
            </>
            );
            }

            export default Prikbord;