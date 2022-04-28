import React, { Component } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./BigView-ContactUs-Section1.css";
import { Link } from "react-router-dom";

class BigviewContactusSection1 extends Component {
    render() {
        return (
            <div id="BigView-ContactUs-Section1">
                <div className="row BigView-ContactUs-Section1-Content-Container">
                    <div className="col-5" data-aos="fade-up" data-aos-offset="200" data-aos-delay="300">
                        <h1 className="BigView-ContactUs-Section1-Title">Contact our team</h1>
                        <p className="BigView-ContactUs-Section1-Desc">We are happy to answer your question</p>
                    </div>
                    <div className="col-7" data-aos="fade-up" data-aos-offset="200" data-aos-delay="500">
                        <form action="mailto:someone@example.com" method="post" encType="text/plain" className="BigView-ContactUs-Section1-Form-Container">
                            <label htmlFor="">Name</label>
                            <br />
                            <input className="container" placeholder="Your name" type="text" name="na1me" />
                            <br />
                            <label htmlFor="">Email</label>
                            <br />
                            <input className="container" placeholder="youremail@example.com" type="text" name="Email" />
                            <br />
                            <label htmlFor="">Phone number</label>
                            <br />
                            <input className="container" placeholder="08123567841" type="text" name="Phone Number" />
                            <br />
                            <label htmlFor="">Message</label>
                            <br />
                            <textarea className="container" placeholder="Message" type="text" name="Phone Number" cols="30" rows="10" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>{" "}
                </div>
            </div>
        );
    }
}

export default BigviewContactusSection1;
