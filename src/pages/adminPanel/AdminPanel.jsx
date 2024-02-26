import './AdminPanel.css';
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import {Link} from "react-router-dom";

function AdminPanel() {
    const {user} = useContext(AuthContext);


    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container-column">

                    <h1>Admin panel</h1>
                    <h3>Welkom admin {user.username.charAt(0).toUpperCase() + user.username.slice(1)}</h3>


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
                            placeholder="Schrijf een email"
                            autoComplete="on"
                        />
                        <div className="adminWriteMassageContainer">
                            <button
                                className="simpleButtons"
                                type="submit">
                                Send <strong>email</strong>
                            </button>
                            <input
                                className="adminUsernameInput"
                                name="sendMassage"
                                id="sendMassage"
                                placeholder="username"
                                autoComplete="on"
                            />
                        </div>
                    </form>

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
                    <form className="adminRedfield" action="">

                        <label htmlFor="deleteBlog">
                            <b>Blog verwijderen</b>
                        </label>
                        <input
                            className="textAreaOneLine"
                            name="deleteBlog"
                            id="deleteBlog"
                            placeholder="Typ een blog ID nummer en druk op delete"
                            autoComplete="on"
                        />
                        <button className="simpleButtonsRemove buttonRedRemove" type="submit">
                            Delete <strong>blog</strong>
                        </button>
                    </form>


                    {/*--DELETE USER--*/}
                    <form className="adminRedfield" action="">

                        <label htmlFor="deleteUser">
                            <b>User verwijderen</b>
                        </label>
                        <input
                            className="textAreaOneLine"
                            name="deleteUser"
                            id="deleteUser"
                            placeholder="Typ een username en druk op delete"
                            autoComplete="on"
                        />

                        <button className="simpleButtonsRemove buttonRedRemove" type="submit">
                            Delete <strong>user</strong>
                        </button>
                    </form>





                </div>
            </section>
        </>
    );
}

export default AdminPanel;