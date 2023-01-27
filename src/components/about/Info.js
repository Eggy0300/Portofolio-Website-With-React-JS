import React from "react";

const Info = () => {
    return (
        <div className="about_info grid">
            <div className="about_box">
                <i className='bx bx-brain about_icon'></i>
                <h3 className="about_title">Experts</h3>
                <span className="about_subt">PHP, Javascript, SQL</span>
            </div>
            <div className="about_box">
                <i className='bx bx-captions about_icon'></i>
                <h3 className="about_title">Language</h3>
                <span className="about_subt">English & Indonesian</span>
            </div>
            <div className="about_box">
                <i className='bx bx-support about_icon'></i>
                <h3 className="about_title">Support</h3>
                <span className="about_subt">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info