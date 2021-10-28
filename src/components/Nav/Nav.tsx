import { Link } from "react-router-dom";
import { TiThMenuOutline } from 'react-icons/ti'
import './Nav.css'
import logo from './logo.png'


const Nav = () => {

    return (
        <>
        <nav>
            <div className="navbar-container">
                <Link to="/" 
                    className="logo">
                    <img src={logo} alt="Logo" 
                    />
                </Link>
                <div className="mobile-icon"><TiThMenuOutline className="faBars"/></div>
                <li className="navbar-items">
                    <Link to="/home"> home </Link>
                    <Link to="/gallery"> gallery </Link>
                    <Link to="/cutest"> cutest </Link>
                    <Link to="/about"> about </Link>
                </li>
            </div>
        </nav>
        </>
    )
}

export default Nav;