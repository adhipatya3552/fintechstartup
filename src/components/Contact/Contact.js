import React from 'react';
import './Contact.css';
import ContactType from './ContactType';

const Contact = () => {
    return (
        <>
            <div className="contactContainer" id="Contact">
                <span className="contactSmallTitle">
                    CONTACT
                </span>
                <div className="contactTitle">
                    Contact Us
                </div>
                <div className="row">
                    <ContactType contactType="Address" contactInfo1="A108 Adam Street," contactInfo2="New York, NY 535022" />
                    <ContactType contactType="Call Us" contactInfo1="+1 5589 55488 55" contactInfo2="+1 6678 254445 41" />
                    <ContactType contactType="Email" contactInfo1="info@example.com" contactInfo2="contact@example.com" />
                    <ContactType contactType="Open Hours" contactInfo1="Monday - Friday" contactInfo2="9:00AM - 05:00PM"/>
                </div>
            </div>
        </>
    )
}

export default Contact;










