import React, { Component } from "react";
import SmartLogo from "../../assets/images/smarter_logo.png";
import "./MainHeader.css";
import HeaderLink from "./HeaderLink/HeaderLink";
import { NavLink, withRouter } from "react-router-dom";

class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHome: true
        };
    }

    updateHeader = () => {
        const isHome = this.props.location.pathname === "/";
        if (isHome && !this.state.isHome) {
            this.setState({ isHome: true });
        } else if (!isHome && this.state.isHome) {
            this.setState({ isHome: false });
        }
    };
    componentDidUpdate() {
        this.updateHeader();
    }

    componentDidMount() {
        this.updateHeader();
    }
    render() {
        let type = "";
        if (this.state.isHome) {
            type = "home";
        }
        let aboutUsLink = (
            <HeaderLink
                type={type}
                link="/about"
                title="About Us"
                text="About Us"
            ></HeaderLink>
        );
        let contactLink = (
            <HeaderLink
                type={type}
                link="/contact"
                title="Contact Us"
                text="Contact Us"
            ></HeaderLink>
        );
        let getInTouchLink = (
            <HeaderLink
                type={type}
                link="/get_in_touch"
                title="Get In Touch"
                text="Get In Touch"
            ></HeaderLink>
        );
        let header = (
            <div className="banner section-header section-primary text-center">
                <div className="container">
                    <h1 className="display-1 text-nowrap text-bold">
                        <img src={SmartLogo} alt="Smarter Living" />
                    </h1>
                    <h2 className="display-4 offset-bottom-large">
                        Specializes in Smart Homes & Health Analytics.
                    </h2>
                    <p>
                        {aboutUsLink}
                        {contactLink}
                        {getInTouchLink}
                    </p>
                </div>
            </div>
        );
        if (!this.state.isHome) {
            header = (
                <header
                    className="module-header"
                    style={{ scrollBehavior: "smooth" }}
                    id="site-header"
                >
                    <nav className="main-nav">
                        <span className="brand-group">
                            <NavLink className="navbar-brand" to="/">
                                <img
                                    src={SmartLogo}
                                    alt="SmarterLiving"
                                    className="logo"
                                />
                            </NavLink>
                        </span>

                        <ul className="nav justify-content-end my-auto ml-auto">
                            <li className="nav-item">{aboutUsLink}</li>
                            <li className="nav-item">{contactLink}</li>
                            <li className="nav-item">{getInTouchLink}</li>
                        </ul>
                    </nav>
                </header>
            );
        }
        return <div>{header}</div>;
    }
}

export default withRouter(MainHeader);
