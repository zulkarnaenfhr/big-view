import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BigView-LandingPage-Section1.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';


class BigviewLandingpageSection1 extends Component {
    render() {
        return (
            <div id="BigViewLandingPage-Section1">
                <div className="BigViewLandingPage-Section1-Parent-Container">
                    <div className="BigViewLandingPage-Background-Container">
                        <LazyLoadImage className="BigViewLandingPage-Section1-Background1" data-aos="fade-right" data-aos-offset="200" data-aos-delay="200" src={require("../../../src/Big-View/BigView-LandingPage/Background Section 1.webp")} alt="" threshold={100} />
                        <LazyLoadImage className="BigViewLandingPage-Section1-Background2" data-aos="fade-left" data-aos-offset="200" data-aos-delay="300" src={require("../../../src/Big-View/BigView-LandingPage/Background2 Section 1.webp")} alt="" threshold={100} />
                    </div>
                    <div className="BigViewLandingPage-Content-Container">
                        <h1 className="BigViewLandingPage-Section1-Title" data-aos="fade-down-right" data-aos-offset="200" data-aos-delay="300">
                            Data <br /> di Dalam <br /> Genggamanmu
                        </h1>
                        <h3 className="BigViewLandingPage-Section1-Desc" data-aos="fade-right" data-aos-offset="200" data-aos-delay="400">
                            Lörem ipsum smartplåster plasm köttskatt i bilsurfa.
                        </h3>
                        <Link
                            className="BigViewLandingPage-Section1-Button-Container"
                            to={{
                                pathname: `/big-view/login`,
                            }}
                        >
                            <button data-aos="fade-up-right" data-aos-delay="500" className="BigViewLandingPage-Section1-Button">
                                Free Trial
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default BigviewLandingpageSection1;
