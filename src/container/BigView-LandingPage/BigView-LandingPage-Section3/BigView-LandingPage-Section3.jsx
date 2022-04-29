import React, { Component } from "react";
import Cardbigviewlandingpagesection3 from "../../../components/Card/CardBigViewLandingPageSection3";
import "./BigView-LandingPage-Section3.css";

class BigviewLandingpageSection3 extends Component {
    render() {
        return (
            <div id="BigViewLandingPage-Section3">
                <h1 className="BigViewLandingPage-Section3-Title" data-aos="fade-up" data-aos-delay="0">
                    Solution that we serve for you
                </h1>

                <div className="BigViewLandingPage-Section3-Card-Container" data-aos="fade-up" data-aos-delay="0">
                    <Cardbigviewlandingpagesection3
                        desc={"Informasi yang ditampilkan dapat berupa historis data atau realisasi dari sebuah program kerja"}
                        title1={"Executive"}
                        title2={"Dashboard"}
                        srcVector={require("../../../src/Big-View/BigView-LandingPage/Section3-ExecutiveDashboard.webp")}
                        width={"84px"}
                        height={"75px"}
                        marginTop={"78px"}
                        marginLeft={"122px"}
                    />
                    <Cardbigviewlandingpagesection3
                        desc={"Monitoring terhadap kinerja tiap SKPD dilakukan dengan melihat realisasipencapaian berdasarkan KPI"}
                        title1={"Monitoring"}
                        title2={"Performansi"}
                        srcVector={require("../../../src/Big-View/BigView-LandingPage/Section3-MonitoringPerformansi.webp")}
                        width={"92px"}
                        height={"64px"}
                        marginTop={"83px"}
                        marginLeft={"118px"}
                    />
                    <Cardbigviewlandingpagesection3
                        desc={"Monitoring terhadap kinerja tiap SKPD dilakukan dengan melihat realisasipencapaian berdasarkan KPI"}
                        title1={"Integrasi"}
                        title2={"Data"}
                        srcVector={require("../../../src/Big-View/BigView-LandingPage/Section3-IntegrasiData.webp")}
                        width={"84px"}
                        height={"84px"}
                        marginTop={"68px"}
                        marginLeft={"122px"}
                    />
                    <Cardbigviewlandingpagesection3
                        desc={"Database yang terintegrasi akan membentuk sebuah big data, dapat dianalisis dan memberikan insight bagi pemerintah"}
                        title1={"Big Data"}
                        title2={"Analytics"}
                        srcVector={require("../../../src/Big-View/BigView-LandingPage/Section3-BigDataAnalytic.webp")}
                        width={"100px"}
                        height={"79px"}
                        marginTop={"67px"}
                        marginLeft={"114px"}
                    />
                </div>
            </div>
        );
    }
}

export default BigviewLandingpageSection3;
