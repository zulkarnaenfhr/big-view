import React, { Component } from "react";
import Beforefooterbigview from "../../components/BeforeFooter/BeforeFooterBigView";
import Footerbigview from "../../components/Footer/FooterBigView";
import Navbarbigviewnormal from "../../components/Navbar/NavbarBigViewNormal";
import BigviewContactusSection1 from "./BigView-ContactUs-Section1/BigView-ContactUs-Section1";

class Bigviewcontactus extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Contact Big View";
    }
    render() {
        return (
            <div id="BigViewContactUs">
                <div className="bigView-navbar-container">
                    <Navbarbigviewnormal />
                </div>{" "}
                <BigviewContactusSection1 />
                <Beforefooterbigview />
                <Footerbigview />
            </div>
        );
    }
}

export default Bigviewcontactus;
