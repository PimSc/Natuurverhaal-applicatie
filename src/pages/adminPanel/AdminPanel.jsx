import React, {useState} from 'react';
import './AdminPanel.css';
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import {Link} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminPanel() {
    const {user} = useContext(AuthContext);
    const [postDeleteId, setPostDeleteId] = useState(""); // State toegevoegd voor postId
    const [blogEditId, setBlogEditId] = useState('');
    const [bulletinEditId, setBulletinEditId] = useState('');
    const [bulletinDeleteId, setBulletinDeleteId] = useState('');
    const [username, setUsername] = useState(""); // State toegevoegd voor username DeleteUser
    const [usernameRole, setUsernameRole] = useState(""); // State toegevoegd voor username ROLE
    const token = localStorage.getItem("token")
    const Navigate = useNavigate();

    // DELETE BLOGPOST
    const handleDeleteBlogpost = () => {
        axios.delete(`http://localhost:8080/blog-posts/${user.username}/${postDeleteId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('Post deleted successfully');
                Navigate("/");
            })
            .catch(error => {
                console.error('Error deleting post:', error);
            });
    };

// DELETE PRIKBORD POST
    const handleDeletePrikbordpost = () => {
        axios.delete(`http://localhost:8080/bulletin-boards/${user.username}/${bulletinDeleteId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('Post deleted successfully');
                Navigate("/Prikbord");
            })
            .catch(error => {
                console.error('Error deleting post:', error);
            });
    };


// DELETE USER
    const handleDeleteUser = () => {
        axios.delete(`http://localhost:8080/users/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('User deleted successfully');
                window.location.reload();
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    };



    // EDIT BLOG BY ID NUMBER
    const handleEditBlogPost = () => {
        if (blogEditId.trim() !== '') {
            window.location.href = `/blogedit/${blogEditId}`;
        } else {
            alert("Voer een geldig ID-nummer in.");
        }
    };

    // EDIT PRIKBORD BY ID NUMBER
    const handleEditPrikbordPost = () => {
        if (bulletinEditId.trim() !== '') {
            window.location.href = `/editprikbord/${bulletinEditId}`;
        } else {
            alert("Voer een geldig ID-nummer in.");
        }
    };

    // ASSIGN ADMIN ROLE
    const assignRoleAdmin = () => {
        axios.post(`http://localhost:8080/users/${usernameRole}/authorities`, {
            "authority": "ROLE_ADMIN"
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('Role assigned successfully');
                window.location.reload();
            })
            .catch(error => {
                console.error('Error assigning role:', error);
            });
    };


    // Delete ADMIN ROLE
    const deleteRoleAdmin = () => {
        axios.delete(`http://localhost:8080/users/${usernameRole}/authorities/ROLE_ADMIN`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('Role assigned successfully');
                window.location.reload();
            })
            .catch(error => {
                console.error('Error assigning role:', error);
            });
    };

    return (
        <>
            <article>
                <section className="outer-content-container">
                    <div className="inner-content-container-column">


                        <h1>Admin panel</h1>
                        <h3 className="ButtonMargin40px">Welkom
                            admin {user.username.charAt(0).toUpperCase() + user.username.slice(1)}</h3>

                        <section>
                            <h2 className="textCenter">Excursie section</h2>

                            <div className="adminGreenCenterContainer adminGreenField">
                                <div>
                                    <button
                                        className="simpleButtons"
                                        type="button"
                                    ><Link to="/mijnExcursies">Excursie panel</Link>
                                    </button>
                                </div>

                                <div>
                                    <button
                                        className="simpleButtons margin20PxTop"
                                        type="button"
                                    ><Link to="/writeExcursion">Excursie Aanmaken</Link>
                                    </button>
                                </div>
                            </div>
                        </section>


                        <section>
                            <h2 className="textCenter">Blog section</h2>

                            {/*--EDIT BLOG--*/}
                            <form className="adminYellowField">
                                <label htmlFor="editBlog">
                                    <b>Blog bewerken</b>
                                </label>
                                <input
                                    className="textAreaOneLine"
                                    name="editBlog"
                                    id="editBlog"
                                    placeholder="Typ een blog ID nummer en druk op edit"
                                    autoComplete="on"
                                    value={blogEditId}
                                    onChange={(e) => setBlogEditId(e.target.value)}
                                />
                                <button
                                    className="simpleButtonsEdit buttonYellowEdit"
                                    type="button"
                                    onClick={handleEditBlogPost}
                                >
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
                                    value={postDeleteId}
                                    onChange={(e) => setPostDeleteId(e.target.value)}
                                />
                                <button className="simpleButtonsRemove buttonRedRemove" type="submit">
                                    Delete <strong>blog</strong>
                                </button>
                            </form>
                        </section>


                        <section>
                            <h2 className="textCenter">Prikbord section</h2>

                            {/*--EDIT PRIKBORD--*/}
                            <form className="adminYellowField" action="" onSubmit={(e) => {
                                e.preventDefault();
                                handleEditPrikbordPost()
                            }}>

                                <label htmlFor="editBlog">
                                    <b>Prikbord post bewerken</b>
                                </label>
                                <input
                                    className="textAreaOneLine"
                                    name="editBlog"
                                    id="editBlog"
                                    placeholder="Typ een blog ID nummer en druk op edit"
                                    value={bulletinEditId}
                                    onChange={(e) => setBulletinEditId(e.target.value)}
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
                                    value={bulletinDeleteId}
                                    onChange={(e) => setBulletinDeleteId(e.target.value)}
                                />
                                <button className="simpleButtonsRemove buttonRedRemove" type="submit">
                                    Delete <strong>blog</strong>
                                </button>
                            </form>
                        </section>


                        <section>
                            <h2 className="textCenter">User section</h2>

                            {/*--Change user role--*/}
                            <form className="adminYellowField" action="">
                                <label htmlFor="editBlog">
                                    <b>Rol toekennen aan gebruiker</b>
                                </label>
                                <input
                                    className="textAreaOneLine"
                                    name="change role"
                                    id="change role"
                                    placeholder="Voer een username in"
                                    autoComplete="on"
                                    value={usernameRole}
                                    onChange={(e) => setUsernameRole(e.target.value)}
                                />
                                <button className="simpleButtonsEdit simpleButtonsTotalGreen" type="button"
                                        onClick={assignRoleAdmin}>
                                    Admin rol <strong>toekennen</strong>
                                </button>
                                <button className="simpleButtonsRemove buttonRedRemove margin20PxTop" type="button"
                                        onClick={deleteRoleAdmin}>
                                    Admin rol <strong>verwijderen</strong>
                                </button>
                            </form>

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
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <button className="simpleButtonsRemove buttonRedRemove" type="submit">
                                    Hard delete <strong>user</strong>
                                </button>
                            </form>
                        </section>
                    </div>
                </section>
            </article>
        </>
    );
}

export default AdminPanel;
