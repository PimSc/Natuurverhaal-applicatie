import './BulletinBoardEdit.css';
import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import useBlog from "../../Hooks/useUserBulletinBoards.jsx";
import axios from "axios";

function BulletinBoardEdit() {

    const { bulletinBoardPostUser } = useBlog();
    const { id } = useParams(); // Haal het ID uit de URL-parameters
    const post = bulletinBoardPostUser.find(post => post.id.toString() === id); // Zoek de blogpost met het overeenkomende ID
    const Navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (post) {
            setTitle(post.title || '');
            setCaption(post.caption || '');
            setContent(post.content || '');
        }
    }, [post]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('username', post.username);
        formData.append('caption', caption);
        formData.append('title', title);
        formData.append('content', content);

        try {
            await axios.put(`http://localhost:8080/bulletin-boards/${id}`, formData);
            // Redirect the user to the updated blog post page
            Navigate("/Prikbord");
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
                        <h1>{post.title}</h1>
                        <p>
                            Geschreven door{" "}
                                {post.username.charAt(0).toUpperCase() + post.username.slice(1)}
                        </p>
                        <i>{post.date}</i>
                        <div className="textStart"></div>
                        <br/>
                        <p className="textStart">{post.content}</p>
                        <br/>
                        <img
                            className="blogDetailImage"
                            src={"data:image/png;base64," + post.fileContent}
                            alt={post.caption}
                        />
                    </>
                )}
            </div>

            <div className="inner-content-container-Edit">

                <button className="simpleButtons" id="WriteBlogBackButton" type="button">
                    <Link to="/mijnprikbord">Terug naar mijn prikbord</Link>
                </button>


                <form onSubmit={handleSubmit}>
                    <div id="PrikbordButtonPrikbord-bericht-aanmaken" className="textCenter">
                        <h1>Blog bewerken</h1>
                        <p>Alle velden dienen te worden ingevuld</p>
                        <p>Je kan het venster groter maken in de rechter onderhoek</p>
                        <br/>
                        <p>Afbeelding</p>

                        {/* Title */}
                        <label className="textStart" htmlFor="title">
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


                        <label className="textStart" htmlFor="fileUpload">
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

                        {/* Caption */}
                        <label className="textStart" htmlFor="caption">
                            <b>Caption:</b>
                        </label>
                        <input
                            className="textAreaOneLine"
                            placeholder="Afbeelding omschrijving"
                            name="caption"
                            id="caption"
                            autoComplete="on"
                            required
                            value={caption}
                            onChange={handleCaptionChange}
                        />


                        {/* Content */}
                        <label className="textStart" htmlFor="content">
                            <b>Content:</b>
                        </label>
                        <textarea
                            className="textAreaStory"
                            placeholder="Jouw blog"
                            name="content"
                            id="content"
                            autoComplete="on"
                            value={content}
                            onChange={handleContentChange}
                        />


                    </div>
                    <div className="elementCenterContainer">
                        <br/>
                        <button className="simpleButtons" type="submit">
                            Prikbord aanpassingen verzenden
                        </button>
                    </div>
                </form>
            </div>
        </div>


    </>
    );
}

export default BulletinBoardEdit;