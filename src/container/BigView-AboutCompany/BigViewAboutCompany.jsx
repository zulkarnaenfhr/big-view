import React, { Component } from "react";
import Beforefooterbigview from "../../components/BeforeFooter/BeforeFooterBigView";
import Footerbigview from "../../components/Footer/FooterBigView";
import Navbarbigviewnormal from "../../components/Navbar/NavbarBigViewNormal";
import BigviewAboutcompanySection1 from "./BigView-AboutCompany-Section1/BigView-AboutCompany-Section1";
import "./BigViewAboutCompany.css";

class Bigviewaboutcompany extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "About Company Big View";
    }
    render() {
        return (
            <div>
                <div className="bigView-navbar-container">
                    <Navbarbigviewnormal />
                </div>{" "}
                <BigviewAboutcompanySection1 />
                <Beforefooterbigview />
                <Footerbigview />
            </div>
        );
    }
}

export default Bigviewaboutcompany;
