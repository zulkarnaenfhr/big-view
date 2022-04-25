import React, { Component } from "react";
import { Route, Routes } from "react-router";
import Bigviewaboutcompany from "./container/BigView-AboutCompany/BigViewAboutCompany";
import Bigviewaboutus from "./container/BigView-AboutUs/BigViewAboutUs";
import Bigviewblog from "./container/BigView-Blog/BigViewBlog";
import Bigviewcontactus from "./container/BigView-ContactUs/BigViewContactUs";
import Bigviewdocumentation from "./container/BigView-Documentation/BigViewDocumentation";
import Bigviewfaq from "./container/BigView-FAQ/BigViewFAQ";
import Bigviewlandingpage from "./container/BigView-LandingPage/BigViewLandingPage";
import Bigviewpartnership from "./container/BigView-Partnership/BigViewPartnership";
import Bigviewpress from "./container/BigView-Press/BigViewPress";
import Bigviewsupport from "./container/BigView-Support/BigViewSupport";
import "./style.css";

class BigviewRouter extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/big-view/" exact element={<Bigviewlandingpage />} />
                    <Route path="/big-view/aboutcompany" exact element={<Bigviewaboutcompany />} />
                    <Route path="/big-view/aboutus" exact element={<Bigviewaboutus />} />
                    <Route path="/big-view/blog" exact element={<Bigviewblog />} />
                    <Route path="/big-view/contactus" exact element={<Bigviewcontactus />} />
                    <Route path="/big-view/documentation" exact element={<Bigviewdocumentation />} />
                    <Route path="/big-view/FAQ" exact element={<Bigviewfaq />} />
                    <Route path="/big-view/partnership" exact element={<Bigviewpartnership />} />
                    <Route path="/big-view/press" exact element={<Bigviewpress />} />
                    <Route path="/big-view/support" exact element={<Bigviewsupport />} />
                </Routes>
            </div>
        );
    }
}

export default BigviewRouter;
