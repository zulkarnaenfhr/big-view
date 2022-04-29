import React, { Component } from "react";
import "./BigView-LandingPage-Section8.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';


class BigviewLandingpageSection8 extends Component {
    render() {
        return (
            <div id="BigViewLandingPage-Section8">
                <h1 className="BigViewLandingPage-Section8-Title" data-aos="fade-up" data-aos-delay="0">
                    Let’s see how big view work
                </h1>
                <div className="BigViewLandingPage-Section8-Card-Container">
                    <div className="BigViewLandingPage-Section8-Card1 BigViewLandingPage-Section8-Card" data-aos="fade-right" data-aos-delay="0">
                        <div className="BigViewLandingPage-Section8-Card1-Content-Container">
                            <LazyLoadImage src={require("../../../src/Big-View/BigView-LandingPage/Section8-Card-Vector1.webp")} className="BigViewLandingPage-Section8-Card1-Vector1" alt="" />
                            <p className="BigViewLandingPage-Section8-Card-Title">Data Internal</p>
                            <p className="BigViewLandingPage-Section8-Card-Desc">(Aplikasi, Dokumen, dll)</p>
                            <div className="BigViewLandingPage-Section8-Card1-Row2">
                                <LazyLoadImage src={require("../../../src/Big-View/BigView-LandingPage/Section8-Card-Vector2.webp")} alt="" className="BigViewLandingPage-Section8-Card1-Vector2" />
                                <p className="BigViewLandingPage-Section8-Card-Title">Data External</p>
                                <p className="BigViewLandingPage-Section8-Card-Desc">(Internet, News, Media Social, dll)</p>
                            </div>
                        </div>
                        <button className="BigViewLandingPage-Section8-Card-Button">Dinas / Instansi</button>
                    </div>
                    <LazyLoadImage data-aos="fade-right" data-aos-delay="100" src={require("../../../src/Big-View/BigView Arrow.png")} className="BigViewLandingPage-Section8-Card-Arrow BigViewLandingPage-Section8-Card-Arrow1" alt="" />
                    <div data-aos="fade-right" data-aos-delay="200" className="BigViewLandingPage-Section8-Card2 BigViewLandingPage-Section8-Card">
                        <div className="BigViewLandingPage-Section8-Card2-Content-Container">
                            <LazyLoadImage src={require("../../../src/Big-View/BigView-LandingPage/Section8-Card2-Vector1.webp")} className="BigViewLandingPage-Section8-Card2-Vector1" alt="" />
                            <p className="BigViewLandingPage-Section8-Card-Title">Cloud Service</p>
                            <div className="BigViewLandingPage-Section8-Card2-Row2">
                                <LazyLoadImage src={require("../../../src/Big-View/BigView-LandingPage/Section8-Card2-Vector2.webp")} alt="" className="BigViewLandingPage-Section8-Card2-Vector2" />
                                <LazyLoadImage src={require("../../../src/Big-View/BigView Arrow.png")} className="BigViewLandingPage-Section8-Card-Arrow BigViewLandingPage-Section8-Card2-Arrow" alt="" />
                                <LazyLoadImage src={require("../../../src/Big-View/BigView-LandingPage/Section8-Card2-Vector3.webp")} className="BigViewLandingPage-Section8-Card2-Vector3" alt="" />
                            </div>
                            <div className="BigViewLandingPage-Section8-Card2-Row3">
                                <p className="BigViewLandingPage-Section8-Card-Title BigViewLandingPage-Section8-Card2-Title2">Document Management</p>
                                <p className="BigViewLandingPage-Section8-Card-Title BigViewLandingPage-Section8-Card2-Title3">Integrated Platform</p>
                            </div>
                        </div>
                        <button className="BigViewLandingPage-Section8-Card-Button">Telkom</button>
                    </div>
                    <LazyLoadImage data-aos="fade-right" data-aos-delay="300" src={require("../../../src/Big-View/BigView Arrow.png")} className="BigViewLandingPage-Section8-Card-Arrow BigViewLandingPage-Section8-Card-Arrow2" alt="" />
                    <div data-aos="fade-right" data-aos-delay="400" className="BigViewLandingPage-Section8-Card3 BigViewLandingPage-Section8-Card">
                        <div className="BigViewLandingPage-Section8-Card3-Content-Container">
                            <LazyLoadImage src={require("../../../src/Big-View/BigView-LandingPage/Section8-Card3-Vector1.webp")} alt="" className="BigViewLandingPage-Section8-Card3-Vector1" />
                            <p className="BigViewLandingPage-Section8-Card-Title BigViewLandingPage-Section8-Card3-Title">Executive Dashboard</p>
                            <LazyLoadImage src={require("../../../src/Big-View/BigView-LandingPage/Section8-Card3-Vector2.webp")} alt="" className="BigViewLandingPage-Section8-Card3-Vector2" />
                            <div className="BigViewLandingPage-Section8-Card3-Row2">
                                <p className="BigViewLandingPage-Section8-Card-Desc BigViewLandingPage-Section9-Card3-Desc1">Data Analytics</p>
                                <p className="BigViewLandingPage-Section8-Card-Desc BigViewLandingPage-Section9-Card3-Desc2">Data Kinerja</p>
                            </div>
                        </div>
                        <button className="BigViewLandingPage-Section8-Card-Button BigViewLandingPage-Section8-Car3-Button">Command Center</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BigviewLandingpageSection8;
