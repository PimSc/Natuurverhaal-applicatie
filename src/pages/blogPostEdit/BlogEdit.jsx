import React, {useState, useEffect, useContext} from 'react';
import './BlogEdit.css';
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from 'axios';
import useBlogPosts from "../../Hooks/useAllBlogs.jsx";
import {AuthContext} from '../../context/AuthContextProvider.jsx';

function BlogEdit() {
    const {blogPostsAll} = useBlogPosts();
    const { id } = useParams();
    const Navigate = useNavigate();
    const post = blogPostsAll.find(post => post.id.toString() === id);
    const {user} = useContext(AuthContext);

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');


    useEffect(() => {
        if (post) {
            setTitle(post.title || '');
            setSubtitle(post.subtitle || '');
            setCaption(post.caption || '');
            setCategory(post.categories || '');
            setContent(post.content || '');
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

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
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
        formData.append('subtitle', subtitle);
        formData.append('content', content);
        formData.append('categories', category);

        const token = localStorage.getItem("token")

        try {
            await axios.put(`http://localhost:8080/blog-posts/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                }
            });
            Navigate("/");
        } catch (error) {
            console.error('Error updating blog post:', error);
        }
    };

    // Toegangscontrole
    //Alleen een username uit de authcontext die gelijk is aan de username uit de blogpost mag de pagina zien OF iemand met authcontext ROLE_ADMIN. anders ga je terug naar /mijnBlogs
    if (!user || !post || (user.username !== post.username && user.role !== 'ROLE_ADMIN')) {
        Navigate("/mijnBlogs");
        return null; // Render niets als de gebruiker niet geautoriseerd is
    }


    return (
        <>
            <div className="outer-content-container-Edit">
                <div className="inner-content-container-editBorder">
                    {post && (
                        <>
                            <h1>{post.title}</h1>
                            <h4>{post.subtitle}</h4>
                            <p>Categorie: {post.categories}</p>
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
                            <h1>Blog bewerken</h1>
                            <p>Alle velden dienen te worden ingevuld</p>
                            <p>Je kan het venster groter maken in de rechter onderhoek</p>
                            <br />
                            <p>Afbeelding</p>

                            <label className="textStart" htmlFor="title">
                                <p><b>Titel:</b></p>
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

                            <label className="textStart" htmlFor="subtitle">
                                <p><b>Ondertitel:</b></p>
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

                            <label className="textStart" htmlFor="fileUpload">
                                <p><b>Afbeelding:</b></p>
                            </label>
                            <input
                                className="textAreaOneLine"
                                type="file"
                                accept=".jpg, .jpeg, .png"
                                name="file"
                                id="fileUpload"
                                onChange={handleFileChange}
                            />

                            <label className="textStart" htmlFor="caption">
                                <p><b>Caption:</b></p>
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

                            <div className="categoryContainer textStart">
                                <p><b>Categorieën:</b></p>
                                <select
                                    value={category}
                                    onChange={handleCategoryChange}
                                >
                                    <option value="please select a category">please select a category</option>
                                    <option value="natuurgebied">natuurgebied</option>
                                    <option value="wandelroute">wandelroute</option>
                                    <option value="fietsroute">fietsroute</option>
                                    <option value="fotografie">fotografie</option>
                                    <option value="diersoort">diersoort</option>
                                    <option value="sport">sport</option>
                                    <option value="educatie">educatie</option>
                                    <option value="reizen">reizen</option>
                                    <option value="tuinieren">tuinieren</option>
                                    <option value="stadsnatuur">stadsnatuur</option>
                                    <option value="creativiteit">creativiteit</option>
                                    <option value="natuurbehoud">natuurbehoud</option>
                                    <option value="voedsel">voedsel</option>
                                    <option value="verhalen">verhalen</option>
                                    <option value="overig">overig</option>
                                </select>
                            </div>

                            <label className="textStart" htmlFor="content">
                                <p><b>Content:</b></p>
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
                            <br />
                            <button className="simpleButtons margin20PxBottom" type="submit">
                                Blog aanpassingen verzenden
                            </button>
                            <button className="simpleButtons" type="button">
                                <Link to="/mijnBlogs">Terug naar mijn blogs</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BlogEdit;
