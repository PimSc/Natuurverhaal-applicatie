import './WriteExcursion.css';
import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import axios from "axios";

function WriteExcursion() {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const token = localStorage.getItem("token")

    const [formData, setFormData] = useState({
        file: null,
        title: "",
        caption: "",
        subtitle: "",
        username: `${user.username}`,
        activity_date: "",
        activity_time: "",
        price: "",
        location: "",
        subject: "",
        guide: "",
        content: "",
        date: "",
        max_participants: "",
    });
    const [uploadStatus, setUploadStatus] = useState(null);

    const handleChangeActivity_date = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleChangeActivity_time = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData({...formData, file: file});
    };

    const handleChangeCaption = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleChangeContent = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleChangeGuide = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleChangeLocation = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleChangeMax_participants = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleChangePrice = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleChangeSubject = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleChangeSubtitle = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleChangeTitle = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    async function uploadGegevens(event) {
        event.preventDefault();

        console.log(user.username)
        const formDataToSend = new FormData();
        formDataToSend.append("file", formData.file);
        formDataToSend.append("title", formData.title);
        formDataToSend.append("caption", formData.caption);
        formDataToSend.append("subtitle", formData.subtitle);
        formDataToSend.append("username", formData.username);
        formDataToSend.append("activity_date", formData.activity_date);
        formDataToSend.append("activity_time", formData.activity_time);
        formDataToSend.append("content", formData.content);
        formDataToSend.append("guide", formData.guide);
        formDataToSend.append("location", formData.location);
        formDataToSend.append("max_participants", formData.max_participants);
        formDataToSend.append("price", formData.price);
        formDataToSend.append("subject", formData.subject);


        const url = `http://localhost:8080/excursies/${user.username}`;

        try {

            const response = await axios.post(url, formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 201) {
                console.log("excursie post successful!");
                setUploadStatus("Upload is gelukt!");
                navigate("/Excursies");
            } else {
                console.error("Error posting excursie:", response.statusText);
                setUploadStatus("Er is een fout opgetreden bij het uploaden.");
            }
        } catch (error) {
            console.error("Error posting excursie:", error);
            setUploadStatus("Er gaat iets mis. Upload niet gelukt.");
        }
    }


    return (
        <>
            <div className="outer-content-container-column">
                <div className="inner-content-container-column">

                    <div className="inner-content-container-column margin20PxTop margin20PxBottom">
                        <h1>Welkom admin</h1>
                        <h4>Maak hier een excursie aan voor het overzicht</h4>
                        <p>Een activiteit verwijderen kan in het algemene excursie overzicht</p>
                    </div>

                    <div className="elementCenterContainer">
                        <button className="simpleButtons" type="button">
                            <Link to="/excursies">Excursie overzicht</Link>
                        </button>
                    </div>

                    <div className="inner-content-container-column">

                        <form action="">
                            <div className="textStart">

                                {/*Activity date*/}
                                <label htmlFor="activity_date">
                                    <b>Activiteit datum:</b>
                                </label>
                                <input
                                    className="textAreaOneLine"
                                    placeholder="Datum waarop de activiteit plaatsvind"
                                    name="activity_date"
                                    id="activity_date"
                                    autoComplete="on"
                                    required
                                    value={formData.activity_date}
                                    onChange={handleChangeActivity_date}
                                />

                                {/*Activity time*/}
                                <label htmlFor="activity_time">
                                    <b>Activiteit Tijd:</b>
                                </label>
                                <input
                                    className="textAreaOneLine"
                                    placeholder="Tijd waarop de activiteit plaatsvind"
                                    name="activity_time"
                                    id="activity_time"
                                    autoComplete="on"
                                    required
                                    value={formData.activity_time}
                                    onChange={handleChangeActivity_time}
                                />

                                {/*Guide*/}
                                <label htmlFor="guide">
                                    <b>Gids:</b>
                                </label>
                                <input
                                    className="textAreaOneLine"
                                    placeholder="Gebruikersnaam van de gids"
                                    name="guide"
                                    id="guide"
                                    autoComplete="on"
                                    required
                                    value={formData.guide}
                                    onChange={handleChangeGuide}
                                />

                                {/*Location*/}
                                <label htmlFor="location">
                                    <b>Locatie:</b>
                                </label>
                                <input
                                    className="textAreaOneLine"
                                    placeholder="🚩 Start locatie van de activiteit"
                                    name="location"
                                    id="location"
                                    autoComplete="on"
                                    required
                                    value={formData.location}
                                    onChange={handleChangeLocation}
                                />

                                {/*Max_participants*/}
                                <label htmlFor="max_participants">
                                    <b>Maximaal aantal deelnemers:</b>
                                </label>
                                <input
                                    className="textAreaOneLine"
                                    placeholder="bijv. 12"
                                    name="max_participants"
                                    id="max_participants"
                                    autoComplete="on"
                                    required
                                    value={formData.max_participants}
                                    onChange={handleChangeMax_participants}
                                />

                                {/*Price*/}
                                <label htmlFor="price">
                                    <b>Prijs:</b>
                                </label>
                                <input
                                    className="textAreaOneLine"
                                    placeholder="Ondertitel van de activiteit"
                                    name="price"
                                    id="price"
                                    autoComplete="on"
                                    required
                                    value={formData.price}
                                    onChange={handleChangePrice}
                                />

                                {/*Subject*/}
                                <label htmlFor="subject">
                                    <b>Onderwerp:</b>
                                </label>
                                <input
                                    className="textAreaOneLine"
                                    placeholder="Onderwerp van de activiteit"
                                    name="subject"
                                    id="subject"
                                    autoComplete="on"
                                    required
                                    value={formData.subject}
                                    onChange={handleChangeSubject}
                                />

                                {/*Title*/}
                                <label htmlFor="title">
                                    <b>Titel:</b>
                                </label>
                                <input
                                    className="textAreaOneLine"
                                    placeholder="Titel van de activiteit"
                                    name="title"
                                    id="title"
                                    autoComplete="on"
                                    required
                                    value={formData.title}
                                    onChange={handleChangeTitle}
                                />

                                {/*Subtitle*/}
                                <label htmlFor="subtitle">
                                    <b>Ondertitel:</b>
                                </label>
                                <input
                                    className="textAreaOneLine"
                                    placeholder="Ondertitel van de activiteit"
                                    name="subtitle"
                                    id="subtitle"
                                    autoComplete="on"
                                    required
                                    value={formData.subtitle}
                                    onChange={handleChangeSubtitle}
                                />


                                {/*Activity content*/}
                                <label htmlFor="content">
                                    <b>Content:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    placeholder="De excursie"
                                    name="content"
                                    id="content"
                                    autoComplete="on"
                                    required
                                    value={formData.content}
                                    onChange={handleChangeContent}
                                />

                                {/*Afbeelding*/}
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


                                {/*Activity caption*/}
                                <label htmlFor="caption">
                                    <b>Afbeelding caption:</b>
                                </label>
                                <input
                                    className="textAreaOneLine"
                                    placeholder="Omschijving van de afbeelding"
                                    name="caption"
                                    id="caption"
                                    autoComplete="on"
                                    required
                                    value={formData.caption}
                                    onChange={handleChangeCaption}
                                />


                            </div>
                            {uploadStatus && <p className="red">{uploadStatus}</p>}

                            <button className="simpleButtons" type="submit" onClick={uploadGegevens}>
                                <strong>plaatsen</strong>
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default WriteExcursion;