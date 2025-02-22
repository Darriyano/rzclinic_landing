import Header from "../components/header";
import {Footer} from "../components/footer";
import "../styles/contacts-page.css";
import Call from "../vectors/call.svg";
import Mail from "../vectors/mail.svg";
import Alias from "../vectors/insta.svg";
import Pin from "../vectors/pin.svg";
import YandexMap from "../components/YandexMap";
import {useEffect} from "react";
import {MobileButtonBack} from "../components/mobile-button-back";

export const Contactspage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутка наверх
    }, []);

    return (
        <>
            <Header/>
            <MobileButtonBack/>

            <div className="bg-img">
                <div className="contacts-intro-screen">
                    <div className="textframe">
                        Контакты
                    </div>

                    <div className="secondary">
                        Задайте вопрос или запишитесь на прием по телефону, через социальные сети (WhatsApp/Telegram)
                        или по почте
                    </div>
                </div>

                <div className="contacts-next">
                    <div className="contacts-text-block">
                        <ul>
                            <li className="contacts-list">
                                <div>
                                    <img src={Call} alt=""/> Телефон/WhatsApp/Telegram:
                                </div>
                                <p>
                                    <a href="tel:+79270771900">+7 (927) 077-19-00</a> {/* Ссылка для телефона */}
                                </p>
                            </li>
                            <li className="contacts-list">
                                <div>
                                    <img src={Mail} alt=""/> Mail:
                                </div>
                                <p>
                                    <a href="mailto:r.z.clinic@mail.ru">r.z.clinic@mail.ru</a> {/* Ссылка для почты */}
                                </p>
                            </li>
                            <li className="contacts-list">
                                <div>
                                    <img src={Alias} alt=""/> Instagram: <span>(деятельность организации запрещена на территории РФ)</span>
                                </div>
                                <p>
                                    <a href="https://instagram.com/rz_clinic30" target="_blank"
                                       rel="noopener noreferrer">@rz_clinic30</a> {/* Ссылка на Instagram */}
                                </p>
                            </li>
                            <li className="contacts-list">
                                <div>
                                    <img src={Pin} alt=""/> Адрес:
                                </div>
                                <p>г. Астрахань, Улица Савушкина, 27</p>
                            </li>
                        </ul>
                    </div>

                    <YandexMap/>
                </div>
            </div>
            <Footer/>
        </>
    );
}
