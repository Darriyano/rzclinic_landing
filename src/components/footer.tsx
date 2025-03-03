import "../styles/footer.css"
import Call from "../vectors/call.svg"
import Mail from "../vectors/mail.svg"
import Alias from "../vectors/insta.svg"
import Pin from "../vectors/pin.svg"
import {Link} from "react-router-dom";
import LogoImage2 from "../vectors/logo.png"


export const Footer = () => {
    return (
        <div className="footer-screen">
            <div className="first-text-block">
                <img src={LogoImage2} className="text-main-block" alt=""/>
                <a href="https://t.me/darriyano" target="_blank">Web-site by Darriyano</a>
            </div>

            <div className="second-text-block">
                <p>Связаться с нами:</p>
                <ul>
                    <li><img src={Call} alt=""/> +7&nbsp;(927)&nbsp;077-19-00
                    </li>
                    <li><img src={Mail} alt=""/> r.z.clinic@mail.ru</li>
                    <li><img src={Alias} alt=""/> @rz_clinic30</li>
                    <li><img src={Pin} alt=""/> г. Астрахань, Улица Савушкина, 27</li>

                </ul>
            </div>

            <div className="third-text-block">
                <p>Клиника</p>
                <ul>
                    <Link to="/">
                        <li>Главная</li>
                    </Link>
                    <Link to="/offering">
                        <li>Услуги</li>
                    </Link>
                    <Link to="/doctors">
                        <li>Врачи</li>
                    </Link>

                    <Link to="/price">
                        <li>Цены</li>
                    </Link>

                    <Link to="/form">
                        <li>Запись</li>
                    </Link>

                    <Link to="/contacts">
                        <li>Контакты</li>
                    </Link>

                </ul>
            </div>

        </div>)
}

