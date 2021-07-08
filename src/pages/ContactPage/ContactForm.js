import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <div className="contact__form">
                
                <form action="#">
                    <div className="row">
                        <div className="col-lg-6">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="col-lg-6">
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="col-lg-12">
                            <textarea placeholder="Message" defaultValue={""} />
                            <button type="submit" className="site-btn">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;