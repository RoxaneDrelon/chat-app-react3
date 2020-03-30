import React from 'react';
import "./Contact.css";

function Contact () {
    return (
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/90.jpg" />
            <div>
                <h3 className="name">Hugh Simpson</h3>
                <div className="status">
                    <div className="status-online" />
                    <p className="status-text">Online</p>
                </div>
            </div>
        </div>
    )
}