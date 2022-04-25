import React, { Component } from "react";
import "./BeforeFooterBigView.css";

class Beforefooterbigview extends Component {
    render() {
        return (
            <div id="BeforeFooterBigView">
                <img className="BeforeFooterBigView-SPL-Logo" data-aos="fade-up" data-aos-offset="0" src={require("../../../src/Big-View/BigViewLogo.png")} alt="Logo-Navbar" border="0"></img>
                <div className="row BeforeFooterBigView-Content-Container">
                    <div className="col-4 BeforeFooterBigView-Content-Left">
                        <div>
                            <p className="BeforeFooterBigView-SPL-ColLeft-Row1" data-aos="fade-up" data-aos-offset="0">
                                Telkom Direktorat Digital Bussiness Bandung
                            </p>
                            <p className="BeforeFooterBigView-SPL-ColLeft-Row2" data-aos="fade-up" data-aos-offset="0">
                                Jl. Gegerkalong Hilir no. 47, Sukasari, Kota <br /> Bandung, Jawa Barat 40152
                            </p>
                            <p className="BeforeFooterBigView-SPL-ColLeft-Row3" data-aos="fade-up" data-aos-offset="0">
                                (022) 4571261
                            </p>
                            <p className="BeforeFooterBigView-SPL-ColLeft-Row4" data-aos="fade-up" data-aos-offset="0">
                                admin@SPL.id
                            </p>
                        </div>
                    </div>
                    <div className="col-4 BeforeFooterBigView-Content-Mid">
                        <div>
                            <p className="BeforeFooterBigView-SPL-ColMid-Row1" data-aos="fade-up" data-aos-offset="0">
                                Ikuti Social Media Kami <br />
                                <i className="fa-brands fa-linkedin"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-facebook-square"></i>
                            </p>
                            <p className="BeforeFooterBigView-SPL-ColMid-Row2" data-aos="fade-up" data-aos-offset="0">
                                id.smartplatform{" "}
                            </p>
                            <p className="BeforeFooterBigView-SPL-ColMid-Row3" data-aos="fade-up" data-aos-offset="0">
                                Contact Integrated Dashboard Smart Governments
                            </p>
                        </div>
                    </div>
                    <img data-aos="fade-up" data-aos-offset="0" className="BeforeFooterBigView-SPL-RightMid" src={require("../../../src/Big-View/BigViewLogo Right.png")} alt="" />
                </div>
            </div>
        );
    }
}

export default Beforefooterbigview;
