import React, { Component } from "react";
import "./BigView-LandingPage-Section2.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

class BigviewLandingpageSection2 extends Component {
    render() {
        return (
            <div id="BigViewLandingPage-Section2">
                <h1 className="BigViewLandingPage-Section2-Title" data-aos="fade-up" data-aos-delay="0">
                    Many <span>big</span> business companies growing with <span>Big View</span>
                </h1>
                <div className="BigViewLandingPage-Section2-Logo-Container">
    
                    <LazyLoadImage data-aos="fade-up" data-aos-delay="0" className="BigViewLandingPage-Section2-Logo-BUMN" src={require("../../../src/Big-View/BigView-LandingPage/Section2-Logo-BUMN.webp")} alt="" />
                    <LazyLoadImage data-aos="fade-up" data-aos-delay="100" className="BigViewLandingPage-Section2-Logo-Telkom" src={require("../../../src/Big-View/BigView-LandingPage/Section2-Logo-Telkom.webp")} alt="" />
                    <LazyLoadImage data-aos="fade-up" data-aos-delay="200" className="BigViewLandingPage-Section2-Logo-Wikimedia" src={require("../../../src/Big-View/BigView-LandingPage/Section2-Logo-Wikimedia.webp")} alt="" />
                    <LazyLoadImage data-aos="fade-up" data-aos-delay="300" className="BigViewLandingPage-Section2-Logo-Infomedia" src={require("../../../src/Big-View/BigView-LandingPage/Section2-Logo-Infomedia.webp")} alt="" />
                </div>
            </div>
        );
    }
}

export default BigviewLandingpageSection2;
