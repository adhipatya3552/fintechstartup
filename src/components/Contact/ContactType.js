import React from 'react';
import './ContactType.css';

const ContactType = ({ contactType, contactInfo1, contactInfo2 }) => {
    return (
        <>
            <div className="contactTypeContainer">
                <div className="type">
                    {contactType}
                </div>
                <div className="info">
                    {contactInfo1} <br />
                    {contactInfo2}
                </div>
            </div> 
        </>
    )
}

export default ContactType;













