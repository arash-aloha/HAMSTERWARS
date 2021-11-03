import { Link } from "react-router-dom";
import { TiThMenuOutline } from 'react-icons/ti'
import { GiShiningSword, GiSwordsEmblem } from 'react-icons/gi'
import { ImHome } from 'react-icons/im'
import { AiFillCompass } from 'react-icons/ai'
import './Nav.css'
import logo from './logo.png'
import { useState } from "react";
import Search from "../Search/Search";


const Nav = () => {

    const [isActive, setIsActive] = useState(false)

    const toggleClass = () => {
        console.log('click')
        setIsActive(!isActive)
    }

    return (
        <>
        <nav>
            <div className="navbar-container">
                <Link to="/" 
                    className="logo">
                    <img src={logo} alt="Logo" 
                    />
                </Link>
                <Link to="/"> <h1 > HAMSTER WAR </h1> </Link>
                <div className="mobile-icon" onClick={toggleClass}>
                    <TiThMenuOutline className="faBars"/>
                </div>
                
                <aside className={!isActive ? 'sidebar-container active' : 'sidebar-container'}>
                    <li className="navbar-items">
                        <Link to="/home"> home </Link>
                        <Link to="/gallery"> hamsters </Link>
                        <Link to="/cutest"> tournaments </Link>
                        <Link to="/about"> about </Link>
                    </li>
                </aside>
                {/* <Search /> */}
                <li className="navbar-items">
                    <Link to="/home"> 
                        <span><ImHome className="icons" /></span>
                        <br /> <p>home</p> </Link>

                    <Link to="/gallery"> 
                        <span><GiSwordsEmblem className="icons" /></span>
                        <br /> hamsters </Link>

                    <Link to="/cutest">
                        <span><GiShiningSword className="icons" /></span>
                        <br /> tournament </Link>
                    <Link to="/about"> 
                    <span><AiFillCompass className="icons" /></span>
                    <br /> about </Link>
                </li>
            </div>
        </nav>
        </>
    )
}

export default Nav;