import React, { Component } from "react";
import "./BigView-AboutUs-Section1.css";

class BigviewAboutusSection1 extends Component {
    render() {
        return (
            <div id="BigViewAboutUs-Section1">
                <div className="BigViewAboutUs-Section1-Content-Container">
                    <img data-aos="fade-up" data-aos-offset="200" data-aos-delay="0" className="BigViewAboutUs-Section1-Background" src={require("../../../src/Big-View/BigView-AboutUs/Section1-Background.png")} alt="" />
                    <h1 data-aos="fade-up" data-aos-offset="200" data-aos-delay="100" className="BigViewAboutUs-Section1-Title">
                        About Us
                    </h1>
                    <p data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" className="BigViewAboutUs-Section1-Desc1">
                        Big View adalah sebuah sistem yang berfungsi untuk meng-Integrasikan Data dari berbagai aplikasi vertikal ke dalam sebuah platform horisontal sehingga seluruh data tersebut terintegrasi dalam satu database menuju
                        terwujudnya SATU DATA dan menjadi cikal bakal <span> BIG DATA</span>
                    </p>
                    <p data-aos="fade-up" data-aos-offset="200" data-aos-delay="300" className="BigViewAboutUs-Section1-Desc2">
                        Integrasi data akan memudahkan Pemerintah dalam melakukan Monitoring Performansi dan Kinerja tiap SKPD berdasarkan parameter Indikator Kinerja Utama <span> (IKU)</span>. Performansi kinerja dan berbagai informasi
                        dapat ditampilkan dalam bentuk Executive Dashboard yang bisa ditempatkan dalam sebuah Command Center
                    </p>
                </div>
            </div>
        );
    }
}

export default BigviewAboutusSection1;
