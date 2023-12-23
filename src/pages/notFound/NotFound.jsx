import './NotFound.css'
import {Link} from "react-router-dom";

function NotFound() {


    return (
        <>

            <h2>Oops... Geen unicorn, toch is je pagina opgegeten</h2>
            <p>Take me back to the <Link to="/">home page.</Link></p>


        </>
    )
}

export default NotFound