import React, {useState} from 'react';
import './AdminPanel.css';
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import {Link} from "react-router-dom";
import axios from "axios";

function AdminPanel() {
    const {user} = useContext(AuthContext);
    const [postId, setPostId] = useState(""); // State toegevoegd voor postId
    const [prikbordpostId, setPrikbordId] = useState(""); // State toegevoegd voor postId
    const [username, setUsername] = useState(""); // State toegevoegd voor username DeleteUser
    const [usernameRole, setUsernameRole] = useState(""); // State toegevoegd voor username ROLE
    const token = localStorage.getItem("token")

    const handleDeleteBlogpost = () => {
        console.log(postId);
        axios.delete(`http://localhost:8080/blog-posts/${user.username}/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('Post deleted successfully');
                window.location.reload();
            })
            .catch(error => {
                console.error('Error deleting post:', error);
            });
    };

    const handleDeletePrikbordpost = () => {
        console.log(prikbordpostId);
        axios.delete(`http://localhost:8080/bulletin-boards/${user.username}/${prikbordpostId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

            .then(response => {
                console.log('Post deleted successfully');
                window.location.reload(); // Herlaad de pagina na succesvol verwijderen
            })
            .catch(error => {
                console.error('Error deleting post:', error);
            });
    };


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

    const [blogId, setBlogId] = useState('');

    const handleEdit = () => {
        if (blogId.trim() !== '') {
            window.location.href = `/blogedit/${blogId}`;
        } else {
            alert("Voer een geldig ID-nummer in.");
        }
    };

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
                                    value={blogId}
                                    onChange={(e) => setBlogId(e.target.value)}
                                />
                                <button
                                    className="simpleButtonsEdit buttonYellowEdit"
                                    type="button"
                                    onClick={handleEdit}
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
                                    value={postId}
                                    onChange={(e) => setPostId(e.target.value)}
                                />
                                <button className="simpleButtonsRemove buttonRedRemove" type="submit">
                                    Delete <strong>blog</strong>
                                </button>
                            </form>
                        </section>


                        <section>
                            <h2 className="textCenter">Prikbord section</h2>

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
                                    onChange={(e) => setPrikbordId(e.target.value)}
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
