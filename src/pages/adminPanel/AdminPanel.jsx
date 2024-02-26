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
                            className="SimpleButtons"
                            type="button"
                        ><Link to="/writeExcursion">Excursie Aanmaken</Link>
                        </button>
                    </div>


                    {/*--DELETE USER--*/}
                    <form className="adminRedfield" action="">

                        <label htmlFor="caption">
                            <b>User verwijderen</b>
                        </label>
                        <input
                            className="textAreaOneLine"
                            name="caption"
                            id="caption"
                            placeholder="Typ een username en druk op delete"
                            autoComplete="on"
                        />

                        <button  className="SimpleButtonsRemove buttonRedRemove" type="submit">
                            Delete <strong>user</strong>
                        </button>
                    </form>


                    {/*--DELETE BLOG--*/}
                    <form className="adminRedfield" action="">

                        <label htmlFor="caption">
                            <b>Blog verwijderen</b>
                        </label>
                        <input
                            className="textAreaOneLine"
                            name="caption"
                            id="caption"
                            placeholder="Typ een blog ID nummer en druk op delete"
                            autoComplete="on"
                        />
                        <button  className="SimpleButtonsRemove buttonRedRemove" type="submit">
                            Delete <strong>blog</strong>
                        </button>
                    </form>

                    {/*--EDIT BLOG--*/}
                    <form className="adminYellowField" action="">

                        <label htmlFor="caption">
                            <b>Blog verwijderen</b>
                        </label>
                        <input
                            className="textAreaOneLine"
                            name="caption"
                            id="caption"
                            placeholder="Typ een blog ID nummer en druk op edit"
                            autoComplete="on"
                        />
                        <button  className="SimpleButtonsEdit buttonYellowEdit" type="submit">
                            Edit <strong>blog</strong>
                        </button>
                    </form>






                </div>
            </section>
        </>
);
}

export default AdminPanel;