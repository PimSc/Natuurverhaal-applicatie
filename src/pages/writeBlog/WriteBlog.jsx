import './WriteBlog.css';
import { Link } from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import axios from "axios"; // Importeer Axios
import { AuthContext } from '../../context/AuthContextProvider.jsx';

function WriteBlog() {
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        // file: null,
        caption: "",
        content: "",
        username: `${user.username}`
    });

    const [uploadStatus, setUploadStatus] = useState(null);

    useEffect(() => {
        console.log("FormData", formData )

    }, [formData]);



    const handleChangeTitle = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeSubtitle = (event) => {
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

    async function uploadGegevens() {

        const url = `http://localhost:8080/blog-posts/${user.username}`;
        // const formDataToSend = new FormData();
        //
        // for (const key in formData) {
        //     formDataToSend.append(key, formData[key]);
        // }

        // console.log("formDataToSend:", formDataToSend); // Log de FormData

        console.log("urlToSend:", url); // Log de URL om te verzenden
        console.log("formData:", formData);
        try {
            const response = await axios.post(url, formData); // Verstuur POST-verzoek met Axios

            if (response.status === 200) {
                console.log("Blog post successful!");
                setUploadStatus("Upload is gelukt!");
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
            <div className="inner-content-container-textFields">
                <button className="SimpleButtons" id="WriteBlogBackButton" type="button">
                    <Link to="/mijnBlogs">Terug naar mijn blogs</Link>
                </button>

                <form action="">
                    <div id="PrikbordButtonPrikbord-bericht-aanmaken" className="textCenter">
                        <h1>Blog aanmaken</h1>
                        <p>Alle velden dienen te worden ingevuld</p>
                        <p>Je kan het venster groter maken in de rechter onderhoek</p>
                        <br/>
                        <p>Afbeelding</p>

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

                        {/* Subtitle */}
                        <label className="textStart" htmlFor="subtitle">
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

                        {/* Caption */}
                        <label className="textStart" htmlFor="caption">
                            <b>Caption:</b>
                        </label>
                        <textarea className="textAreaOneLine"
                                  placeholder="Afbeelding omschrijving"
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
                        <br/>
                        {uploadStatus && <p>{uploadStatus}</p>}
                        <button className="SimpleButtons" id="buttonPostBlog" type="submit" onClick={uploadGegevens}>
                            Blog bericht plaatsen
                        </button>

                    </div>
                </form>
            </div>
        </>
    );
}

export default WriteBlog;







//
// import './WriteBlog.css';
// import { Link } from "react-router-dom";
// import React, { useContext, useState } from "react";
// import axios from "axios"; // Importeer Axios
// import { AuthContext } from '../../context/AuthContextProvider.jsx';
//
// function WriteBlog() {
//     const { user } = useContext(AuthContext);
//
//     const [formData, setFormData] = useState({
//         title: "",
//         subtitle: "",
//         image: null,
//         caption: "",
//         content: ""
//     });
//
//     const [uploadStatus, setUploadStatus] = useState(null);
//
//     const handleChangeTitle = (event) => {
//         const { name, value } = event.target;
//         setFormData({ ...formData, [name]: value });
//     };
//
//     const handleChangeSubtitle = (event) => {
//         const { name, value } = event.target;
//         setFormData({ ...formData, [name]: value });
//     };
//
//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         console.log("Selected file:", file);
//         setFormData({ ...formData, image: file });
//     };
//
//     const handleChangeCaption = (event) => {
//         const { name, value } = event.target;
//         setFormData({ ...formData, [name]: value });
//     };
//
//     const handleChangeContent = (event) => {
//         const { name, value } = event.target;
//         setFormData({ ...formData, [name]: value });
//     };
//
//     async function uploadImage() {
//         const url = `http://localhost:8080/blog-posts/${user.username}`;
//         const formDataToSend = new FormData();
//
//         for (const key in formData) {
//             formDataToSend.append(key, formData[key]);
//         }
//
//         console.log("formDataToSend:", formDataToSend); // Log de FormData
//         console.log("urlToSend:", url); // Log de URL om te verzenden
//         try {
//             const response = await axios.post(url, formDataToSend); // Verstuur POST-verzoek met Axios
//
//             if (response.status === 200) {
//                 console.log("Blog post successful!");
//                 setUploadStatus("Upload is gelukt!");
//             } else {
//                 console.error("Error posting blog:", response.statusText);
//                 setUploadStatus("Er is een fout opgetreden bij het uploaden.");
//             }
//         } catch (error) {
//             console.error("Error posting blog:", error);
//             setUploadStatus("Er is een netwerkfout opgetreden.");
//         }
//     }
//
//     return (
//         <>
//             <div className="inner-content-container-textFields">
//                 <button className="SimpleButtons" id="WriteBlogBackButton" type="button">
//                     <Link to="/mijnBlogs">Terug naar mijn blogs</Link>
//                 </button>
//
//                 <form action="">
//                     <div id="PrikbordButtonPrikbord-bericht-aanmaken" className="textCenter">
//                         <h1>Blog aanmaken</h1>
//                         <p>Alle velden dienen te worden ingevuld</p>
//                         <p>Je kan het venster groter maken in de rechter onderhoek</p>
//                         <br/>
//                         <p>Onderaan je blog kan je eventueel nog categorie tags toevoegen <br/> bijv: #natuur, #bever, #wandelen. De zoekfunctie pakt deze mee tijdens de zoektocht.</p>
//                         <br/>
//                         <br/>
//                         <p>Afbeelding</p>
//
//                         {/* Title */}
//                         <label className="textStart" htmlFor="title">
//                             <b>Titel:</b>
//                         </label>
//                         <textarea className="textAreaOneLine"
//                                   placeholder="Korte titel"
//                                   name="title"
//                                   id="title"
//                                   autoComplete="on"
//                                   required
//                                   value={formData.title}
//                                   onChange={handleChangeTitle}
//                         />
//
//                         {/* Subtitle */}
//                         <label className="textStart" htmlFor="subtitle">
//                             <b>Ondertitel:</b>
//                         </label>
//                         <textarea className="textAreaOneLine"
//                                   placeholder="Ondertitel"
//                                   name="subtitle"
//                                   id="subtitle"
//                                   autoComplete="on"
//                                   value={formData.subtitle}
//                                   onChange={handleChangeSubtitle}
//                                   required
//                         />
//
//                         <label className="textStart" htmlFor="imageUpload">
//                             <b>Afbeelding:</b>
//                         </label>
//                         <input className="textAreaOneLine"
//                                type="file"
//                                accept=".jpg, .jpeg, .png"
//                                name="image"
//                                id="imageUpload"
//                                onChange={handleFileChange}
//                         />
//
//                         {/* Caption */}
//                         <label className="textStart" htmlFor="caption">
//                             <b>Caption:</b>
//                         </label>
//                         <textarea className="textAreaOneLine"
//                                   placeholder="Afbeelding omschrijving"
//                                   name="caption"
//                                   id="caption"
//                                   autoComplete="on"
//                                   value={formData.caption}
//                                   onChange={handleChangeCaption}
//                                   required
//                         />
//
//                         {/* Content */}
//                         <label className="textStart" htmlFor="content">
//                             <b>Content:</b>
//                         </label>
//                         <textarea className="textAreaStory"
//                                   placeholder="Jouw blog"
//                                   name="content"
//                                   id="content"
//                                   autoComplete="on"
//                                   value={formData.content}
//                                   onChange={handleChangeContent}
//                                   required
//                         />
//                     </div>
//                     <div className="elementCenterContainer">
//                         <br/>
//                         {uploadStatus && <p>{uploadStatus}</p>}
//                         <button className="SimpleButtons" id="buttonPostBlog" type="submit" onClick={uploadImage}>
//                             Blog bericht plaatsen
//                         </button>
//
//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// }
//
// export default WriteBlog;