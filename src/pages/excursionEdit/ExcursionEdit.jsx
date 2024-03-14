import './ExcursionEdit.css';
import {Link, useParams, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

import useAllExcursions from "../../Hooks/useAllExcursions.jsx";
import axios from "axios";


function ExcursionEdit() {

    const {ExcursionsAll} = useAllExcursions();
    const { id } = useParams();
    const post = ExcursionsAll.find(post => post.id.toString() === id);
    const Navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState('');
    const [content, setContent] = useState('');
    const [subject, setSubject] = useState('');
    const [activity_date, setActivity_date] = useState('');
    const [activity_time, setActivity_time] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [max_participants, setMax_participants] = useState('');
    const [guide, setGuide] = useState('');
    const token = localStorage.getItem("token")


    useEffect(() => {
        if (post) {
            setTitle(post.title || '');
            setSubtitle(post.subtitle || '');
            setCaption(post.caption || '');
            setContent(post.content || '');
            setSubject(post.subject || '');
            setActivity_date(post.activity_date || '');
            setActivity_time(post.activity_time || '');
            setPrice(post.price || '');
            setLocation(post.location || '');
            setDate(post.date || '');
            setMax_participants(post.max_participants || '');
            setGuide(post.guide || '');
        }
    }, [post]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubtitleChange = (event) => {
        setSubtitle(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleCaptionChange = (event) => {
        setCaption(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleActivity_dateChange = (event) => {
        setActivity_date(event.target.value);
    };

    const handleActivity_timeChange = (event) => {
        setActivity_time(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };


    const handleMax_participantsChange = (event) => {
        setMax_participants(event.target.value);
    };

    const handleGuideChange = (event) => {
        setGuide(event.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('username', post.username);
        formData.append('caption', caption);
        formData.append('title', title);
        formData.append('subtitle', subtitle);
        formData.append('content', content);
        formData.append('subject', subject);
        formData.append('activity_date', activity_date);
        formData.append('activity_time', activity_time);
        formData.append('price', price);
        formData.append('location', location);
        formData.append('date', date);
        formData.append('max_participants', max_participants);
        formData.append('guide', guide);

        try {
            await axios.put(`http://localhost:8080/excursies/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            });
            // Redirect the user to the updated blog post page
            Navigate("/Excursies");
        } catch (error) {
            console.error('Error updating blog post:', error);
            // Handle error, show an alert or error message to the user
        }
    };

return (
    <>
        <div className="outer-content-container-Edit">
            <div className="inner-content-container-editBorder">
                {post && (
                    <>

                        {/*pim*/}
                        <h1>{post.title}</h1>
                        <h4>{post.subtitle}</h4>
                        <p>Geschreven door {post.username.charAt(0).toUpperCase() + post.username.slice(1)}</p>
                        <i>{post.date}</i>
                        <div className="textStart"></div>
                        <br />
                        <p className="textStart">{post.content}</p>
                        <br />
                        <img
                            className="blogDetailImage"
                            src={"data:image/png;base64," + post.fileContent}
                            alt={post.caption}
                        />
                    </>
                )}
            </div>

            <div className="inner-content-container-Edit">
                <form onSubmit={handleSubmit}>
                    <div id="PrikbordButtonPrikbord-bericht-aanmaken" className="textCenter">
                        <h1>Excursie bewerken</h1>
                        <p>Alle velden dienen te worden ingevuld</p>
                        <p>Je kan het venster groter maken in de rechter onderhoek</p>
                        <br/>


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
                            value={activity_date}
                            onChange={handleActivity_dateChange}
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
                            value={activity_time}
                            onChange={handleActivity_timeChange}
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
                            value={guide}
                            onChange={handleGuideChange}
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
                            value={location}
                            onChange={handleLocationChange}
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
                            value={max_participants}
                            onChange={handleMax_participantsChange}
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
                            value={price}
                            onChange={handlePriceChange}
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
                            value={subject}
                            onChange={handleSubjectChange}
                        />

                        <label htmlFor="title">
                            <b>Titel:</b>
                        </label>
                        <textarea
                            className="textAreaOneLine"
                            placeholder="Korte titel"
                            name="title"
                            id="title"
                            autoComplete="on"
                            required
                            value={title}
                            onChange={handleTitleChange}
                        />

                        <label htmlFor="subtitle">
                            <b>Ondertitel:</b>
                        </label>
                        <textarea
                            className="textAreaOneLine"
                            placeholder="Ondertitel"
                            name="subtitle"
                            id="subtitle"
                            autoComplete="on"
                            required
                            value={subtitle}
                            onChange={handleSubtitleChange}
                        />

                        <label htmlFor="content">
                            <b>Content:</b>
                        </label>
                        <textarea
                            className="textAreaStory"
                            placeholder="Content"
                            name="content"
                            id="content"
                            autoComplete="on"
                            value={content}
                            onChange={handleContentChange}
                        />

                        <label htmlFor="fileUpload">
                            <b>Afbeelding:</b>
                        </label>
                        <input
                            className="textAreaOneLine"
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            name="file"
                            id="fileUpload"
                            onChange={handleFileChange}
                        />

                        <label htmlFor="caption">
                            <b>Caption:</b>
                        </label>
                        <input
                            className="textAreaOneLine"
                            placeholder="Omschijving van de afbeelding"
                            name="caption"
                            id="caption"
                            autoComplete="on"
                            required
                            value={caption}
                            onChange={handleCaptionChange}
                        />





                    </div>
                    <div className="elementCenterContainer">
                        <br/>
                        <button className="simpleButtons" type="submit">
                            Excursie aanpassingen verzenden
                        </button>
                        <button className="simpleButtons" id="WriteBlogBackButton" type="button">
                            <Link to="/mijnExcursies">Terug naar mijn excursies</Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
)
}

export default ExcursionEdit;