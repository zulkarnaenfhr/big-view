import React, { Component } from "react";
import Beforefooterbigview from "../../components/BeforeFooter/BeforeFooterBigView";
import Footerbigview from "../../components/Footer/FooterBigView";
import Navbarbigviewnormal from "../../components/Navbar/NavbarBigViewNormal";
import BigviewSupportSection1 from "./BigView-Support-Section1/BigView-Support-Section1";
import "./BigViewSupport.css";

class Bigviewsupport extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Support Big View";
    }
    render() {
        return (
            <div>
                <div className="bigView-navbar-container">
                    <Navbarbigviewnormal />
                </div>{" "}
                <BigviewSupportSection1 />
                <Beforefooterbigview />
                <Footerbigview />
            </div>
        );
    }
}

export default Bigviewsupport;
