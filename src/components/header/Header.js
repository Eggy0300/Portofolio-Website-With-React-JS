import React, { useState }  from "react";
import "./header.css"

const Header = () => {
    const[Toggle, showMenu] = useState(false);
    return (
        <header className="header">
            <nav className="nav cont">
                <a href="index.html" className="nav_logo">Eggy</a>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_li grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link active">
                                <i className="uil uil-home nav_icon"></i>Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <i className="uil uil-user nav_icon"></i>About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skill" className="nav_link">
                                <i className="uil uil-book-reader nav_icon"></i><p className="MobHidden">Skills & Projects</p><p className="PCHidden">Skills</p>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#expe" className="nav_link">
                                <i className="uil uil-channel nav_icon"></i><p className="MobHidden">Experiences & Organization</p><p className="PCHidden">Exp & Org</p>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <i className="uil uil-phone-alt nav_icon"></i>Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-bars"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;