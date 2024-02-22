import './ProfileEdit.css';
import question from "./../../../public/assets/icons/question-icon.png"
import axios from "axios";
import {AuthContext} from '../../context/AuthContextProvider.jsx';
import React, {useContext, useEffect, useState} from "react";
import useProfileImage from "../../Hooks/useProfileImage.jsx";
import {Link} from "react-router-dom";


function ProfileEdit() {


    const {user} = useContext(AuthContext);

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        file: null,
        regio: "",
        bio: "",
        username: `${user.username}`
    });

    const [uploadStatus, setUploadStatus] = useState(null);

    const handleChangeName = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleChangeEmail = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData({...formData, file: file});
    };

    const handleChangeRegio = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleChangeBio = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };


    async function uploadGegevens(event) {
        event.preventDefault();

        const url = `http://localhost:8080/user-profile/${user.username}`;
        console.log(user.username)
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("file", formData.file);
        formDataToSend.append("regio", formData.regio);
        formDataToSend.append("bio", formData.bio);
        formDataToSend.append("username", formData.username);


        console.log('form', formDataToSend)

        try {
            const response = await axios.post(url, formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data", // Stel de juiste Content-Type header in
                }
            }); // Verstuur POST-verzoek met Axios

            if (response.status === 201) {
                console.log("Blog post successful!");
                setUploadStatus("Upload is gelukt!");
                console.log('form', formDataToSend)
            } else {
                console.error("Error posting blog:", response.statusText);
                setUploadStatus("Er is een fout opgetreden bij het uploaden.");
                console.log('form', formDataToSend)
            }
        } catch (error) {
            console.error("Error posting blog:", error);
            setUploadStatus("Er is een netwerkfout opgetreden.");
        }
        console.log("urlToSend:", url); // Log de URL om te verzenden

    }


    return (
        <>
            <div className="outer-content-container">
                <div className="inner-content-container-column">
                    <form action="">


                        {/*Box geeft alleen margin button*/}
                        <div className="profileFirstTextBox">
                            <h1>Openbaar profiel</h1>
                            <h5>Hier vind je alles wat je moet weten over je openbare profiel</h5>
                            <i>Een profiel kan worden geopend via een blog, excursie of prikbord bericht.</i>
                            <br/><br/><br/>
                            <button className="SimpleButtons"><Link to={`/ProfileDetail/${user.username}`}> Bezoek jouw openbaar profiel</Link></button>


                        </div>

                        {/*Row space evenly*/}
                        <div className="ProfileEditContentBox">


                            {/*Linker rij verticaal*/}
                            <div className="ProfileEditBox1">
                                </div>

                                {/*Middelste rij verticaal*/}
                                <div className="ProfileEditBox2">


                                    <p>profiel foto</p>


                                    {/*{profileImage && <img src={profileImage} alt="Profiel foto"*/}
                                    {/*                      style={{width: '100px', height: '100px'}}/>}*/}

                                    {/*IMAGE UPLOAD*/}
                                    <label className="textStart" htmlFor="fileUpload">
                                        <b>Afbeelding:</b>
                                    </label>
                                    <input className="textAreaOneLine"
                                           type="file"
                                           accept=".jpg, .jpeg, .png"
                                           name="file"
                                           id="fileUpload"
                                           onChange={handleFileChange}
                                    />
                                    {/*<span className="textRed">*/}
                                    {/*{warning && <p>{warning}</p>}*/}
                                    {/*</span>*/}
                                </div>


                                {/*laatste rij verticaal (uitleg bestandupload)*/}
                                <div className="ProfileEditBox3">
                                    <br/>
                                    <div className="iconContainer">
                                        <img className="iconSmall" src={question} alt="question icon"/>
                                        <div className="iconOverlay">
                                            <i>Maximale afmeting: 400x400 pixels<br/><br/> Bestandtype: .jpg, .jpeg,
                                                .png</i>
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

                                {/*Middelste rij verticaal*/}.
                                <div className="ProfileEditBox2">

                                    {/*EMAIL*/}
                                    <label className="textStart" htmlFor="email">
                                        <b>Email:</b>
                                    </label>
                                    <input className="textAreaOneLine"
                                           placeholder="email"
                                           name="email"
                                           id="email"
                                           autoComplete="on"
                                           value={formData.email}
                                           onChange={handleChangeEmail}
                                           required
                                    />
                                    <br/>
                                    {/*NAAM*/}
                                    <label className="textStart" htmlFor="name">
                                        <b>Naam:</b>
                                    </label>
                                    <input className="textAreaOneLine"
                                           placeholder="name"
                                           name="name"
                                           id="name"
                                           autoComplete="on"
                                           value={formData.name}
                                           onChange={handleChangeName}
                                           required
                                    />
                                    {/*REGIO*/}
                                    <label className="textStart" htmlFor="regio">
                                        <b>Regio:</b>
                                    </label>
                                    <input className="textAreaOneLine"
                                           placeholder="regio"
                                           name="regio"
                                           id="regio"
                                           autoComplete="on"
                                           value={formData.regio}
                                           onChange={handleChangeRegio}
                                           required
                                    />
                                    <br/>
                                </div>

                                {/*laatste rij verticaal (uitleg email naam regio)*/}
                                <div className="ProfileEditBox3">
                                    <div className="iconContainer">
                                        <img className="iconSmall"
                                             src={question}
                                             alt="question icon"
                                        />
                                        <div className="iconOverlay">
                                            <i>Via dit e-mail adres kan iedereen contact met je opnemen</i>
                                        </div>
                                    </div>
                                    <br/> <br/>
                                    <div className="iconContainer">
                                        <img
                                            className="iconSmall"
                                            src={question}
                                            alt="question icon"
                                        />

                                        <div className="iconOverlay">
                                            <i>Onder welke naam wil je bekend worden?</i>
                                        </div>
                                    </div>
                                    <br/> <br/>
                                    <div className="iconContainer">
                                        <img
                                            className="iconSmall"
                                            src={question}
                                            alt="question icon"
                                        />
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

                                    {/*BIOGRAFIE*/}
                                    <label className="biografieTextField inputSize" htmlFor="bio">
                                        <b>Content:</b>
                                    </label>
                                    <textarea className="textAreaStory"
                                              placeholder="bio"
                                              name="bio"
                                              id="bio"
                                              autoComplete="on"
                                              value={formData.bio}
                                              onChange={handleChangeBio}
                                              required
                                    />
                                    <br/>
                                </div>

                                <div className="ProfileEditBox3">
                                    <div className="iconContainer">
                                        <img
                                            className="iconSmall"
                                            src={question}
                                            alt="question icon"
                                        />
                                        <div className="iconOverlay">
                                            <i>Doorlinken naar een externe pagina is toegestaan</i>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="profileButtonCenter">
                                <br/>
                                {uploadStatus && <p>{uploadStatus}</p>}
                                <button className="SimpleButtons" id="buttonPostBlog" type="submit"
                                        onClick={uploadGegevens}>
                                    Blog bericht plaatsen
                                </button>
                            </div>

                    </form>
                </div>
            </div>


        </>
);
}

export default ProfileEdit;