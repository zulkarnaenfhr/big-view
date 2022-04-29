import React, { Component } from "react";
import "./CardBigViewLandingPageSection3.css";
import styled from "styled-components";

const CardLandingPageSection3Vector = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-top: ${(props) => props.marginTop};
    margin-left: ${(props) => props.marginLeft};
    alt: ${(props) => props.alt};
`;

class Cardbigviewlandingpagesection3 extends Component {
    render() {
        return (
            <div id="CardBigViewLandingpageSection3">
                <div className="CardBigViewLandingpageSection3-Container">
                    <CardLandingPageSection3Vector src={this.props.srcVector} width={this.props.width} height={this.props.height} marginTop={this.props.marginTop} marginLeft={this.props.marginLeft} alt={this.props.alt} />
                </div>
                <h1 className="CardBigViewLandingpageSection3-Title">
                    {this.props.title1} <br />
                    {this.props.title2}
                </h1>
                <div className="lineBottomTitle-Container">
                    <div className="lineBottomTitle"></div>
                </div>
                <p className="lineBottomDesc">{this.props.desc}</p>
            </div>
        );
    }
}

export default Cardbigviewlandingpagesection3;
