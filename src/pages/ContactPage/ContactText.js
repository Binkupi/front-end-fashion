import React, { Component } from 'react';

class ContactText extends Component {
    render() {
        return (
            <div className="contact__text">
                <div className="section-title">
                    <span>Information</span>
                    <h2>Contact Us</h2>
                    <p>As you might expect of a company that began as a high-end interiors contractor, we pay
                    strict attention.</p>
                </div>
                <ul>
                    <li>
                        <h4>America</h4>
                        <p>195 E Parker Square Dr, Parker, CO 801 <br />+43 982-314-0958</p>
                    </li>
                    <li>
                        <h4>France</h4>
                        <p>109 Avenue Léon, 63 Clermont-Ferrand <br />+12 345-423-9893</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ContactText;