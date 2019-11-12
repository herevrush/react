import React, { Component } from "react";
import "./HeaderLink.css";
import { NavLink } from "react-router-dom";
class HeaderLink extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let classes = [
            "btn-transparent",
            "text-uppercase",
            "text-letterspacing"
        ];
        if (this.props.type === "home") {
            classes.push(
                "btn-link",
                "offset-right",
                "offset-left",
                "offset-bottom-small"
            );
        } else {
            classes.push("nav-link");
        }
        return (
            <NavLink
                className={classes.join(" ")}
                to={this.props.link}
                title={this.props.title}
            >
                {this.props.text}
            </NavLink>
        );
    }
}

export default HeaderLink;
