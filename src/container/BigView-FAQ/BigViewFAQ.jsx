import React, { Component } from "react";
import Beforefooterbigview from "../../components/BeforeFooter/BeforeFooterBigView";
import Footerbigview from "../../components/Footer/FooterBigView";
import Navbarbigviewnormal from "../../components/Navbar/NavbarBigViewNormal";
import BigviewFaqSection1 from "./BigView-FAQ-Section1/BigView-FAQ-Section1";

class Bigviewfaq extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "FAQ Big View";
    }
    render() {
        return (
            <div id="BigViewFAQ">
                <div className="bigView-navbar-container">
                    <Navbarbigviewnormal />
                </div>
                <BigviewFaqSection1 />
                <Beforefooterbigview />
                <Footerbigview />
            </div>
        );
    }
}

export default Bigviewfaq;
