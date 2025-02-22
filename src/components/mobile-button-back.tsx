import {useNavigate} from "react-router-dom";
import "../index.css"


export const MobileButtonBack = () => {
    const navigate = useNavigate();

    return (<div className='mobile-button-back' onClick={() => navigate(-1)}>
        ← Назад
    </div>)
}