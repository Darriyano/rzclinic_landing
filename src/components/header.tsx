import Logo from "../vectors/LOGO-1.png"
import "../styles/header-menu.css"
import HeaderMenu from "./header-menu";
import {Link} from "react-router-dom";

const Header = () => {
    return (<div className="wrapper">
        <Link to="/"><img src={Logo} alt="RZClinic" className="logo-header" /></Link>
        <HeaderMenu/>
        </div>)
}

export default Header