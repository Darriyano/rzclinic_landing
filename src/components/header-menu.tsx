import "../styles/header-menu.css"
import Call from "../vectors/call.svg"
import {Link, useNavigate} from "react-router-dom";

const HeaderMenu = () => {
    const navigate = useNavigate();

    return (<>
            <ul className="menu-tabs typo-style">
                <Link to="/" className="menu-item">
                    <li>Главная</li>
                </Link>


                <Link to="/offering" className="menu-item">
                    <li>Услуги</li>
                </Link>

                <Link to="/doctors" className="menu-item">
                    <li>Врачи</li>
                </Link>

                {/*<li>Наши работы</li>*/}

                <Link to="/price" className="menu-item">
                    <li>Цены</li>
                </Link>

                <Link to="/contacts" className="menu-item">
                    <li> Контакты</li>
                </Link>

                <li>
                    <div className="call-button" onClick={() => navigate("/contacts")}>
                        <img src={Call} alt=""/> Позвоните нам!
                    </div>
                </li>
            </ul>
            <div className="invisible" onClick={() => navigate("/contacts")}>
                <img src={Call} alt=""/> Позвоните&nbsp;нам!
            </div>
        </>
    )
}

export default HeaderMenu