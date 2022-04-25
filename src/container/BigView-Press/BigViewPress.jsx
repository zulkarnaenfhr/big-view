import React, { Component } from "react";
import Beforefooterbigview from "../../components/BeforeFooter/BeforeFooterBigView";
import Footerbigview from "../../components/Footer/FooterBigView";
import Navbarbigviewnormal from "../../components/Navbar/NavbarBigViewNormal";
import BigviewPressSection1 from "./BigView-Press-Section1/BigView-Press-Section1";
import "./BigViewPress.css";

class Bigviewpress extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Press Big View";
    }
    render() {
        return (
            <div id="BigViewPress">
                <div className="bigView-navbar-container">
                    <Navbarbigviewnormal />
                </div>{" "}
                <BigviewPressSection1 />
                <Beforefooterbigview />
                <Footerbigview />
            </div>
        );
    }
}

export default Bigviewpress;
