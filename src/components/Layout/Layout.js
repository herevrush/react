import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import "./Layout.css";
import MainHeader from "../MainHeader/MainHeader";
import MainFooter from "../MainFooter/MainFooter";

class Layout extends Component {
    state = {};

    render() {
        return (
            <Aux>
                <MainHeader></MainHeader>
                <main className="section-content">{this.props.children}</main>
                <MainFooter></MainFooter>
            </Aux>
        );
    }
}

export default Layout;
