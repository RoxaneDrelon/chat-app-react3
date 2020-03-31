import React from 'react';
import "./Contact.css";
import PropTypes from 'prop-types';

function Contact (props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt="Avatar" />
            <div>
                <h3 className="name">{props.name}</h3>
                <div className="status">
                    <div className={props.isOnline ? "status-online" : "status-offline"} />
                    <p className="status-text">{props.online}</p>
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    online: PropTypes.string.isRequired
  };

export default Contact;