import React, { Component } from "react";
import Beforefooterbigview from "../../components/BeforeFooter/BeforeFooterBigView";
import Footerbigview from "../../components/Footer/FooterBigView";
import Navbarbigviewnormal from "../../components/Navbar/NavbarBigViewNormal";
import BigviewDocumentationSection1 from "./BigView-Documentation-Section1/BigView-Documentation-Section1";
import "./BigViewDocumentation.css";

class Bigviewdocumentation extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Documentation Big View";
    }

    render() {
        return (
            <div id="BigViewDocumentation">
                <div className="bigView-navbar-container">
                    <Navbarbigviewnormal />
                </div>{" "}
                <BigviewDocumentationSection1 />
                <Beforefooterbigview />
                <Footerbigview />
            </div>
        );
    }
}

export default Bigviewdocumentation;
