import React from "react";
import "../../Styles/contact.css"

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section_title">Get In Touch</h2>
            <span className="section_subtitle">Contact Me</span>

            <div className="contact_cont cont grid">
                <div className="contact_content">
                    <h3 className="contact_title">Talk to me</h3>
                    <div className="contact_info">
                        <div className="contact_card">
                            <i className="bx bx-mail-send contact_card-icon"></i>

                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">gregorius.nugroho@student.umn.ac.id</span>

                            <a href="mailto:gregorius.nugroho@student.umn.ac.id" className="contact_butt">
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact_butt-icon"></i>
                            </a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bxl-whatsapp contact_card-icon"></i>

                            <h3 className="contact_card-title">Whatsapp</h3>
                            <span className="contact_card-data">085219574988</span>

                            <a href="https://wa.me/085219574988" className="contact_butt">
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact_butt-icon"></i>
                            </a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bxl-instagram contact_card-icon"></i>

                            <h3 className="contact_card-title">Instagram</h3>
                            <span className="contact_card-data">g_eggy</span>

                            <a href="https://www.instagram.com/g_eggy/" className="contact_butt">
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact_butt-icon"></i>
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )   
}

export default Contact