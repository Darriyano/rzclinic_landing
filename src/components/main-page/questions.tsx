import React from "react";
import "../../styles/main-mage-questions.css";
import bg_img from "../../vectors/question-mark.svg";
import {useNavigate} from "react-router-dom";
import {Contactspage} from "../../pages/contactspage";

export const Questions = () => {
    const navigate = useNavigate();

    return (
        <div className="questions-screen">
            <div className="questions-frame">
                <details className="textframe">
                    <summary className="texts-questions">Как записаться на прием?</summary>
                    <p onClick={() => {
                        navigate("/contacts")
                    }} style={{cursor: "pointer"}}>Вы можете записаться через наш сайт или по телефону в
                        разделе <b><i>контакты</i></b></p>
                </details>

                <details className="textframe">
                    <summary className="texts-questions">Хорошие ли у вас врачи?
                    </summary>
                    <p>У нас работают опытные врачи с аккредитацией и большим стажем работы!</p>
                </details>

                <details className="textframe">
                    <summary className="texts-questions">Долго ли делается процедура?</summary>
                    <p>Длительность процедуры зависит от ее сложности, в среднем от 30 минут до 2 часов</p>
                </details>

                <details className="textframe">
                    <summary className="texts-questions">Как до вас добраться?</summary>
                    <p onClick={() => {
                        navigate("/contacts")
                    }} style={{cursor: "pointer"}}>Наш точный адрес, метку на карте и способы связи вы можете уточнить в
                        разделе <b><i>контакты</i></b></p>
                </details>
            </div>

            <div className="question-texts-container">
                <div className="info">
                    <div className="main-heading">Частые вопросы</div>
                    <p className="main-secondary">А вдруг ваш вопрос уже спрашивали?</p>
                </div>
                <button className="button-answer" onClick={() => {
                    navigate("/contacts")
                }}>Моего вопроса тут нет
                </button>
            </div>
            <div className="bg-image"><img alt="" src={bg_img}/></div>
        </div>
    );
};
