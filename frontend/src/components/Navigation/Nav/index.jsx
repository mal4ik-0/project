import "../../../assets/styles/_setting.scss"
import { Link, NavLink } from "react-router-dom";
import IMG from "../../../assets/images/NavbarImg/logo.png"
import "./style.scss"


function Nav() {
    return (
        <nav>
            <div className="links">
                <NavLink to="/" activeClassName="active"><img src={IMG} alt="" /></NavLink>
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="portfolios" activeClassName="active">Portfolios</NavLink>
                <NavLink to="community" activeClassName="active">Community</NavLink>
                <NavLink to="aboutUs" activeClassName="active">About Us</NavLink>
                <NavLink to="contactUs" activeClassName="active">Contact Us</NavLink>

                <div className="buttons">
                    <button className="signup">Sign in</button>
                    <button className="login">Sign up</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav