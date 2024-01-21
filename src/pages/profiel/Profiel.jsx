import './Profiel.css';
import question from "../../assets/icons/question-icon.png"


function Profiel() {

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        const maxDimension = 101; // Maximale afmeting in pixels

        if (selectedFile && selectedFile.size > maxDimension) {
            alert('Maximale toegestane grootte is 100x100 pixels');
        } else {
            // Voeg hier logica toe voor verdere afhandeling van het bestand
        }
    };


    return (
        <>
            <div className="outer-content-container">
                <div className="inner-content-container-column">
                    <form action="">


                        {/*Box geeft alleen margin button*/}
                        <div className="profileFirstTextBox">
                            <h1>Openbaar profiel</h1>
                            <h5>Hier vind je alles wat je moet weten over je openbare profiel</h5>
                            <p>Hieronder vul je gegevens in die iedere lezen kan inzien</p>

                        </div>

                        {/*Row space evenly*/}
                        <div className="ProfileEditContentBox">


                            {/*Linker rij verticaal*/}
                            <div className="ProfileEditBox1">
                                <p>profiel foto</p>

                                <div className="profilePageProfileImageContainer">
                                {/*<img className="profilePictureCircle" src={profilePicture} alt={caption}/>*/}
                                </div>
                            </div>

                            {/*Middelste rij verticaal*/}
                            <div className="ProfileEditBox2">


                                <label htmlFor="profilePhotoUpload">
                                    <b>Afbeelding:</b>
                                </label>
                                <input
                                    className="ProfilePictureUpload"
                                    type="file"
                                    accept=".jpg, .jpeg, .png"
                                    name="profilePhotoUpload"
                                    id="profilePhotoUpload"
                                    onChange={handleFileChange}
                                />
                            </div>

                            {/*laatste rij verticaal (uitleg bestandupload)*/}
                            <div className="ProfileEditBox3">
                                <br/>
                                <div className="iconContainer">
                                    <img className="iconSmall" src={question} alt="question icon" />
                                    <div className="iconOverlay">
                                        <i>Maximale afmeting: 100x100 pixels<br/><br/>  Bestandtype: .jpg, .jpeg, .png</i>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="ProfileEditContentBox">

                            {/*Linker rij verticaal*/}
                            <div className="ProfileEditBox1">
                                <p>E-mail</p>
                                <br/>
                                <p>Naam </p>
                                <br/>
                                <p>Regio</p>
                            </div>

                            {/*Middelste rij verticaal*/}
                            <div className="ProfileEditBox2">
                                <label htmlFor="email"></label>
                                <input className="inputSize" type="email" placeholder="E-mail" name="email" id="email"
                                       autoComplete="on"/>
                                <br/>
                                <label htmlFor="name"> </label>
                                <input className="inputSize" type="text" placeholder="Naam" name="name" id="name"
                                       autoComplete="on"/>
                                <br/>
                                <label htmlFor="regio"> </label>
                                <input className="inputSize" type="text" placeholder="Regio" name="regio" id="regio"
                                       autoComplete="on"/>
                                <br/>
                            </div>

                            {/*laatste rij verticaal (uitleg email naam regio)*/}
                            <div className="ProfileEditBox3">
                                     <div className="iconContainer">
                                        <img className="iconSmall" src={question} alt="question icon" />
                                        <div className="iconOverlay">
                                            <i>Via dit e-mail adres kan iedereen contact met je opnemen</i>
                                        </div>
                                    </div>
                                <br/> <br/>
                                    <div className="iconContainer">
                                        <img className="iconSmall" src={question} alt="question icon" />
                                        <div className="iconOverlay">
                                            <i>Onder welke naam wil je bekend worden?</i>
                                        </div>
                                    </div>
                                <br/> <br/>
                                <div className="iconContainer">
                                    <img className="iconSmall" src={question} alt="question icon"/>
                                    <div className="iconOverlay">
                                        <i>In welke regio ben je actief?</i>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="ProfileEditContentBox">

                            {/*Linker rij verticaal*/}
                            <div className="ProfileEditBox1">
                                <p>Biografie</p>
                            </div>

                            {/*Middelste rij verticaal*/}
                            <div className="ProfileEditBox2">
                                <label htmlFor="biografie"> </label>
                                <textarea className="biografieTextField inputSize" placeholder="biografie (openbaar)"
                                          name="biografie"
                                          id="biografie" autoComplete="on"/>
                                <br/>
                            </div>

                            <div className="ProfileEditBox3">
                            <div className="iconContainer">
                                <img className="iconSmall" src={question} alt="question icon" />
                                <div className="iconOverlay">
                                    <i>Doorlinken naar een externe pagina is toegestaan</i>
                                </div>
                            </div>
                            </div>

                        </div>

                        <div className="profileButtonCenter">
                            <button className="SimpleButtons" type="submit">
                                <strong>Verzenden</strong>
                            </button>
                        </div>

                    </form>
                </div>
            </div>


        </>
    );
}

export default Profiel;