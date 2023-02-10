import React, { useState } from "react";
import '../../Styles/expe.css'

const Experience = () => {
    const [active, setActive] = useState(1);
    const toggleTab = (index) => {
        setActive(index);
    }
    return (
        <section className="expe section" id="expe">
            <h2 className="section_title">Experiences & Organization</h2>
            <span className="section_subtitle">My Journey</span>

            <div className="expe_cont cont">
                <div className="expe_tabs">
                    <div className={active === 1 ? "expe_butt expe_active butt_flex" : "expe_butt butt_flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap expe_icon"></i>Experiences
                    </div>
                    <div className={active === 2 ? "expe_butt expe_active butt_flex" : "expe_butt butt_flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-channel expe_icon"></i>Organization
                    </div>
                </div>
                <div className="expe_section">
                    <div className={active === 1 ? "expe_content expe_content-active" : "expe_content"}>
                    <div className="expe_data">
                            <div>
                                <h3 className="expe_title">Laboratory Assistant for Algorithm and Data Structure</h3>
                                <span className="expe_subtitle">Universitas Multimedia Nusantara</span>
                                <div className="expe_calendar">
                                    <i className="uil uil-calendar-alt"></i> Feb 2023 - Present
                                </div>
                            </div>
                            <div>
                                <span className="expe_rounder"></span>
                                <span className="expe_line"></span>
                            </div>
                        </div>
                        <div className="expe_data">
                            <div></div>
                            <div>
                                <span className="expe_rounder"></span>
                                <span className="expe_line"></span>
                            </div>
                            <div>
                            <h3 className="expe_title">Laboratory Assistant for Introduction to Internet Technology</h3>
                                <span className="expe_subtitle">Universitas Multimedia Nusantara</span>
                                <div className="expe_calendar">
                                    <i className="uil uil-calendar-alt"></i> Feb 2022 - Present
                                </div>
                            </div>
                        </div>
                        <div className="expe_data">
                            <div>
                            <h3 className="expe_title">Laboratory Assistant for Introduction to Multimedia Technology</h3>
                                <span className="expe_subtitle">Universitas Multimedia Nusantara</span>
                                <div className="expe_calendar">
                                    <i className="uil uil-calendar-alt"></i> Feb 2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="expe_rounder"></span>
                                <span className="expe_line"></span>
                            </div>
                        </div>
                        <div className="expe_data">
                            <div>
                                <h3 className="expe_title">Freelance Web Developer</h3>
                                <span className="expe_subtitle">Alonedry</span>
                                <div className="expe_calendar">
                                    <i className="uil uil-calendar-alt"></i> Jan 2023 - Feb 2023
                                </div>
                            </div>
                            <div>
                                <span className="expe_rounder"></span>
                                <span className="expe_line"></span>
                            </div>
                        </div>
                        <div className="expe_data">
                            <div></div>
                            <div>
                                <span className="expe_rounder"></span>
                                <span className="expe_line"></span>
                            </div>
                            <div>
                                <h3 className="expe_title">Campus Brand Ambassador</h3>
                                <span className="expe_subtitle">Red Hat Indonesia</span>
                                <div className="expe_calendar">
                                    <i className="uil uil-calendar-alt"></i> May 2022 - Present
                                </div>
                            </div>
                        </div>
                        <div className="expe_data">
                            <div>
                                <h3 className="expe_title">Freelance Web Developer</h3>
                                <span className="expe_subtitle">Pomelip</span>
                                <div className="expe_calendar">
                                    <i className="uil uil-calendar-alt"></i> May 2022 - June 2022
                                </div>
                            </div>
                            <div>
                                <span className="expe_rounder"></span>
                                <span className="expe_line"></span>
                            </div>
                        </div>
                    </div>
                    <div className={active === 2 ? "expe_content expe_content-active" : "expe_content"}>
                        <div className="expe_data">
                            <div>
                                <h3 className="expe_title">President</h3>
                                <span className="expe_subtitle">Association of Computer Engineering Student UMN Generation XIII</span>
                                <div className="expe_calendar">
                                    <i className="uil uil-calendar-alt"></i> Dec 2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="expe_rounder"></span>
                                <span className="expe_line"></span>
                            </div>
                        </div>
                        <div className="expe_data">
                            <div></div>
                            <div>
                                <span className="expe_rounder"></span>
                                <span className="expe_line"></span>
                            </div>
                            <div>
                                <h3 className="expe_title">Secretary and Treasurer</h3>
                                <span className="expe_subtitle">ACES League</span>
                                <div className="expe_calendar">
                                    <i className="uil uil-calendar-alt"></i> Nov 2022 - Dec 2023
                                </div>
                            </div>
                        </div>
                        <div className="expe_data">
                            <div>
                                <h3 className="expe_title">Chief Committee</h3>
                                <span className="expe_subtitle">Introduction to Computer Engineering Study Program 2022</span>
                                <div className="expe_calendar">
                                    <i className="uil uil-calendar-alt"></i> Apr 2022 - Aug 2022
                                </div>
                            </div>
                            <div>
                                <span className="expe_rounder"></span>
                                <span className="expe_line"></span>
                            </div>
                        </div>
                        <div className="expe_data">
                            <div></div>
                            <div>
                                <span className="expe_rounder"></span>
                                <span className="expe_line"></span>
                            </div>
                            <div>
                                <h3 className="expe_title">Academic Coordinator</h3>
                                <span className="expe_subtitle">Association of Computer Engineering Student UMN Generation XII</span>
                                <div className="expe_calendar">
                                    <i className="uil uil-calendar-alt"></i> Dec 2021 - Dec 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience