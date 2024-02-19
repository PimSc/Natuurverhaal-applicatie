import './WriteBlog.css';
import {Link} from "react-router-dom";
import React, {useState} from "react";


function WriteBlog() {

        const [formData, setFormData] = useState({
            title: "",
            subtitle: "",
            image: null,
            caption: "",
            content: ""
        });

        const handleChange = (event) => {
            const {name, value} = event.target;
            setFormData({...formData, [name]: value});
        };

        const handleFileChange = (event) => {
            const file = event.target.files[0];
            setFormData({...formData, image: file});
        };

        const handleSubmit = async (event) => {
            event.preventDefault();

            const url = "http://localhost:8080/blog-posts/test";
            const formDataToSend = new FormData();

            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }

            try {
                const response = await fetch(url, {
                    method: "POST",
                    body: formDataToSend
                });

                if (response.ok) {
                    console.log("Blog post successful!");
                    // Handle successful post, maybe redirect user
                } else {
                    console.error("Error posting blog:", response.statusText);
                    // Handle error case
                }
            } catch (error) {
                console.error("Error posting blog:", error);
                // Handle network error
            }
        };


        return (
            <>
                <div className="inner-content-container-textFields">

                    <button className="SimpleButtons" type="button">
                        <Link to="/mijnBlogs">Terug naar mijn blogs</Link>
                    </button>


                    <form method="post" onSubmit={handleSubmit}>
                        <div id="PrikbordButtonPrikbord-bericht-aanmaken" className="textCenter">
                            <h1>Blog aanmaken</h1>
                            <p>Alle velden dienen te worden ingevuld</p>
                            <p>je kan het venster groter maken in de rechter onderhoek</p>

                            <br/><br/>
                            <p>ID automatisch genereren</p>
                            <p>Date automatisch genereren</p>
                            <p>Author automatisch genereren</p>

                            <br/>

                            <p>image</p>

                            {/*Title*/}
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
                                      onChange={handleChange}
                            />

                            {/*SubTitle*/}
                            <label className="textStart" htmlFor="subtitle">
                                <b>Subtitle:</b>
                            </label>
                            <textarea className="textAreaOneLine"
                                      placeholder="Ondertitel"
                                      name="subtitle"
                                      id="subtitle"
                                      autoComplete="on"
                                      value={formData.subtitle}
                                      onChange={handleChange}
                                      required
                            />

                            <label className="textStart" htmlFor="imageUpload">
                                <b>Afbeelding:</b>
                            </label>
                            <input
                                className="textAreaOneLine"
                                type="file"
                                accept=".jpg, .jpeg, .png"
                                name="image"
                                id="imageUpload"
                                onChange={handleFileChange}
                            />

                            {/*Caption*/}
                            <label className="textStart" htmlFor="caption">
                                <b>Caption:</b>
                            </label>
                            <textarea className="textAreaOneLine"
                                      placeholder="Afbeelding omschrijving"
                                      name="caption"
                                      id="caption"
                                      autoComplete="on"
                                      value={formData.caption}
                                      onChange={handleChange}
                                      required
                            />

                            {/*Content*/}
                            <label className="textStart" htmlFor="content">
                                <b>Content:</b>
                            </label>
                            <textarea className="textAreaStory"
                                      placeholder="Jouw blog"
                                      name="content"
                                      id="content"
                                      autoComplete="on"
                                      value={formData.content}
                                      onChange={handleChange}
                                      required
                            />
                        </div>
                        <div className="elementCenterContainer">
                            <button className="SimpleButtons" id="buttonPostBlog" type="submit">
                                Blog bericht plaatsen
                            </button>
                        </div>
                    </form>
                </div>


            </>
        );
}

export default WriteBlog;




















// import './WriteBlog.css';
// import {Link} from "react-router-dom";
//
// function WriteBlog() {
//
//


//     return (
//         <>
//             <div className="inner-content-container-textFields">
//
//                 <button className="SimpleButtons" type="button">
//                     <Link to="/mijnBlogs">Terug naar mijn blogs</Link>
//                 </button>
//
//
//                 <form action="" method="post">
//                     <div id="PrikbordButtonPrikbord-bericht-aanmaken" className="textCenter">
//                         <h1>Blog aanmaken</h1>
//                         <p>Alle velden dienen te worden ingevuld</p>
//                         <p>je kan het venster groter maken in de rechter onderhoek</p>
//
//                         <br/><br/>
//                         <p>ID automatisch genereren</p>
//                         <p>Date automatisch genereren</p>
//                         <p>Author automatisch genereren</p>
//
//                         <br/>
//
//                         <p>image</p>
//
//                         {/*Title*/}
//                         <label className="textStart" htmlFor="title">
//                             <b>Titel:</b>
//                         </label>
//                         <textarea className="textAreaOneLine"
//                                   placeholder="Korte titel"
//                                   name="title"
//                                   id="title"
//                                   autoComplete="on"
//                                   required
//                         />
//
//                         {/*SubTitle*/}
//                         <label className="textStart" htmlFor="title">
//                             <b>Subtitle:</b>
//                         </label>
//                         <textarea className="textAreaOneLine"
//                                   placeholder="Ondertitel"
//                                   name="title"
//                                   id="title"
//                                   autoComplete="on"
//                                   required
//                         />
//
//                         <label className="textStart" htmlFor="imageUpload">
//                             <b>Afbeelding:</b>
//                         </label>
//                         <input
//                             className="textAreaOneLine"
//                             type="file"
//                             accept=".jpg, .jpeg, .png"
//                             name="image"
//                             id="imageUpload"
//                             // onChange={handleFileChange}
//                         />
//
//                         {/*Caption*/}
//                         <label className="textStart" htmlFor="title">
//                             <b>Caption:</b>
//                         </label>
//                         <textarea className="textAreaOneLine"
//                                   placeholder="Afbeelding omschrijving"
//                                   name="title"
//                                   id="title"
//                                   autoComplete="on"
//                                   required
//                         />
//
//                         {/*Content*/}
//                         <label className="textStart" htmlFor="content">
//                             <b>Content:</b>
//                         </label>
//                         <textarea className="textAreaStory"
//                                   placeholder="Jouw blog"
//                                   name="content"
//                                   id="content"
//                                   autoComplete="on"
//                                   required
//                         />
//                     </div>
//                     <div className="elementCenterContainer">
//                         <button className="SimpleButtons" id="buttonPostBlog" type="submit">
//                             Blog bericht plaatsen
//                         </button>
//                     </div>
//
//                 </form>
//             </div>
//
//
//         </>
//     );
// }
//
// export default WriteBlog;