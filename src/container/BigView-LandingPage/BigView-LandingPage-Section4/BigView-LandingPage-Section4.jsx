import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BigView-LandingPage-Section4.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';


class BigviewLandingpageSection4 extends Component {
    render() {
        return (
            <div id="BigViewLandingPage-Section4">
                <div className="BigViewLandingPage-Section4-Background-Container" data-aos="fade-right" data-aos-delay="0">
                    <LazyLoadImage className="BigViewLandingPage-Section4-Background" src={require("../../../src/Big-View/BigView-LandingPage/Section4-Background.webp")} alt="" />
                </div>
                <div className="BigViewLandingPage-Section4-Text-Container">
                    <h1 className="BigViewLandingPage-Section4-Title" data-aos="fade-left" data-aos-delay="100">
                        Let’s get to know about us
                    </h1>
                    <p className="BigViewLandingPage-Section4-Desc" data-aos="fade-left" data-aos-delay="100">
                        Big View adalah sebuah sistem yang berfungsi untuk meng-Integrasikan Data dari berbagai aplikasi vertikal ke dalam sebuah platform horisontal sehingga seluruh data tersebut terintegrasi dalam satu database menuju
                        terwujudnya SATU DATA dan menjadi cikal bakal BIG DATA
                    </p>
                    <Link
                        className="BigViewLandingPage-Section4-Button-Container"
                        to={{
                            pathname: `/big-view/aboutus`,
                        }}
                    >
                        <button data-aos="fade-left" data-aos-delay="0" className="BigViewLandingPage-Section4-Button">
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default BigviewLandingpageSection4;
