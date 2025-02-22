import React from "react";
import "../../styles/main-page-doctors.css";
import DoctorPic from "../../vectors/doctor-image.png"
import {useNavigate} from "react-router-dom";

export const Doctors = () => {
    const navigate = useNavigate();

    return (
        <div className="screen-doctors">
            <div className="green-circle"></div>

            <div className="frame">

                <div className="texts">
                    <p className="doctor-main-text">
                        <span>Наши</span>
                        <span className="text-wrapper-2"> врачи</span>
                    </p>

                    <p className="text-wrapper-3">
                        Наши врачи — это команда высококвалифицированных специалистов, преданных своему делу. Каждый из
                        них имеет богатый опыт, профессиональное образование и стремится к постоянному развитию.
                        Доверьте свое здоровье нашим экспертам!
                    </p>
                </div>

                <div className="button-container">
                    <button className="button-all" onClick={() => {
                        navigate("/doctors")
                    }}>Подробнее о врачах
                    </button>
                </div>
            </div>
            <div className="div-wrapper">
                <img src={DoctorPic} alt="" className="doctor-image"/>
            </div>
        </div>
    );
};
