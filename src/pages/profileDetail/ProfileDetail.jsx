import './ProfileDetail.css';
import useProfile from "../../Hooks/userProfile.jsx";
import {useContext, useEffect, useState} from "react";
import useBlog from "../../Hooks/useBlogUser.jsx";
import SearchContext from "../../context/SearchContext.jsx";


function ProfileDetail() {
    const {userProfile} = useProfile();

    console.log("userProfile log", userProfile);


    const {blogPostsAll} = useBlog();
    // const totalPosts = blogPostsAll.length;

    const {searchQuery, setSearchQuery, handleChange} = useContext(SearchContext);


    const [filteredPosts, setFilteredPosts] = useState(blogPostsAll);

    useEffect(() => {
        const filtered = blogPostsAll.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.username.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPosts(filtered);
    }, [searchQuery, blogPostsAll]);


    return (
        <>
            <div className="outer-content-container-column">
                <div className="inner-content-container-column">
                    <div className="elementCenterContainer">
                        {userProfile.map((prof) => (
                            <>
                                <h2>Username: {prof.username}</h2>
                                <h2>Profielpagina van {prof.name}</h2>
                                <h2>Email: {prof.email}</h2>
                                <h2>Regio: {prof.regio}</h2>
                                <h2>Bio: {prof.bio}</h2>
                                {/*<img src={"data:image/png;base64," + prof.fileContent} alt="Profiel foto"/>*/}

                                <img
                                    src={"data:image/png;base64," + prof.fileContent}
                                    alt="Profiel foto"
                                    style={{width: 400, height: 400}}
                                />




                                    {/*{filteredPosts.map((prof) => (*/}
                                    {/*    <>*/}
                                    {/*        <div key={prof.id}>*/}
                                    {/*            /!* Inhoud hier toevoegen *!/*/}
                                    {/*        </div>*/}
                                    {/*    </>*/}
                                    {/*))}*/}



                            </>
                        ))}


                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileDetail;
