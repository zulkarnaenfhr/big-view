import React, { Component } from "react";
import Beforefooterbigview from "../../components/BeforeFooter/BeforeFooterBigView";
import Footerbigview from "../../components/Footer/FooterBigView";
import Navbarbigviewnormal from "../../components/Navbar/NavbarBigViewNormal";
import BigviewBlogSection1 from "./BigView-Blog-Section1/BigView-Blog-Section1";
import "./BigViewBlog.css";

class Bigviewblog extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Blog Big View";
    }
    render() {
        return (
            <div id="BigViewBlog">
                <div className="bigView-navbar-container">
                    <Navbarbigviewnormal />
                </div>{" "}
                <BigviewBlogSection1 />
                <Beforefooterbigview />
                <Footerbigview />
            </div>
        );
    }
}

export default Bigviewblog;
