import React, { Component } from "react";
import "./BigView-LandingPage-Section9.css";

class BigviewLandingpageSection9 extends Component {
    render() {
        return (
            <div id="BigViewLandingPage-Section9">
                <h1 className="BigViewLandingPage-Section9-Title" data-aos="fade-up" data-aos-delay="0">
                    Take a look <br /> on what we have achieved
                </h1>
                <div className="BigViewLandingPage-Section9-Vector-Container">
                    <div className="BigViewLandingPage-Section9-Row1-Parent-Container">
                        <div className="BigViewLandingPage-Section9-Content-row1-Container" data-aos="fade-up" data-aos-delay="0">
                            <div className="BigViewLandingPage-Section9-Content1-Container">
                                <img src={require("../../../src/Big-View/BigView-LandingPage/Section9-Vector1.png")} className="BigViewLandingPage-Section9-Content1-Vector" alt="" />
                                <div className="BigViewLandingPage-Section9-Content-Desc-Container  BigViewLandingPage-Section9-Content1-Desc-Container">Trusted as Satu Data Indonesia Visualization Platform</div>
                            </div>
                            <div className="BigViewLandingPage-Section9-Content2-Container">
                                <img src={require("../../../src/Big-View/BigView-LandingPage/Section9-Vector2.png")} className="BigViewLandingPage-Section9-Content1-Vector" alt="" />
                                <div className="BigViewLandingPage-Section9-Content-Desc-Container  BigViewLandingPage-Section9-Content1-Desc-Container">More than 5 customer and 20 trial entire Nation</div>
                            </div>
                        </div>
                    </div>
                    <div className="BigViewLandingPage-Section9-Content-row2-Container" data-aos="fade-up" data-aos-delay="0">
                        <div className="BigViewLandingPage-Section9-Content-Container">
                            <img src={require("../../../src/Big-View/BigView-LandingPage/Section9-Vector3.png")} className="BigViewLandingPage-Section9-Content1-Vector" alt="" />
                            <div className="BigViewLandingPage-Section9-Content-Desc-Container  BigViewLandingPage-Section9-Content1-Desc-Container">The one and only integrated Existing-API platform bundle</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BigviewLandingpageSection9;
