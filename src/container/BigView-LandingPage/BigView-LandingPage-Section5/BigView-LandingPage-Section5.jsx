import React, { Component } from "react";
import "./BigView-LandingPage-Section5.css";
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
];

const nextButton = (
    <div>
        <h1>masuk</h1>
    </div>
);

const prevButton = (
    <div>
        <h1>keluar</h1>
    </div>
);

class BigviewLandingpageSection5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
        };
    }
    render() {
        return (
            <div id="BigViewLandingPage-Section5">
                <h1 className="BigViewLandingPage-Section5-Title" data-aos="fade-up" data-aos-delay="0">
                    Introducing our special features
                </h1>
                <div className="BigViewLandingPage-Section5-Carousel-Container" data-aos="fade-up" data-aos-delay="0">
                    <Carousel
                        pagination={false}
                        enableAutoPlay
                        autoPlaySpeed={9500}
                        itemPadding={[110, 10]}
                        breakPoints={breakPoints}
                        onChange={async (currentItem, pageIndex) => {
                            this.setState({
                                position: currentItem.index + 1,
                            });
                        }}
                    >
                        <div className="BigViewLandingPage-Section5-Card-Side" style={this.state.position === 0 ? { transform: "scale(1.3)", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)" } : { transform: "scale(1)", boxShadow: "none" }}>
                            <img src={require("../../../src/Big-View/BigView-LandingPage/Section5-Info Daerah.png")} alt="" />
                            <h4>Info Daerah</h4>
                            <p>Menampilkan informasi mengenai daerah, kepala daerah, dan visi misi daerah</p>
                        </div>
                        <div className="BigViewLandingPage-Section5-Card-Side" style={this.state.position === 1 ? { transform: "scale(1.3)", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)" } : { transform: "scale(1)", boxShadow: "none" }}>
                            <img src={require("../../../src/Big-View/BigView-LandingPage/Section5-Potensi Daerah.png")} alt="" />
                            <h4>Potensi Daerah</h4>
                            <p>Menampilkan potensi daerah dari sudut pandang Ekonomi & Sumber Daya Alam (SDA), Demografi, dan dari sisi Perdagangan Antar Wilayah</p>
                        </div>
                        <div className="BigViewLandingPage-Section5-Card-Side" style={this.state.position === 2 ? { transform: "scale(1.3)", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)" } : { transform: "scale(1)", boxShadow: "none" }}>
                            <img src={require("../../../src/Big-View/BigView-LandingPage/Section5-Sektor Prioritas.png")} alt="" />
                            <h4>Sektor Prioritas</h4>
                            <p>Menampilkan informasi tentang Data Indeks Kinerja Unit untuk masing-masing sektor pilihan seperti Sektor Pendidikan, Sektor Pertanian, dan Sektor UMKM</p>
                        </div>
                        <div className="BigViewLandingPage-Section5-Card-Side" style={this.state.position === 3 ? { transform: "scale(1.3)", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)" } : { transform: "scale(1)", boxShadow: "none" }}>
                            <img src={require("../../../src/Big-View/BigView-LandingPage/Section5-Social Media Analytics.png")} alt="" />
                            <h4>Social Media Analytics</h4>
                            <p>Menampilkan informasi social media analytics (Twitter, Facebook, dan Instagram) untuk daerah berdasarkan keyword sesuai daerah tersebut</p>
                        </div>
                        <div className="BigViewLandingPage-Section5-Card-Side" style={this.state.position === 4 ? { transform: "scale(1.3)", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)" } : { transform: "scale(1)", boxShadow: "none" }}>
                            <img src={require("../../../src/Big-View/BigView-LandingPage/Section5-Digital Media Analytics.png")} alt="" />
                            <h4>Digital Media Analytics</h4>
                            <p>Menampilkan informasi digital media analytics (News, Youtube, Forums, dan Blogs) untuk daerah berdasarkan keyword sesuai daerah tersebut</p>
                        </div>
                        <div className="BigViewLandingPage-Section5-Card-Side" style={this.state.position === 5 ? { transform: "scale(1.3)", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)" } : { transform: "scale(1)", boxShadow: "none" }}>
                            <img src={require("../../../src/Big-View/BigView-LandingPage/Section5-Info Daerah.png")} alt="" />
                            <h4>Info Daerah</h4>
                            <p>Menampilkan informasi mengenai daerah, kepala daerah, dan visi misi daerah</p>
                        </div>
                        <div className="BigViewLandingPage-Section5-Card-Side" style={this.state.position === 6 ? { transform: "scale(1.3)", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)" } : { transform: "scale(1)", boxShadow: "none" }}>
                            <img src={require("../../../src/Big-View/BigView-LandingPage/Section5-Potensi Daerah.png")} alt="" />
                            <h4>Potensi Daerah</h4>
                            <p>Menampilkan potensi daerah dari sudut pandang Ekonomi & Sumber Daya Alam (SDA), Demografi, dan dari sisi Perdagangan Antar Wilayah</p>
                        </div>
                    </Carousel>
                </div>{" "}
            </div>
        );
    }
}

export default BigviewLandingpageSection5;
