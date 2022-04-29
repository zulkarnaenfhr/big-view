import React, { Component } from "react";
import "./NavbarBigView.css";
import { Link } from "react-router-dom";

class Navbarbigviewnormal extends Component {
    render() {
        return (
            <nav id={"navbarBigView"} className="navbar navbar-expand-lg navbar-light" data-aos="fade-in" data-aos-offset="200" data-aos-delay="300">
                <div className="container-fluid">
                    <Link
                        className="bigViewNavbarLogo-container"
                        to={{
                            pathname: "/big-view",
                        }}
                    >
                        <img className="bigViewNavbarLogo" src={require("../../src/Big-View/BigViewLogo.webp")} alt="" />{" "}
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav bigViewNavbarMenu-container">
                            <li className="nav-item bigViewNavbarMenuAboutUs">
                                <Link
                                    className={"bigViewNavbarMenu"}
                                    to={{
                                        pathname: `/big-view/aboutus`,
                                    }}
                                >
                                    <p>About Us</p>
                                </Link>
                            </li>
                            <li className="nav-item bigViewNavbarMenuPartnership">
                                <Link
                                    className={"bigViewNavbarMenu"}
                                    to={{
                                        pathname: `/big-view/partnership`,
                                    }}
                                >
                                    <p>Partnership</p>
                                </Link>
                            </li>
                            <li className="nav-item dropdown bigViewMenuDropdown bigViewMenuResources">
                                <a className={"dropdown-toggle bigViewNavbarMenu"} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </a>
                                <ul className="dropdown-menu bigViewNavbarDropdownResources-container" aria-labelledby="navbarDropdown">
                                    <div>
                                        <div className="bigViewDropdown-menu-Resources-Container">
                                            <Link
                                                className="bigViewDropdown-menu-Resources"
                                                to={{
                                                    pathname: `/big-view/documentation`,
                                                }}
                                            >
                                                <p>Documentation</p>
                                            </Link>
                                        </div>
                                        <div className="bigViewDropdown-Menu-Resources-row2 bigViewDropdown-menu-Resources-Container">
                                            <Link
                                                className="bigViewDropdown-menu-Resources"
                                                to={{
                                                    pathname: `/big-view/FAQ`,
                                                }}
                                            >
                                                <p>FAQ</p>
                                            </Link>
                                        </div>
                                        <div className="bigViewDropdown-Menu-Resources-row2 bigViewDropdown-menu-Resources-Container">
                                            <Link
                                                className="bigViewDropdown-menu-Resources"
                                                to={{
                                                    pathname: `/big-view/support`,
                                                }}
                                            >
                                                <p>Support</p>
                                            </Link>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item dropdown bigViewMenuDropdown bigViewMenuCompany">
                                <a className={"dropdown-toggle bigViewNavbarMenu"} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </a>
                                <ul className="dropdown-menu bigViewNavbarDropdownCompany-container" aria-labelledby="navbarDropdown">
                                    <div>
                                        <div className="bigViewDropdown-menu-Company-Container">
                                            <Link
                                                className="bigViewDropdown-menu-Company"
                                                to={{
                                                    pathname: `/big-view/aboutcompany`,
                                                }}
                                            >
                                                <p>About Company</p>
                                            </Link>
                                        </div>
                                        <div className="bigViewDropdown-Menu-Company-row2 bigViewDropdown-menu-Company-Container">
                                            <Link
                                                className="bigViewDropdown-menu-Company"
                                                to={{
                                                    pathname: `/big-view/blog`,
                                                }}
                                            >
                                                <p>Blog</p>
                                            </Link>
                                        </div>
                                        <div className="bigViewDropdown-Menu-Company-row2 bigViewDropdown-menu-Company-Container">
                                            <Link
                                                className="bigViewDropdown-menu-Company"
                                                to={{
                                                    pathname: `/big-view/press`,
                                                }}
                                            >
                                                <p>Press</p>
                                            </Link>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <div className="bigViewButton-Container">
                                <Link
                                    className="bigViewButtonContactUs-container"
                                    to={{
                                        pathname: `/big-view/contactus`,
                                    }}
                                >
                                    <button className="bigViewButtonNavbar bigViewButtonContactUs">CONTACT US</button>
                                </Link>
                                <Link
                                    className="bigViewButtonFreeTrial-container"
                                    to={{
                                        pathname: `/big-view/login`,
                                    }}
                                >
                                    <button className="bigViewButtonNavbar bigViewButtonFreeTrial">FREE TRIAL</button>
                                </Link>
                                <Link
                                    className="bigViewButtonDemoApps-container"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <button className="bigViewButtonNavbar bigViewButtonDemoApps">DEMO APPS</button>
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbarbigviewnormal;
