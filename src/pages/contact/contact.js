import React from "react";
import Overlay from "../../components/overlay/overlay.js"
import "./contact.css"

function Contact () {
    return (
        <header className="contact-background">
            <Overlay />
            <div role="main" className="container">
                <div className="jumtron text-center">
                <h1 className="jumtron-title">Contact</h1>
                </div>
                <form className="contact-me">
                    <div className="form-row">
                        <div className="form-group text-left col-md-6">
                            <label for="inputEmail4"> First Name</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="john"></input>
                        </div>
                        <div className="form-group text-left col-md-6">
                            <label for="inputPassword4">Last Name</label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="doe"></input>
                        </div>
                        <div className="form-group text-left col-md-12">
                            <label for="inputAddress">Email Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="john.doe@example.com"></input>
                        </div>
                        <div className="form-group col-md-12">
                            <label for="inputAddress">Send Us a Message</label>
                            <textarea className="form-control" rows="3" id="inputAddress" placeholder="Please write your messaage here... (200 Characters)"></textarea>
                        </div>
                        <button type="button" className="button-contact">Submit</button>
                    </div>
                </form>

            </div>

        </header>
    )
}

export default Contact;