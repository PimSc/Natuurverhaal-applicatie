import './NotFound.css'
import {Link} from "react-router-dom";

function NotFound() {


    return (
        <>
            <h2>Oops... De Natuurverhaal vogel kan je pagina niet vinden</h2>
            <p>Take me back to the <Link to="/">home page.</Link></p>
        </>
    )
}

export default NotFound