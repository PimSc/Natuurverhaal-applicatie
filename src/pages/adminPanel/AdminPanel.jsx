import React, { useState } from 'react';
import './AdminPanel.css';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminPanel() {
    const { user } = useContext(AuthContext);
    const [postId, setPostId] = useState(""); // State toegevoegd voor postId
    const [prikbordpostId, setPrikbordId] = useState(""); // State toegevoegd voor postId
    const [username, setUsername] = useState(""); // State toegevoegd voor username


    const handleDeleteBlogpost = () => {
        console.log(postId);
        axios.delete(`http://localhost:8080/blog-posts/${user.username}/${postId}`)
            .then(response => {
                console.log('Post deleted successfully');
                window.location.reload(); // Herlaad de pagina na succesvol verwijderen
            })
            .catch(error => {
                console.error('Error deleting post:', error);
            });
    };

    const handleDeletePrikbordpost = () => {
        console.log(prikbordpostId);
        axios.delete(`http://localhost:8080/bulletin-boards/${user.username}/${prikbordpostId}`)
            .then(response => {
                console.log('Post deleted successfully');
                window.location.reload(); // Herlaad de pagina na succesvol verwijderen
            })
            .catch(error => {
                console.error('Error deleting post:', error);
            });
    };


    const handleDeleteUser = () => {
        axios.delete(`http://localhost:8080/users/${username}`)
            .then(response => {
                console.log('User deleted successfully');
                window.location.reload(); // Herlaad de pagina na succesvol verwijderen
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    };



    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container-column">

                    <h1>Admin panel</h1>
                    <h3>Welkom admin {user.username.charAt(0).toUpperCase() + user.username.slice(1)}</h3>

                    {/*admin maken toevoegen*/}


                    <div className="elementCenterContainer">
                        <button
                            className="simpleButtons"
                            type="button"
                        ><Link to="/writeExcursion">Excursie Aanmaken</Link>
                        </button>
                    </div>

                    {/*--SEND MASSAGE--*/}
                    <form className="adminGreenField" action="">

                        <label htmlFor="sendMassage">
                            <b>Bericht versturen</b>
                        </label>

                        <input
                            className="textAreaOneLine"
                            name="sendMassage"
                            id="sendMassage"
                            placeholder="gebruikersnaam ontvanger"
                            autoComplete="on"
                        />
                        <textarea
                            className="textAreaOneLine"
                            name="sendMassage"
                            id="sendMassage"
                            placeholder="Schrijf een email"
                            autoComplete="on"
                        />
                        <div className="adminWriteMassageContainer">
                            <button
                                className="simpleButtonsTotalGreen"
                                type="submit">
                                Send <strong>email</strong>
                            </button>
                        </div>
                    </form>

                    <h1>Blog section</h1>

                    {/*--EDIT BLOG--*/}
                    <form className="adminYellowField" action="">

                        <label htmlFor="editBlog">
                            <b>Blog bewerken</b>
                        </label>
                        <input
                            className="textAreaOneLine"
                            name="editBlog"
                            id="editBlog"
                            placeholder="Typ een blog ID nummer en druk op edit"
                            autoComplete="on"
                        />
                        <button className="simpleButtonsEdit buttonYellowEdit" type="submit">
                            Edit <strong>blog</strong>
                        </button>
                    </form>


                    {/*--DELETE BLOG--*/}
                    <form className="adminRedfield" action="" onSubmit={(e) => {
                        e.preventDefault();
                        handleDeleteBlogpost()
                    }}>

                        <label htmlFor="deleteBlog">
                            <b>Blog verwijderen</b>
                        </label>
                        <input
                            className="textAreaOneLine"
                            name="deleteBlog"
                            id="deleteBlog"
                            placeholder="Typ een blog ID nummer en druk op delete"
                            autoComplete="on"
                            value={postId} // Waarde van de input gekoppeld aan postId
                            onChange={(e) => setPostId(e.target.value)} // onChange event handler om postId bij te werken
                        />
                        <button className="simpleButtonsRemove buttonRedRemove" type="submit">
                            Delete <strong>blog</strong>
                        </button>
                    </form>

                    <h1>Prikbord section</h1>

                    {/*--EDIT PRIKBORD--*/}
                    <form className="adminYellowField" action="">

                        <label htmlFor="editBlog">
                            <b>Prikbord post bewerken</b>
                        </label>
                        <input
                            className="textAreaOneLine"
                            name="editBlog"
                            id="editBlog"
                            placeholder="Typ een blog ID nummer en druk op edit"
                            autoComplete="on"
                        />
                        <button className="simpleButtonsEdit buttonYellowEdit" type="submit">
                            Edit <strong>blog</strong>
                        </button>
                    </form>


                    {/*--DELETE PRIKBORD--*/}
                    <form className="adminRedfield" action="" onSubmit={(e) => {
                        e.preventDefault();
                        handleDeletePrikbordpost()
                    }}>

                        <label htmlFor="deleteBulletin">
                            <b>Prikbord post verwijderen</b>
                        </label>
                        <input
                            className="textAreaOneLine"
                            name="deleteBulletin"
                            id="deleteBulletin"
                            placeholder="Typ een prikbord ID nummer en druk op delete"
                            autoComplete="on"
                            value={prikbordpostId}
                            onChange={(e) => setPrikbordId(e.target.value)} // onChange event handler om postId bij te werken
                        />
                        <button className="simpleButtonsRemove buttonRedRemove" type="submit">
                            Delete <strong>blog</strong>
                        </button>
                    </form>



                    <h1>User section</h1>

                    {/*--HARD DELETE USER--*/}
                    <form className="adminRedfield" onSubmit={(e) => {
                        e.preventDefault();
                        handleDeleteUser()
                    }}>
                        <label htmlFor="deleteUser">
                            <b>User verwijderen</b>
                        </label>
                        <input
                            className="textAreaOneLine"
                            name="deleteUser"
                            id="deleteUser"
                            placeholder="Typ een username en druk op delete"
                            autoComplete="on"
                            value={username} // Waarde van de input gekoppeld aan username
                            onChange={(e) => setUsername(e.target.value)} // onChange event handler om username bij te werken
                        />
                        <button className="simpleButtonsRemove buttonRedRemove" type="submit">
                            Hard delete <strong>user</strong>
                        </button>
                    </form>


                </div>
            </section>
        </>
    );
}

export default AdminPanel;
