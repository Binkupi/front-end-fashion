import React, { Component } from 'react';
import ContactText from './ContactText';
import ContactForm from './ContactForm';

class ContactSection extends Component {
    render() {
        return (
            <section className="contact spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <ContactText />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactSection;