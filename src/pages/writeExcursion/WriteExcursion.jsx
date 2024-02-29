import './WriteExcursion.css';
import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import axios from "axios";

function WriteExcursion() {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        activity_date: "",
        activity_time: "",
        caption: "",
        content: "",
        date: "",
        file: null,
        guide: "",
        location: "",
        max_participants: "",
        niveau: "",
        price: "",
        subject: "",
        subtitle: "",
        title: "",
        username: `${user.username}`
    });

    const [uploadStatus, setUploadStatus] = useState(null);

    const handleChangeActivity_date = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeActivity_time = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData({ ...formData, file: file });
    };

    const handleChangeCaption = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeContent = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeGuide = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeLocation = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeMax_participants = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeNiveau = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangePrice = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeSubject = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeSubtitle = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeTitle = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    async function uploadGegevens(event) {
        event.preventDefault();

        console.log(user.username)
        const formDataToSend = new FormData();
        formDataToSend.append("activity_date", formData.activity_date);
        formDataToSend.append("activity_time", formData.activity_time);
        formDataToSend.append("caption", formData.caption);
        formDataToSend.append("content", formData.content);
        formDataToSend.append("file", formData.file);
        formDataToSend.append("guide", formData.guide);
        formDataToSend.append("location", formData.location);
        formDataToSend.append("max_participants", formData.max_participants);
        formDataToSend.append("niveau", formData.niveau);
        formDataToSend.append("price", formData.price);
        formDataToSend.append("subject", formData.subject);
        formDataToSend.append("subtitle", formData.subtitle);
        formDataToSend.append("title", formData.title);
        formDataToSend.append("subtitle", formData.username);

        console.log('form', formDataToSend)

        const url = `http://localhost:8080//excursies/${user.username}`;

        try {
            const response = await axios.post(url, formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            if (response.status === 201) {
                console.log("Blog post successful!");
                setUploadStatus("Upload is gelukt!");
                console.log('form', formDataToSend)
                navigate("/");
            } else {
                console.error("Error posting blog:", response.statusText);
                setUploadStatus("Er is een fout opgetreden bij het uploaden.");
                console.log('form', formDataToSend)
            }
        } catch (error) {
            console.error("Error posting blog:", error);
            setUploadStatus("Er is een netwerkfout opgetreden.");
        }
        console.log("urlToSend:", url);

    }









    return (
        <>

            <div className="outer-content-container-column">
                <div className="inner-content-container-column">

                    <div className="inner-content-container-column">
                        <h1>Welkom admin</h1>
                        <h4>Maak hier een excursie aan voor het overzicht</h4>
                        <p>Een activiteit verwijderen kan in het algemene excursie overzicht</p>
                    </div>

                    <div className="elementCenterContainer">
                        <button className="simpleButtons" type="button">
                            <Link to="/excursies">Excursie overzicht</Link>
                        </button>
                    </div>

                    <div className="textCenter">

                        <form action="">
                            <div className="textStart">

                                <label htmlFor="file">
                                    <b>Afbeelding:</b>
                                </label>
                                <input
                                    className="textAreaOneLine"
                                    type="file"
                                    accept=".jpg, .jpeg, .png"
                                    name="image"
                                    id="image"

                                />


                                <label htmlFor="caption">
                                    <b>Caption:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="caption"
                                    id="caption"
                                    autoComplete="on"
                                />


                                <label htmlFor="title">
                                    <b>Title:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="title"
                                    id="title"
                                    autoComplete="on"
                                />


                                <label htmlFor="subtitle">
                                    <b>Subtitle:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="subtitle"
                                    id="subtitle"
                                    autoComplete="on"
                                />


                                <label htmlFor="content">
                                    <b>Content:</b>
                                </label>
                                <textarea
                                    className="textAreaStory"
                                    name="content"
                                    id="content"
                                    autoComplete="on"
                                />


                                <label htmlFor="activity_date">
                                    <b>Activity date:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="activity_date"
                                    id="activity_date"
                                    autoComplete="on"
                                />


                                <label htmlFor="activity_time">
                                    <b>Activity time:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="activity_time"
                                    id="activity_time"
                                    autoComplete="on"
                                />


                                <label htmlFor="price">
                                    <b>Price:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="price"
                                    id="price"
                                    autoComplete="on"
                                />


                                <label htmlFor="location">
                                    <b>Location:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="location"
                                    id="location"
                                    autoComplete="on"
                                />


                                <label htmlFor="subject">
                                    <b>Subject:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="subject"
                                    id="subject"
                                    autoComplete="on"
                                />


                                <label htmlFor="niveau">
                                    <b>Niveau:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="niveau"
                                    id="niveau"
                                    autoComplete="on"
                                />


                                <label htmlFor="guide">
                                    <b>Guide:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="guide"
                                    id="guide"
                                    autoComplete="on"
                                />

                                <label htmlFor="max_participants">
                                    <b>MaxParticipants:</b>
                                </label>
                                <textarea
                                    className="textAreaOneLine"
                                    name="max_participants"
                                    id="max_participants"
                                    autoComplete="on"
                                />

                                <p>profile picture automatisch</p>
                                <p>currentParticipants automatisch</p>

                            </div>

                            <button className="simpleButtons" type="submit">
                                <Link to="/excursies">Excursie <strong>plaatsen</strong> in het excursie overzicht</Link>

                            </button>

                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default WriteExcursion;