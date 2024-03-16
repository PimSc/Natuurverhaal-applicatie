import './WriteBulletin.css';
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function WriteBulletin() {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        file: null,
        caption: "",
        content: "",
        username: `${user.username}`,
        date: ""

    });

    const [uploadStatus, setUploadStatus] = useState(null);

    const handleChangeTitle = (event) => {
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

    async function uploadGegevens(event) {
        event.preventDefault();

        const url = `http://localhost:8080/bulletin-boards/${user.username}`;
        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.title);
        formDataToSend.append("file", formData.file);
        formDataToSend.append("caption", formData.caption);
        formDataToSend.append("content", formData.content);
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
                navigate("/prikbord");
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

                <form action="" method="post">
                    <div className="elementCenterContainer">
                        <button className="simpleButtons margin20PxTopAndBottom" type="button">
                            <Link to="/prikbord"><strong>Terug naar het prikbord</strong></Link>
                        </button>
                    </div>

                    <div className="textCenter">
                        <h1>Prikbord bericht aanmaken</h1>
                        <p>Om een prikbord bericht te kunnen maken <strong>moet je ingelogd zijn.</strong></p>
                        <p>je kan het venster groter maken in de rechter onderhoek</p>

                        <br/>
                        {/* Title */}
                        <label className="textStart" htmlFor="title">
                            <b>Titel:</b>
                        </label>
                        <textarea className="textAreaOneLine"
                                  placeholder="Korte titel"
                                  name="title"
                                  id="title"
                                  autoComplete="on"
                                  required
                                  value={formData.title}
                                  onChange={handleChangeTitle}
                        />

                        {/*IMAGE*/}
                        <label className="textStart" htmlFor="fileUpload">
                            <b>Afbeelding:</b>
                        </label>
                        <input className="textAreaOneLine"
                               type="file"
                               accept=".jpg, .jpeg, .png"
                               name="file"
                               id="fileUpload"
                               onChange={handleFileChange}
                               required
                        />

                        {/* Caption */}
                        <label className="textStart" htmlFor="caption">
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
                        <label className="textStart" htmlFor="content">
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
                        {uploadStatus && <p className="redText">{uploadStatus}</p>}
                        <button
                            className="simpleButtons margin20PxTop"
                            type="submit" onClick={uploadGegevens}>
                            <strong>Prikbord bericht plaatsen</strong>
                        </button>
                    </div>
                </form>

            </div>
        </>
    );
}

export default WriteBulletin;