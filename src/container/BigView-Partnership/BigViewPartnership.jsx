import React, { Component } from "react";
import Beforefooterbigview from "../../components/BeforeFooter/BeforeFooterBigView";
import Footerbigview from "../../components/Footer/FooterBigView";
import Navbarbigviewnormal from "../../components/Navbar/NavbarBigViewNormal";
import BigviewPartnershipSection1 from "./BigView-Partnership-Section1/BigView-Partnership-Section1";
import "./BigViewPartnership.css";

class Bigviewpartnership extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Partnership Big View";
    }
    render() {
        return (
            <div id="BigViewPartnership">
                <div className="bigView-navbar-container">
                    <Navbarbigviewnormal />
                </div>{" "}
                <BigviewPartnershipSection1 />
                <Beforefooterbigview />
                <Footerbigview />
            </div>
        );
    }
}

export default Bigviewpartnership;
