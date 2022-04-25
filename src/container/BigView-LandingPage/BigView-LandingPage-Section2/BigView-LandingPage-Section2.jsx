import React, { Component } from "react";
import "./BigView-LandingPage-Section2.css";

class BigviewLandingpageSection2 extends Component {
    render() {
        return (
            <div id="BigViewLandingPage-Section2">
                <h1 className="BigViewLandingPage-Section2-Title" data-aos="fade-up" data-aos-delay="0">
                    Many <span>big</span> business companies growing with <span>Big View</span>
                </h1>
                <div className="BigViewLandingPage-Section2-Logo-Container" data-aos="fade-up" data-aos-delay="0">
                    <img className="BigViewLandingPage-Section2-Logo-BUMN" src={require("../../../src/Big-View/BigView-LandingPage/Section2-Logo-BUMN.png")} alt="" />
                    <img className="BigViewLandingPage-Section2-Logo-Telkom" src={require("../../../src/Big-View/BigView-LandingPage/Section2-Logo-Telkom.png")} alt="" />
                    <img className="BigViewLandingPage-Section2-Logo-Wikimedia" src={require("../../../src/Big-View/BigView-LandingPage/Section2-Logo-Wikimedia.png")} alt="" />
                    <img className="BigViewLandingPage-Section2-Logo-Infomedia" src={require("../../../src/Big-View/BigView-LandingPage/Section2-Logo-Infomedia.png")} alt="" />
                </div>
            </div>
        );
    }
}

export default BigviewLandingpageSection2;
