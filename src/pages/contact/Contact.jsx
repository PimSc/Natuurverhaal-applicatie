import './Contact.css'
import useProfileImage from "../../Hooks/useProfileImage.jsx";
// import useBlog from "../../Hooks/useBlogAll.jsx";
import {useContext} from "react";
import useBlog from "../../Hooks/useBlogUser.jsx";

function Contact() {
    const emailAddress = "info@natuurverhaal.nl";
    const { blogPostsUser } = useBlog();
    console.log("log", blogPostsUser)

    return (
        <>
            <div className="outer-content-container">
                <div className="inner-content-container-column">
                    <h1>Contact</h1>
                    <div className="textCenter">
                        <br/>
                        <p>Vragen of opmerkingen? stuur ons een email</p>
                        <p>  <a href={`mailto:${emailAddress}`}><strong>{emailAddress}</strong></a></p>

                        {blogPostsUser.map((post) => (
                            <li key={post.id} className="blog-post-item">
                                <p>{post.title}</p>
                                <img src={"data:image/png;base64," + post.fileContent} alt={post.caption}/>
                            </li>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact


// useEffect(() => {
//     console.log("FormData", formData )
//
// }, [formData]);