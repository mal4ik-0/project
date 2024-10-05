import "../../../assets/styles/_setting.scss"
import { Link, NavLink } from "react-router-dom";
import IMG from "../../../assets/images/NavbarImg/logo.png"
import { CgProfile } from "react-icons/cg";
import "./style.scss"


function Nav() {
    return (
        <nav>
            <div className="links">
                <div className="logo">
                    <NavLink to="/" activeClassName="active"><img src={IMG} alt="" /></NavLink>
                </div>
                <div className="nav-links">
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="portfolios" activeClassName="active">Portfolios</NavLink>
                    <NavLink to="community" activeClassName="active">Community</NavLink>
                    <NavLink to="aboutUs" activeClassName="active">About Us</NavLink>
                    <NavLink to="contact" activeClassName="active">Contact</NavLink>
                </div>
                <div className="auth">

                <div className="login">
                    <Link to="login">Sign In</Link>
                </div>
                <div className="register">
                    <Link to="register" >Sign Up</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav