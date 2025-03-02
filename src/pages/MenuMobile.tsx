import {useNavigate} from "react-router-dom";
import "../styles/menu-mobile-styles.css"
import React from "react";

type MenuMobileProps = {
    onClose: () => void; // или более точный тип, если нужно
};

export const MenuMobile: React.FC<MenuMobileProps> = ({onClose}) => {
    const navigate = useNavigate();

    return (
        <div className="menu-mobile-wrapper">
            <button className="close-button" onClick={onClose}>
                ✕
            </button>

            <div className="menu-tabs">
                <p onClick={() => {
                    navigate("/");
                    onClose()
                }}>Главная</p>
                <p onClick={() => {
                    navigate("/offering");
                    onClose()
                }}>Услуги</p>
                <p onClick={() => {
                    navigate("/doctors");
                    onClose()
                }}>Врачи</p>
                <p onClick={() => {
                    navigate("/price");
                    onClose()
                }}>Цены</p>
                <p onClick={() => {
                    navigate("/form");
                    onClose()
                }}>Запись</p>
                <p onClick={() => {
                    navigate("/contacts");
                    onClose()
                }}>Контакты</p>

            </div>
        </div>
    );
};

