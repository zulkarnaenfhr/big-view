import React, { Component } from "react";
import { Route, Routes } from "react-router";
import Bigviewlandingpage from "./container/BigView-LandingPage/BigViewLandingPage";
import "./style.css";

class BigviewRouter extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/big-view/" exact element={<Bigviewlandingpage />} />
                </Routes>
            </div>
        );
    }
}

export default BigviewRouter;
