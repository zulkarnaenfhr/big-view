import React, { Component } from "react";
import Beforefooterbigview from "../../components/BeforeFooter/BeforeFooterBigView";
import Footerbigview from "../../components/Footer/FooterBigView";
import Navbarbigviewnormal from "../../components/Navbar/NavbarBigViewNormal";
import BigviewAboutusSection1 from "./BigView-AboutUs-Section1/BigView-AboutUs-Section1";
import BigviewAboutusSection2 from "./BigView-AboutUs-Section2/BigView-AboutUs-Section2";
import BigviewAboutusSection3 from "./BigView-AboutUs-Section3/BigView-AboutUs-Section3";

class Bigviewaboutus extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "About Big View";
    }
    render() {
        return (
            <div id="BigViewAboutUs">
                <div className="bigView-navbar-container">
                    <Navbarbigviewnormal />
                </div>{" "}
                <BigviewAboutusSection1 />
                <BigviewAboutusSection2 />
                <BigviewAboutusSection3 />
                <Beforefooterbigview />
                <Footerbigview />
            </div>
        );
    }
}

export default Bigviewaboutus;
