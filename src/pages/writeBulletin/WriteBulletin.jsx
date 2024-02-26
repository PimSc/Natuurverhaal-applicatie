import './WriteBulletin.css';
import {Link} from "react-router-dom";


function WriteBulletin() {

    return (
        <>

            <div className="inner-content-container-textFields">


                <form action="" method="post">
                    <div className="elementCenterContainer">
                        <button className="simpleButtons" type="button">
                            <Link to="/prikbord"><strong>Terug naar het prikbord</strong></Link>
                        </button>
                    </div>

                    <div id="PrikbordButtonPrikbord-bericht-aanmaken" className="textCenter">
                        <h1>Prikbord bericht aanmaken</h1>
                        <p>Om een prikbord bericht te kunnen maken <strong>moet je ingelogd zijn.</strong></p>
                        <p>je kan het venster groter maken in de rechter onderhoek</p>


                        <p>ID automatisch genereren</p>

                        <br/>
                        {/*TITLE*/}
                        <label className="textStart" htmlFor="title">
                            <b>Title:</b>
                        </label>
                        <textarea className="textAreaOneLine"
                                  placeholder="Korte titel"
                                  name="title"
                                  id="title"
                                  autoComplete="on"
                                  required
                        />

                        {/*IMAGE*/}
                        <label className="textStart" htmlFor="imageUpload">
                            <b>Afbeelding:</b>
                        </label>
                        <input
                            className="textAreaOneLine"
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            name="image"
                            id="imageUpload"
                            // onChange={handleFileChange}
                        />

                        {/*CONTENT*/}
                        <label className="textStart" htmlFor="content">
                            <b>Content:</b>
                        </label>
                        <textarea className="textAreaStory"
                                  placeholder="Je bericht"
                                  name="content"
                                  id="content"
                                  autoComplete="on"
                                  required
                        />


                        <p>Date automatisch genereren</p>

                        <p>Author automatisch genereren</p>
                    </div>

                    <div className="elementCenterContainer">
                        <button
                            className="simpleButtons"
                            type="submit">
                            {/*onClick={uploadImage}>*/}
                            <Link to="/prikbord"><strong>Prikbord bericht plaatsen</strong></Link>
                        </button>
                    </div>
                </form>

            </div>


        </>
    );
}

export default WriteBulletin;