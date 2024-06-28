// import React from 'react'
import "../../styles/contactForm.css"
import ContactUsSeccion from "./ContactUsSeccion"
const ContactForm = () => {
    return (

        <div className="contact-form-container">
            <div className="left">
                <ContactUsSeccion />
            </div>
            <div className="right">
                <ContactUsSeccion />
            </div>
        </div>

    )
}

export default ContactForm
