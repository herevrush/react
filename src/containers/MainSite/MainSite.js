import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Home from "../../components/Home/Home";
import "./MainSite.css";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
class MainSite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHome: true
        };
    }

    render() {
        console.log(this.props.location);
        return (
            <main className="section-content">
                <Switch>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/get_in_touch" component={GetInTouch}></Route>
                    <Route path="/" exact component={Home}></Route>
                </Switch>
            </main>
        );
    }
}

export default withRouter(MainSite);
