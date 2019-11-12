import React, { Component } from "react";
import HomeContent from "./HomeContent/HomeContent";
import Offerings from "../Offerings/Offerings";
import GetInTouch from "../GetInTouch/GetInTouch";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <HomeContent></HomeContent>
                <Offerings />
                <GetInTouch />
            </div>
        );
    }
}

export default Home;
