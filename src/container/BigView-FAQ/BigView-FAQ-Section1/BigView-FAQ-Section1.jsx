import React, { Component } from "react";
import "./BigView-FAQ-Section1.css";

class BigviewFaqSection1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            faq1: false,
            faq2: false,
            faq3: false,
            faq4: false,
        };
    }
    handleFAQClick = (e) => {
        if (e.target.innerText === "Apa Itu Big View") {
            this.setState({
                faq1: !this.state.faq1,
            });
        } else if (e.target.innerText === "Apa Saja Fiturnya") {
            this.setState({
                faq2: !this.state.faq2,
            });
        } else if (e.target.innerText === "Mengapa Harus Menggunakan Produk Ini") {
            this.setState({
                faq3: !this.state.faq3,
            });
        } else if (e.target.innerText === "Apa Yang Menjadi Kelebihan Produk Telkom") {
            this.setState({
                faq4: !this.state.faq4,
            });
        }
    };
    render() {
        return (
            <div id="BigViewFAQ-Section1">
                <div>
                    <h1 className="BigViewFAQ-Section1-Title" data-aos="fade-up" data-aos-delay="0">
                        Frequently Asked Question (FAQ)
                    </h1>
                </div>
                <div className="BigViewFAQ-Section1-Content-Container">
                    <div className="row" data-aos="fade-right" data-aos-delay="100">
                        <div className="BigView-FAQ-Section1-Collapse-Container">
                            <button onClick={this.handleFAQClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1" name="faq1">
                                <div className="row">
                                    <div className="col-11">Apa Itu Big View</div>
                                    <div className="col-1">
                                        <img className={this.state.faq1 === false ? "BigView-FAQ-Section1-VectorSilang" : "BigView-FAQ-Section1-VectorSilangRotate"} src={require("../../../src/Big-View/Vector Silang.png")} alt="" />
                                    </div>
                                </div>{" "}
                            </button>
                            <div className="collapse divCollapse" id="collapseExample1">
                                <div className="divCollapse-Container">
                                    <p>
                                        Big View adalah sebuah sistem yang berfungsi untuk meng-Integrasikan Data dari berbagai aplikasi vertikal ke dalam sebuah platform horisontal sehingga seluruh data tersebut terintegrasi dalam satu
                                        database menuju terwujudnya SATU DATA dan menjadi cikal bakal <span>BIG DATA</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        className="row"
                        style={{
                            marginTop: "15px",
                        }}
                    >
                        <div className="BigView-FAQ-Section1-Collapse-Container">
                            <button name="faq2" onClick={this.handleFAQClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                <div className="row">
                                    <div className="col-11">Apa saja fiturnya</div>
                                    <div className="col-1">
                                        <img className={this.state.faq2 === false ? "BigView-FAQ-Section1-VectorSilang" : "BigView-FAQ-Section1-VectorSilangRotate"} src={require("../../../src/Big-View/Vector Silang.png")} alt="" />
                                    </div>
                                </div>{" "}
                            </button>
                            <div className="collapse divCollapse" id="collapseExample2">
                                <div className="divCollapse-Container">
                                    <p className="BigView-FAQ-Section1-Q2-Container">
                                        <tr className="BigView-FAQ-Section1-Q2">
                                            <td>
                                                <li> </li>
                                            </td>
                                            <td className="td2">
                                                <p>
                                                    {" "}
                                                    <span>Document Recap:</span> fitur yang digunakan untuk merangkum peraturan hukum secara menyeluruh
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="BigView-FAQ-Section1-Q2 BigView-FAQ-Section1-Q2-Row2">
                                            <td>
                                                <li> </li>
                                            </td>
                                            <td className="td2">
                                                <p>
                                                    {" "}
                                                    <span> Document Analytics:</span> menganalisis dokumen peraturan hukum dan membandingkannya dengan peraturan yang sudah ada
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="BigView-FAQ-Section1-Q2 BigView-FAQ-Section1-Q2-Row2">
                                            <td>
                                                <li> </li>
                                            </td>
                                            <td className="td2">
                                                <p>
                                                    {" "}
                                                    <span> Document Setting & Drafting:</span> melakukan penyusunan otomatis terhadap naskah rancangan
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="BigView-FAQ-Section1-Q2 BigView-FAQ-Section1-Q2-Row2">
                                            <td>
                                                <li> </li>
                                            </td>
                                            <td className="td2">
                                                <p>
                                                    <span> Search & Reminder:</span> melakukan pencarian pada dokumen tertentu dan menampilkan dokumen yang harus diselesaikan
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="BigView-FAQ-Section1-Q2 BigView-FAQ-Section1-Q2-Row21">
                                            <td>
                                                <li> </li>
                                            </td>
                                            <td className="td21">
                                                <p>
                                                    <span> Social Media Analytics:</span> melihat sentimen dari masyarakat
                                                </p>
                                            </td>
                                        </tr>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-right"
                        data-aos-delay="300"
                        className="row"
                        style={{
                            marginTop: "15px",
                        }}
                    >
                        <div className="BigView-FAQ-Section1-Collapse-Container">
                            <button name="faq3" onClick={this.handleFAQClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                                <div className="row">
                                    <div className="col-11">Mengapa harus menggunakan produk ini</div>
                                    <div className="col-1">
                                        <img className={this.state.faq3 === false ? "BigView-FAQ-Section1-VectorSilang" : "BigView-FAQ-Section1-VectorSilangRotate"} src={require("../../../src/Big-View/Vector Silang.png")} alt="" />
                                    </div>
                                </div>{" "}
                            </button>
                            <div className="collapse divCollapse" id="collapseExample3">
                                <p className="divCollapse-Container">-</p>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-delay="400"
                        className="row"
                        style={{
                            marginTop: "15px",
                        }}
                    >
                        <div className="BigView-FAQ-Section1-Collapse-Container">
                            <button name="faq4" onClick={this.handleFAQClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                                <div className="row">
                                    <div className="col-11">apa yang menjadi kelebihan produk telkom </div>
                                    <div className="col-1">
                                        <img className={this.state.faq4 === false ? "BigView-FAQ-Section1-VectorSilang" : "BigView-FAQ-Section1-VectorSilangRotate"} src={require("../../../src/Big-View/Vector Silang.png")} alt="" />
                                    </div>
                                </div>{" "}
                            </button>
                            <div className="collapse divCollapse" id="collapseExample4">
                                <p className="divCollapse-Container">-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BigviewFaqSection1;
