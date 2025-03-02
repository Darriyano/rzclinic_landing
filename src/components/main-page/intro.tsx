import MainImage from "../../vectors/main-image.png"
import "../../styles/main-page-intro.css"
import {useNavigate} from "react-router-dom";

export const Intro = () => {
    const navigate = useNavigate();

    return (<>
        <div className="intro bg-img">
            <div className="intro-text-wrapper">
                <div className="gaps">
                    <h1 className="main-text">Мы создаем улыбки, которые меняют жизни людей!</h1>
                    <div className="secondary-text"> Это реальность!</div>
                </div>
                <button className="intro-button" onClick={() => navigate("/form")}>
                    Записаться на&nbsp;прием
                </button>
            </div>
            <div className="main-image-frame"><img src={MainImage} alt=""/></div>
        </div>
    </>)
}
