import './ProfileEdit.css';
import question from "./../../../public/assets/icons/question-icon.png"
import axios from "axios";
import {AuthContext} from '../../context/AuthContextProvider.jsx';
import React, {useContext, useEffect, useState} from "react";
import useProfileImage from "../../Hooks/useProfileImage.jsx";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function ProfileEdit() {
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);
    console.log("role", user.role)

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

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     setFormData({...formData, file: file});
    // };

    const [previewUrl, setPreviewUrl] = useState(null);

// Modify your handleFileChange function
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData({...formData, file: file});

        // Create a URL representing the file and set it as the new preview URL
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleChangeRegio = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleChangeBio = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };


    async function uploadGegevens() {


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


        // pim aangepast

        try {
            const token = localStorage.getItem("token")
            const response = await axios.post(url, formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            }); // Verstuur POST-verzoek met Axios

            if (response.status === 201) {
                console.log("Blog post successful!");
                setUploadStatus("Upload is gelukt!");
                console.log('form', formDataToSend)
                navigate(`/ProfileDetail/${user.username}`);
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
            <div className="profileFirstTextBox ">
                <h1>Openbaar profiel</h1>
                <h5>Hier vind je alles wat je moet weten over je openbare profiel</h5>
                <i>Een profiel kan worden geopend via een blog, excursie of prikbord bericht.</i>

                <button className="simpleButtons"><Link to={`/ProfileDetail/${user.username}`}> Bezoek jouw
                    openbaar profiel</Link></button>
            </div></div>




            <div className="outer-content-container">
                <form className="inner-content-container-column" action="">





                    {/*Middelste rij verticaal*/}
                    <div className="ProfileRowContainer">
                        <div className="ProfileEditBox2">

                            {/*IMAGE UPLOAD*/}
                            <label className="textStart" htmlFor="fileUpload">
                                <b>Profiel foto:</b>
                            </label>
                            <input className="ProfileTextField"
                                   type="file"
                                   accept=".jpg, .jpeg, .png"
                                   name="file"
                                   id="fileUpload"
                                   onChange={handleFileChange}
                            />

                            {/*<span className="textRed">*/}
                            {/*{warning && <p>{warning}</p>}*/}
                            {/*</span>*/}


                            {previewUrl &&
                                <img src={previewUrl} alt="Preview"
                                     style={{maxWidth: "500px", maxHeight: "500px"}}/>}

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


                    <div className="ProfileEditContentBox1">

                        <div className="ProfileRowContainer">
                            {/*Middelste rij verticaal*/}
                            <div className="ProfileEditBox2">
                                {/*EMAIL*/}
                                <label className="textStart" htmlFor="email">
                                    <b>Email:</b>
                                </label>
                                <input className="ProfileTextField"
                                       placeholder="email"
                                       name="email"
                                       id="email"
                                       autoComplete="on"
                                       value={formData.email}
                                       onChange={handleChangeEmail}
                                       required
                                />

                            </div>
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
                            </div>
                        </div>

                        <div className="ProfileRowContainer">
                            <div className="ProfileEditBox2">
                                {/*NAAM*/}
                                <label className="textStart" htmlFor="name">
                                    <b>Naam:</b>
                                </label>
                                <input className="ProfileTextField"
                                       placeholder="name"
                                       name="name"
                                       id="name"
                                       autoComplete="on"
                                       value={formData.name}
                                       onChange={handleChangeName}
                                       required
                                />

                            </div>
                            <div className="ProfileEditBox3">
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
                            </div>
                        </div>
                    </div>

                    <div className="ProfileRowContainer">
                        <div className="ProfileEditBox2">
                            {/*REGIO*/}
                            <label className="textStart" htmlFor="regio">
                                <b>Regio:</b>
                            </label>
                            <input className="ProfileTextField"
                                   placeholder="regio"
                                   name="regio"
                                   id="regio"
                                   autoComplete="on"
                                   value={formData.regio}
                                   onChange={handleChangeRegio}
                                   required
                            />

                        </div>
                        <div className="ProfileEditBox3">
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


                    <div className="ProfileRowContainer">
                        {/*Middelste rij verticaal*/}
                        <div className="ProfileEditBox2">

                            {/*BIOGRAFIE*/}
                            <label className="inputSize" htmlFor="bio">
                                <b>Content:</b>
                            </label>
                            <textarea className="profileBiografieTextField"
                                      placeholder="bio"
                                      name="bio"
                                      id="bio"
                                      autoComplete="on"
                                      value={formData.bio}
                                      onChange={handleChangeBio}
                                      required
                            />

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

                        {uploadStatus && <p>{uploadStatus}</p>}

                        <button className="simpleButtons" type="submit"
                                onClick={uploadGegevens}>
                                Blog bericht plaatsen
                        </button>

                    </div>

                </form>
            </div>


        </>
    )
        ;
}

export default ProfileEdit;