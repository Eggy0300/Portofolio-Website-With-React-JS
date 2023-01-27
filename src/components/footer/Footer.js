import React from "react";
import '../../Styles/footer.css'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="foot_cont cont">
                <h1 className="foot_title">Gregorius Agung Nugroho</h1>

                <ul className="foot_list">
                    <li>
                        <a href="#about" className="foot_link">About</a>
                    </li>
                    <li>
                        <a href="#skill" className="foot_link"><p className="MobHidden">Skills & Projects</p><p className="PCHidden">Skills</p></a>
                    </li>
                    <li>
                        <a href="#expe" className="foot_link"><p className="MobHidden">Experiences & Organization</p><p className="PCHidden">Exp & Org</p></a>
                    </li>
                    <li>
                        <a href="#contact" className="foot_link">Contact</a>
                    </li>
                </ul>

                <div className="foot_sosmed">
                    <a href="https://www.instagram.com/g_eggy/" className="foot_sosmed-link">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/gregorius-agung-nugroho-96b544223/" className="foot_sosmed-link" >
                        <i className="bx bxl-linkedin"></i>

                    </a>
                    <a href="https://discordapp.com/users/337955295995101184" className="foot_sosmed-link">
                        <i className="bx bxl-discord-alt"></i>
                    </a>
                </div>

                <span className="foot_copy">&#169; Gregorius Agung Nugroho. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer