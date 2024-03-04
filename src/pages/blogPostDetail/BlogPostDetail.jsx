import './BlogPostDetail.css';
import { Link, useParams } from 'react-router-dom';
import useBlog from "../../Hooks/useAllBlogs.jsx";
import { useNavigate } from 'react-router-dom';
import formatDateString from '../../helpers/formatDateString.jsx';
import React, { useRef } from "react";
import LoadingGif from "../../../public/assets/icons/LoadingGif.gif";
import {
    EmailShareButton, EmailIcon,
    FacebookShareButton, FacebookIcon,
    RedditShareButton, RedditIcon,
    TelegramIcon, TelegramShareButton,
    WhatsappIcon, WhatsappShareButton, InstapaperShareButton, LinkedinShareButton, LinkedinIcon,

} from "react-share";
import {InstagramLogo} from "@phosphor-icons/react";

function BlogPostDetail() {
    const navigate = useNavigate();
    const { id } = useParams(); // Haal het ID uit de URL-parameters
    const { blogPostsAll } = useBlog();
    const post = blogPostsAll.find(post => post.id.toString() === id); // Zoek de blogpost met het overeenkomende ID



    const handleTerugClick = () => {
        navigate(-1); // Navigeer terug naar de vorige pagina
    };


    if (!post) {
        return <div className="loadingGif"><img src={LoadingGif} alt="loading Gif"/></div>;
    }

    return (
        <>
            <section className="outer-content-container-column">
                <img className="blogDetailImageHeader" src={"data:image/png;base64," + post.fileContent} alt={post.caption}/>
                <div className="inner-content-container" >
                    <div className="textCenter">


                        <h1>{post.title}</h1>
                        <h4>{post.subtitle}</h4>
                        <p>Categorie: {post.categories}</p>
                        <p><Link to={`/ProfileDetail/${post.username}`}>Geschreven
                            door {post.username.charAt(0).toUpperCase() + post.username.slice(1)} </Link></p>
                        <i>{post.date}</i>
                        <div className="textStart">
                        </div>
                        <br/>
                        <p className="textStart">{post.content}</p>
                        <img className="blogDetailImage" src={"data:image/png;base64," + post.fileContent}
                             alt={post.caption}/>
                        <br/>

                        <Link to={`/ProfileDetail/${post.username}`}><strong>Bezoek de profiel pagina
                            van {post.username.charAt(0).toUpperCase() + post.username.slice(1)}</strong> </Link>

                        <div className="shareIconsBox">
                            <p><strong>Deel deze pagina</strong></p>
                            <WhatsappShareButton
                                className="ShareIcon"
                                url={`/blogposts/${id}`}
                                quote={'Hey! have you seen this? i fount this nature blog on Natuurverhaal.nl'}
                                hashtag="#muo"
                            >
                                <WhatsappIcon size={32} round/>
                            </WhatsappShareButton>
                            <EmailShareButton
                                className="ShareIcon"
                                url={`/blogposts/${id}`}
                                quote={'Hey! have you seen this? i fount this nature blog on Natuurverhaal.nl'}
                                hashtag="#muo"
                            >
                                <EmailIcon size={32} round/>
                            </EmailShareButton>
                            <TelegramShareButton
                                className="ShareIcon"
                                url={`/blogposts/${id}`}
                                quote={'Hey! have you seen this? i fount this nature blog on Natuurverhaal.nl'}
                                hashtag="#muo"
                            >
                                <TelegramIcon size={32} round/>
                            </TelegramShareButton>
                            <RedditShareButton
                                className="ShareIcon"
                                url={`/blogposts/${id}`}
                                quote={'Hey! have you seen this? i fount this nature blog on Natuurverhaal.nl'}
                                hashtag="#muo"
                            >
                                <RedditIcon size={32} round/>
                            </RedditShareButton>
                            <LinkedinShareButton
                                className="ShareIcon"
                                url={`/blogposts/${id}`}
                                quote={'Hey! have you seen this? i fount this nature blog on Natuurverhaal.nl'}
                                hashtag="#muo"
                            >
                                <LinkedinIcon size={32} round/>
                            </LinkedinShareButton>
                        </div>


                        <Link to="/" className="back-link">
                            <br/>
                            <button className="simpleButtons" onClick={handleTerugClick}> Terug naar de vorige pagina
                            </button>
                            <br/>
                            <br/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogPostDetail;
