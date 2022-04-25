import React, { Component } from "react";
import BigviewLandingpageSection1 from "./BigView-LandingPage-Section1/BigView-LandingPage-Section1";
import BigviewLandingpageSection10 from "./BigView-LandingPage-Section10/BigView-LandingPage-Section10";
import BigviewLandingpageSection2 from "./BigView-LandingPage-Section2/BigView-LandingPage-Section2";
import BigviewLandingpageSection3 from "./BigView-LandingPage-Section3/BigView-LandingPage-Section3";
import BigviewLandingpageSection4 from "./BigView-LandingPage-Section4/BigView-LandingPage-Section4";
import BigviewLandingpageSection5 from "./BigView-LandingPage-Section5/BigView-LandingPage-Section5";
import BigviewLandingpageSection6 from "./BigView-LandingPage-Section6/BigView-LandingPage-Section6";
import BigviewLandingpageSection7 from "./BigView-LandingPage-Section7/BigView-LandingPage-Section7";
import BigviewLandingpageSection8 from "./BigView-LandingPage-Section8/BigView-LandingPage-Section8";
import BigviewLandingpageSection9 from "./BigView-LandingPage-Section9/BigView-LandingPage-Section9";
import "./BigViewLandingPage.css";
import Navbarbigview from "../../components/Navbar/NavbarBigView";
import Beforefooterbigview from "../../components/BeforeFooter/BeforeFooterBigView";
import Footerbigview from "../../components/Footer/FooterBigView";

class Bigviewlandingpage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Big View Landing Page";
    }
    render() {
        return (
            <div id="bigViewLandingPage">
                <div className="bigView-navbar-container">
                    <Navbarbigview />
                </div>
                <div className="bigView-content-container">
                    <BigviewLandingpageSection1 />
                    <div className="BigView-LandingPage-Section2-Container">
                        <BigviewLandingpageSection2 />
                    </div>
                    <BigviewLandingpageSection3 />
                    <BigviewLandingpageSection4 />
                    <BigviewLandingpageSection5 />
                    <BigviewLandingpageSection6 />
                    <BigviewLandingpageSection7 />
                    <BigviewLandingpageSection8 />
                    <BigviewLandingpageSection9 />
                    <BigviewLandingpageSection10 />
                    <Beforefooterbigview />
                    <Footerbigview />
                </div>
            </div>
        );
    }
}

export default Bigviewlandingpage;
