import "../styles/header-menu.css"
import Call from "../vectors/call.svg"
import {Link, useNavigate} from "react-router-dom";

const HeaderMenu = () => {
    return (<>
            <ul className="menu-tabs">
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
                    <a href="tel:+79270771900">
                        <div className="call-button">
                            <img src={Call} alt=""/> Позвоните&nbsp;нам!
                        </div>
                    </a>
                </li>
            </ul>
            <a href="tel:+79270771900">
                <div className="invisible">
                    <img src={Call} alt=""/> Позвоните&nbsp;нам!
                </div>
            </a>
        </>
    )
}

export default HeaderMenu