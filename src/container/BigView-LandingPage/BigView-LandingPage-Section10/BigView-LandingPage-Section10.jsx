import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BigView-LandingPage-Section10.css";

class BigviewLandingpageSection10 extends Component {
    render() {
        return (
            <div id="BigViewLandingPage-Section10">
                <h1 className="BigViewLandingPage-Section10-Title" data-aos="fade-up" data-aos-delay="0">
                    Begin your journey and grow big with us
                </h1>
                <div className="BigViewLandingPage-Section10-Button-Container" data-aos="fade-up" data-aos-delay="0">
                    <Link
                        to={{
                            pathname: `big-view/login`,
                        }}
                    >
                        <button className="BigViewLandingPage-Section10-Button-FreeTrial">Free Trial</button>
                    </Link>
                    <Link
                        to={{
                            pathname: `/big-view/contactus`,
                        }}
                    >
                        <button className="BigViewLandingPage-Section10-Button-ContactUs">Contact Us</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default BigviewLandingpageSection10;
