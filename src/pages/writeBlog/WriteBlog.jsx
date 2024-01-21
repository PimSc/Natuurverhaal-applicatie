import './WriteBlog.css';
import {Link} from "react-router-dom";
 
function WriteBlog() {

return (
<>
    <div className="inner-content-container-textFields">

        <button className="SimpleButtons" type="button">
            <Link to="/mijnBlogs"><strong>Terug naar mijn blogs</strong></Link>
        </button>



        <div id="PrikbordButtonPrikbord-bericht-aanmaken" className="textCenter">
            <h1>Blog aanmaken</h1>
            <p>Velden met een <strong>*</strong> zijn verplicht</p>
            <p>je kan het venster groter maken in de rechter onderhoek</p>

            <br/><br/>
            <p>ID automatisch genereren</p>
            <p>Date automatisch genereren</p>
            <p>Author automatisch genereren</p>

            <br/>

            <p>image</p>

            {/*Caption*/}
            <label className="textStart" htmlFor="title">
                <b>Caption:</b>
            </label>
            <textarea className="textAreaOneLine"
                      placeholder="Afbeelding omschrijving*"
                      name="title"
                      id="title"
                      autoComplete="on"
                      required
            />

            {/*Title*/}
            <label className="textStart" htmlFor="title">
                <b>Titel:</b>
            </label>
            <textarea className="textAreaOneLine"
                      placeholder="Korte pakkende titel*"
                      name="title"
                      id="title"
                      autoComplete="on"
                      required
            />

            {/*SubTitle*/}
            <label className="textStart" htmlFor="title">
                <b>Subtitel:</b>
            </label>
            <textarea className="textAreaOneLine"
                      placeholder="Ondertitel"
                      name="title"
                      id="title"
                      autoComplete="on"
            />

            {/*Content*/}
            <label className="textStart" htmlFor="content">
                <b>Content:</b>
            </label>
            <textarea className="textAreaStory"
                      placeholder="Jouw blog*"
                      name="content"
                      id="content"
                      autoComplete="on"
                      required
            />
        </div>

        <button className="SimpleButtons" id="buttonPostBlog" type="submit">
            Blog bericht plaatsen
        </button>

    </div>



</>
);
}
 
export default WriteBlog;