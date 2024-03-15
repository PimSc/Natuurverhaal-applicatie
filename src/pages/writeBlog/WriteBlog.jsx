import './WriteBlog.css';
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext} from '../../context/AuthContextProvider.jsx';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function WriteBlog() {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        file: null,
        caption: "",
        content: "",
        username: `${user.username}`,
        categories: [''],
        date: ""
    });

    const [uploadStatus, setUploadStatus] = useState(null);

    const handleChangeTitle = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleChangeSubtitle = (event) => {
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

    const handleChangeCategories = (event) => {
        const {value} = event.target;

        setFormData({...formData, categories: value});
    };


    async function uploadGegevens(event) {
        event.preventDefault();
        const url = `http://localhost:8080/blog-posts/${user.username}`;
        console.log(user.username)
        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.title);
        formDataToSend.append("subtitle", formData.subtitle);
        formDataToSend.append("file", formData.file);
        formDataToSend.append("caption", formData.caption);
        formDataToSend.append("content", formData.content);
        formDataToSend.append("categories", formData.categories);
        formDataToSend.append("username", formData.username);

        console.log('form', formDataToSend)

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
                navigate("/");
            } else {
                console.error("Error posting blog:", response.statusText);
                setUploadStatus("Er is een fout opgetreden bij het uploaden.");
            }
        } catch (error) {
            console.error("Error posting blog:", error);
            setUploadStatus("Er gaat iets mis. Upload niet gelukt.");
        }
    }

    return (
        <>
            <div className="inner-content-container-textFields">
                <button className="simpleButtons" id="WriteBlogBackButton" type="button">
                    <Link to="/mijnBlogs">Terug naar mijn blogs</Link>
                </button>

                <form action="">
                    <div id="PrikbordButtonPrikbord-bericht-aanmaken" className="textCenter">
                        <h1>Blog aanmaken</h1>
                        <p>Alle velden dienen te worden ingevuld</p>
                        <p>Je kan het venster groter maken in de rechter onderhoek</p>


                        <br/>
                        <div className="categoryContainer">
                            <label htmlFor="title">
                                <b>Categorieën:</b>
                            </label>
                            <select onChange={handleChangeCategories} required>
                                <option value="please select a category">Selecteer een categorie</option>
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

                        {/* Title */}
                        <label htmlFor="title">
                            <b>Titel:</b>
                        </label>

                        <textarea className="textAreaOneLine "
                                  placeholder="Hoofd titel van je blog"
                                  name="title"
                                  id="title"
                                  autoComplete="on"
                                  required
                                  value={formData.title}
                                  onChange={handleChangeTitle}
                        />

                        {/* Subtitle */}
                        <label htmlFor="subtitle">
                            <b>Ondertitel:</b>
                        </label>
                        <textarea className="textAreaOneLine"
                                  placeholder="Ondertitel"
                                  name="subtitle"
                                  id="subtitle"
                                  autoComplete="on"
                                  value={formData.subtitle}
                                  onChange={handleChangeSubtitle}
                                  required
                        />

                        <label htmlFor="fileUpload">
                            <b>Afbeelding:</b>
                        </label>
                        <input className="textAreaOneLine"
                               type="file"
                               accept=".jpg, .jpeg, .png"
                               name="file"
                               id="fileUpload"
                               required
                               onChange={handleFileChange}
                        />

                        {/* Caption */}
                        <label htmlFor="caption">
                            <b>Caption:</b>
                        </label>
                        <textarea className="textAreaOneLine"
                                  placeholder="Omschijf de afbeelding"
                                  name="caption"
                                  id="caption"
                                  autoComplete="on"
                                  value={formData.caption}
                                  onChange={handleChangeCaption}
                                  required
                        />

                        {/* Content */}
                        <label htmlFor="content">
                            <b>Content:</b>
                        </label>
                        <textarea className="textAreaStory"
                                  placeholder="Jouw blog"
                                  name="content"
                                  id="content"
                                  autoComplete="on"
                                  value={formData.content}
                                  onChange={handleChangeContent}
                                  required
                        />

                    </div>
                    <div className="elementCenterContainer">
                        <br/>
                        {uploadStatus && <p>{uploadStatus}</p>}
                        <div className="textCenter">
                            <p>Na "Blogbericht plaatsen" verschijnt de blog op de homepage </p>
                            <p>Blogs aanpassen kan bij Account > Mijn blogs</p>

                            <br/>
                            <button className="simpleButtons" type="submit" onClick={uploadGegevens}>
                                Blog bericht plaatsen
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </>
    );
}

export default WriteBlog;

