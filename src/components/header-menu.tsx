import "../styles/header-menu.css"
import {Link} from "react-router-dom";
import React, {useState} from "react";
import Call from "../vectors/call.svg";
import Menu from "../vectors/menu-mobile.svg";
import { MenuMobile } from "../pages/MenuMobile";

const HeaderMenu = () => {
    // Локальное состояние для управления показом мобильного меню
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <ul className="menu-tabs">
                <Link to="/" className="menu-item"><li>Главная</li></Link>
                <Link to="/offering" className="menu-item"><li>Услуги</li></Link>
                <Link to="/doctors" className="menu-item"><li>Врачи</li></Link>
                <Link to="/price" className="menu-item"><li>Цены</li></Link>
                <Link to="/contacts" className="menu-item"><li>Контакты</li></Link>

                <li>
                    <a href="tel:+79270771900">
                        <div className="call-button">
                            <img src={Call} alt=""/> Позвоните&nbsp;нам!
                        </div>
                    </a>
                </li>
            </ul>

            {/* Блок, который видим только на мобильных через CSS
          (или оставляем как есть) */}
            <div className="mobile-block">
                <a href="tel:+79270771900">
                    <div className="invisible">
                        <img src={Call} alt=""/> Позвоните&nbsp;нам!
                    </div>
                </a>

                {/* При клике открываем мобильное меню */}
                <div className="invisible-2" onClick={() => setMobileMenuOpen(true)}>
                    <img src={Menu} alt=""/>
                </div>
            </div>

            {/* Если состояние true, показываем меню */}
            {mobileMenuOpen && (
                <MenuMobile
                    onClose={() => setMobileMenuOpen(false)}
                />
            )}
        </>
    );
};

export default HeaderMenu;