import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

export default props => {

    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div>
                    <a className="navbar-brand" href="#">
                        <FontAwesomeIcon icon={faCalendarCheck} className="me-2" />TodoApp
                    </a>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                        <li>
                            <a class="nav-link" href="#/Content">Content</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#/about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

