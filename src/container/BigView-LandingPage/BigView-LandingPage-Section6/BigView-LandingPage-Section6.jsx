import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BigView-LandingPage-Section6.css";

class BigviewLandingpageSection6 extends Component {
    render() {
        return (
            <div id="BigViewLandingPage-Section6">
                <h1 className="BigViewLandingPage-Section6-Title" data-aos="fade-up" data-aos-delay="0">
                    Lets try our demo apps
                </h1>
                <div className="BigViewLandingPage-Section6-Desc-Container" data-aos="fade-up" data-aos-delay="0">
                    <p className="BigViewLandingPage-Section6-Desc">Discover how our products are implemented in real world situations and used in various use case through our interactive demo app.</p>
                </div>
                <div className="BigViewLandingPage-Section6-Button-Container">
                    <Link
                        to={{
                            pathname: `/big-view/login`,
                        }}
                    >
                        <button data-aos="fade-up" data-aos-delay="0" className="BigViewLandingPage-Section6-Button">
                            Try Now
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default BigviewLandingpageSection6;
