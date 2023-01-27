import React, { useState } from "react";
import "../../Styles/skill.css"
import Nav from 'react-bootstrap/Nav';
import Porto from '../../assets/porto.png';
import Alonedry from '../../assets/alonedry.png';
import Pomelip from '../../assets/pomelip.png';
import Soil from '../../assets/soil.jpeg';
import UasPem from '../../assets/uaspemweb.png';
import UtsPem from '../../assets/utspemweb.png';
import UtsPti from '../../assets/utspti.png';

const Skill = () => {
    const [id, setId] = useState(1);
    const changeID = (index) => {
        setId(parseInt(index));
    }

    const [idPro, setIdp] = useState(1);

    const changeProject = (id) => {
        setIdp(id)
    }

    const next = () => {
        setIdp(idPro+1)
    }

    const prev = () => {
        setIdp(idPro-1)
    }
    return (
        <section className="skill section" id="skill">
            <h2 className="section_title">Skills & Projects</h2>
            <span className="section_subtitle">My skills & projects</span>
            <div className="skill_cont cont grid">
                <div className="skill_content grid">
                    <Nav justify variant="tabs" onSelect={changeID} defaultActiveKey="1">
                        <Nav.Item>
                            <Nav.Link className="skill_nav"  eventKey="1">
                                <i className='bx bx-bulb skill_nav-icon'></i>
                                <h3 className="skill_nav-title">Skills</h3>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="skill_nav" eventKey="2">
                                <i className='bx bx-book-alt skill_nav-icon'></i>
                                <h3 className="skill_nav-title">Programming Languages</h3>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="skill_nav" eventKey="3">
                                <i className='bx bx-briefcase-alt skill_nav-icon' ></i>
                                <h3 className="skill_nav-title">Projects</h3>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    
                    <div className={id === 1 ? "skill_skills row mx-auto" : "skill_hidden"}>
                        <div className="col-xs-12 col-sm-12">
                            <div className="pl-lg-5 fly">
                                    <h3 className="skill_mobile">Skills</h3>
                                    <li>
                                        <strong>PHP</strong> using laravel
                                    </li>
                                    <li>
                                        <strong>Backend Development</strong> with NodeJS & ExpressJS
                                    </li>
                                    <li>
                                        <strong>Frontend Development</strong> with ReactJS & Angular
                                    </li>
                                    <li>
                                        <strong>Database Management</strong> with MySQL & PostgreSQL
                                    </li>
                                    <li>
                                        <strong>Figma</strong>
                                    </li>
                                    <li>
                                        <strong>Github</strong>
                                    </li>
                                    <li>
                                        <strong>Arduino Programming</strong>  
                                    </li>
                                    <li>
                                        Image Processing for Machine Learning with <strong>Python</strong>
                                    </li>
                                    <li>
                                        Ability using <strong>Linux</strong> as Operating System especially Red Hat Enteprise Linux
                                    </li>
                                    <li>
                                        <strong>Content Creation</strong> with Adobe
                                    </li>
                                    <li>
                                        Ability in <strong>basic electronics</strong>
                                    </li>
                                    <li>
                                        Ability using <strong>C</strong> ,<strong>Matlab</strong> ,<strong>R</strong> , and <strong>Java</strong> Language
                                    </li>
                                    <li>
                                        Ability to speak in <strong>English</strong>
                                    </li>
                            </div>
                        </div>

                    </div>

                    <div className={id === 2 ? "skill_pl row mx-auto pb-5" : "skill_hidden"}>
                        <div className="col-xs-12 col-sm-12 fly">
                            <h3 className="skill_mobile">Programing Languages</h3>
                            <div className="skill_pl-box">PHP</div>
                            <div className="skill_pl-box">Javascript</div>
                            <div className="skill_pl-box">SQL</div>
                            <div className="skill_pl-box">C</div>
                            <div className="skill_pl-box">Java</div>
                            <div className="skill_pl-box">Python</div>
                            <div className="skill_pl-box">Matlab</div>
                            <div className="skill_pl-box">R</div>
                        </div>
                    </div>

                    <div className={id === 3 ? "skill_projects" : "skill_hidden"}>
                        <div className="col-xs-12 col-sm-12">
                                <h3 className="skill_mobile">Projects</h3>
                                <div className="project_cont">
                                    <div className={idPro === 1 ? "project_tab fly" : "skill_hidden"}>
                                        <a href="https://github.com/Eggy0300/Portofolio-Website-With-React-JS">
                                            <div className="project_card">
                                                <img className="project_img" src={Porto} alt="" />
                                                <h3 className="project_card-title">Web Portofolio</h3>
                                                <span className="project_card-data">Made portofolio website with ReactJS</span>
                                            </div>
                                        </a>
                                        

                                        <a href="https://pomelip.com">
                                            <div className="project_card">
                                                <img className="project_img" src={Pomelip} alt="" />
                                                <h3 className="project_card-title">Pomelip Website</h3>
                                                <span className="project_card-data">Frontend Development Freelance for Pomelip with Laravel</span>
                                            </div>
                                        </a>
                                        
                                        <a href="https://alonedry.com">
                                            <div className="project_card">
                                                <img className="project_img" src={Alonedry} alt="" />
                                                <h3 className="project_card-title">Alonedry Website</h3>
                                                <span className="project_card-data">Frontend Development Freelance for Alonedry with ReactJS</span>
                                            </div>
                                        </a>
                                    </div>
                                    
                                    <div className={idPro === 2 ? "project_tab fly" : "skill_hidden"}>
                                        <a href="https://github.com/Eggy0300/Library-Functioning-Website-With-Laravel">
                                            <div className="project_card">
                                                <img className="project_img" src={UasPem} alt="" />
                                                <h3 className="project_card-title">Library Functioning Website With Laravel</h3>
                                                <span className="project_card-data">Made a website that can search books and write review with Laravel</span>
                                            </div>
                                        </a>

                                        <a href="https://github.com/Eggy0300/Simple-Notes-Website-With-Vanilla-PHP">
                                            <div className="project_card">
                                                <img className="project_img" src={UtsPem} alt="" />
                                                <h3 className="project_card-title">Simple Notes Website</h3>
                                                <span className="project_card-data">Build a website with vanilla PHP, that can be used to taking notes.</span>
                                            </div>
                                        </a>

                                        <a href="https://github.com/Eggy0300/Randomize-Menu-With-Javascript">
                                            <div className="project_card">
                                                <img className="project_img" src={UtsPti} alt="" />
                                                <h3 className="project_card-title">Randomize Menu With Javascript</h3>
                                                <span className="project_card-data">Made a vanilla javascript website that randomize menu for breakfast, lunch, and dinner.</span>
                                            </div>
                                        </a>
                                    </div>
                                    
                                    <div className={idPro === 3 ? "project_tab fly" : "skill_hidden"}> 
                                        <a href="https://github.com/Eggy0300/Soil-Monitoring-System-WIth-NodeMCU-ESP8266">
                                            <div className="project_card">
                                                <img className="project_img" src={Soil} alt="" />
                                                <h3 className="project_card-title">Moisture Monitoring System for Chilli Arduino Code</h3>
                                                <span className="project_card-data">Made a Moisture Monitoring System for Chilli with NodeMCU ESP8266 with Arduino IDE</span>
                                            </div>
                                        </a>

                                        <a href="https://github.com/Eggy0300/Soil-Monitoring-System-WIth-NodeMCU-ESP8266-Backend">
                                            <div className="project_card">
                                                <img className="project_img" src={Soil} alt="" />
                                                <h3 className="project_card-title">Moisture Monitoring System for Chilli Backend</h3>
                                                <span className="project_card-data">Backend for Moisture Monitoring System for Chilli dashboard</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                
                                <a href="#skill">
                                    <div className="project_tab-icon">
                                        <i className={idPro === 1 ? "" : 'bx bx-caret-left-circle'} onClick={() => prev()}></i>
                                        <i className={idPro === 1 ? "bx bxs-circle" : "bx bx-circle"} onClick={() => changeProject(1)}></i>
                                        <i className={idPro === 2 ? "bx bxs-circle" : "bx bx-circle"} onClick={() => changeProject(2)}></i>
                                        <i className={idPro === 3 ? "bx bxs-circle" : "bx bx-circle"} onClick={() => changeProject(3)}></i>
                                        <i className={idPro === 3 ? "" : 'bx bx-caret-right-circle'} onClick={() => next()}></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Skill