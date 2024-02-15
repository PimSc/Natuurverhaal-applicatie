import './Contact.css'
import useProfileImage from "../../Hooks/useProfileImage.jsx";
import useBlog from "../../Hooks/useBlog.jsx";
import {useContext} from "react";


function Contact() {
    const emailAddress = "info@natuurverhaal.nl";
    const {blogPosts} = useBlog();
    // const {profileImage} = useProfileImage();

    return (
        <>
            <div className="outer-content-container">
                <div className="inner-content-container-column">
                    <h1>Contact</h1>
                    <div className="textCenter">
                        <br/>
                        <p>Vragen of opmerkingen? stuur ons een email</p>
                        <p>  <a href={`mailto:${emailAddress}`}><strong>{emailAddress}</strong></a></p>


                        {/*<img src={profileImage} alt=""/>*/}


                        <div>
                            <h1>Blog Post</h1>
                            <ul>
                                {blogPosts.map((post) => (
                                    <li key={post.id}>
                                        <h1>{post.title}</h1>
                                        <h4>{post.subtitle}</h4>
                                        {/*<h2>{post.caption}</h2>*/}
                                        {post.content}
                                        <p>Posted by: {post.username}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact