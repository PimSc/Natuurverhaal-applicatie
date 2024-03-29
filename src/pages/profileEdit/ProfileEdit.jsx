import './ProfileEdit.css';
import question from "./../../../public/assets/icons/question-icon.png"
import axios from "axios";
import {AuthContext} from '../../context/AuthContextProvider.jsx';
import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function ProfileEdit() {
    const navigate = useNavigate();
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

    const [previewUrl, setPreviewUrl] = useState(null);

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


    async function uploadGegevens(event) {
        event.preventDefault();

        const url = `http://localhost:8080/user-profile/${user.username}`;
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("file", formData.file);
        formDataToSend.append("regio", formData.regio);
        formDataToSend.append("bio", formData.bio);
        formDataToSend.append("username", formData.username);


        try {
            const token = localStorage.getItem("token")
            const response = await axios.post(url, formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 201) {
                console.log("Blog post successful!");
                setUploadStatus("Upload is gelukt!");
                navigate(`/ProfileDetail/${user.username}`);
            } else {
                console.error("Error posting blog:", response.statusText);
                setUploadStatus("Er is een fout opgetreden bij het uploaden.");
            }
        } catch (error) {
            console.error("Error posting blog:", error);
            setUploadStatus("Er is een netwerkfout opgetreden.");
        }
    }


    return (
        <>
            <div className="outer-content-container">
                <div className="profileFirstTextBox ">
                    <h1>Openbaar profiel</h1>
                    <h5>Hier vind je alles wat je moet weten over je openbare profiel</h5>
                    <i>Een profiel kan worden geopend via een blog, excursie of prikbord bericht.</i>

                    <button className="simpleButtons margin20PxTop"><Link to={`/ProfileDetail/${user.username}`}> Bezoek jouw
                        openbaar profiel</Link></button>
                </div>
            </div>

            <div className="outer-content-container">
                <form className="inner-content-container-column" action="">


                        <div className="ProfileEditBox2 margin20PxTop">

                            {/*IMAGE UPLOAD*/}
                            <label className="textStart" htmlFor="fileUpload">
                                <b>Profiel foto:</b>
                            </label>
                            <input className="ProfileTextField"
                                   type="file"
                                   accept=".jpg, .jpeg, .png"
                                   name="file"
                                   id="fileUpload"
                                   required
                                   onChange={handleFileChange}
                            />

                            {previewUrl &&
                                <img src={previewUrl} alt="Preview"
                                     style={{maxWidth: "500px", maxHeight: "500px"}}/>}
                        </div>


                        <div>
                            <div className="ProfileEditBox2">
                                {/*EMAIL*/}
                                <label className="textStart" htmlFor="email">
                                    <b>Email:</b>
                                </label>
                                <input className="ProfileTextField"
                                       placeholder="email"
                                       name="email"
                                       id="email"
                                       type="email"
                                       autoComplete="on"
                                       value={formData.email}
                                       onChange={handleChangeEmail}
                                       required
                                />
                            </div>
                        </div>

                        <div>
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
                                       maxLength={20}
                                />

                            </div>
                        </div>



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


                    <div className="profileButtonCenter">
                        <div className="elementCenterContainer">
                        {uploadStatus && <p className="redText">{uploadStatus}</p>}

                        <button className="simpleButtons" type="submit"
                                onClick={uploadGegevens}>
                            Profiel plaatsen
                        </button>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
        ;
}

export default ProfileEdit;