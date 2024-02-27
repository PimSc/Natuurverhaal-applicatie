import './EditBlog.css';
import {Link, useParams} from "react-router-dom";
import React from "react";
import useBlog from "../../Hooks/useUserBlogs.jsx";

function EditBlog() {

    const { blogPostsUser } = useBlog();
    const { id } = useParams(); // Haal het ID uit de URL-parameters
    const post = blogPostsUser.find(post => post.id.toString() === id); // Zoek de blogpost met het overeenkomende ID
return (
<>


    <div className="inner-content-container">

        <div className="inner-content-container-textFields ">
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <h4>{post.subtitle}</h4>
                    <p>Categorie: {post.categories}</p>
                    <p>
                        Geschreven door{" "}
                        <Link to={`/ProfileDetail/${post.username}`}>
                            {post.username.charAt(0).toUpperCase() + post.username.slice(1)}
                        </Link>
                    </p>
                    <i>{post.date}</i>
                    <div className="textStart"></div>
                    <br />
                    <p className="textStart">{post.content}</p>
                    <img
                        className="blogDetailImage"
                        src={"data:image/png;base64," + post.fileContent}
                        alt={post.caption}
                    />
                </>
            )}
        </div>

        <div className="inner-content-container-textFields">


            <button className="simpleButtons" id="WriteBlogBackButton" type="button">
                <Link to="/mijnBlogs">Terug naar mijn blogs</Link>
            </button>


            <form action="">
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
                    <textarea className="textAreaOneLine"
                              placeholder="Korte titel"
                              name="title"
                              id="title"
                              autoComplete="on"
                              required
                        // value={formData.title}
                        // onChange={handleChangeTitle}
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
                        // value={formData.subtitle}
                        // onChange={handleChangeSubtitle}
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
                        // onChange={handleFileChange}
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
                        // value={formData.caption}
                        // onChange={handleChangeCaption}
                              required
                    />

                    <div className="elementCenterContainer categoryContainer">
                        <p>Categorieën: </p>
                        <select
                            // onChange={handleChangeCategories}
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


                    {/* Content */}
                    <label className="textStart" htmlFor="content">
                        <b>Content:</b>
                    </label>
                    <textarea className="textAreaStory"
                              placeholder="Jouw blog"
                              name="content"
                              id="content"
                              autoComplete="on"
                        // value={formData.content}
                        // onChange={handleChangeContent}
                              required
                    />


                </div>
                <div className="elementCenterContainer">
                    <br/>
                    {/*{uploadStatus && <p>{uploadStatus}</p>}*/}
                    <button className="simpleButtons" id="buttonPostBlog" type="submit"
                        // onClick={uploadGegevens}
                    >
                        Blog aanpassingen verzenden
                    </button>
                </div>
            </form>
        </div>
    </div>

</>
);
}

export default EditBlog;