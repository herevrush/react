import React, { Component } from "react";
import FooterPanel from "./FooterPanel/FooterPanel";
import ListItem from "../UI/ListItem/ListItem";

class MainFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <footer role="contentinfo" className="footer site-footer">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-12  masthead-followup row m-0 border border-white">
                            <FooterPanel text="Partners &amp; affiliates">
                                <ListItem
                                    link="#"
                                    name="Coming Soon!"
                                ></ListItem>
                                <ListItem></ListItem>
                                <ListItem></ListItem>
                            </FooterPanel>
                            <FooterPanel text="Our Expertise">
                                <ListItem
                                    link="#"
                                    name="Consultancy"
                                ></ListItem>
                                <ListItem
                                    link="https://store.google.com/product/google_home"
                                    name="Google Home"
                                ></ListItem>
                                <ListItem
                                    link="https://www.android.com/wear/"
                                    name="Android Wear"
                                ></ListItem>
                                <ListItem
                                    link="https://www.arduino.cc/"
                                    name="Arduino"
                                ></ListItem>
                            </FooterPanel>
                            <FooterPanel text="About">
                                <ListItem
                                    link="/about"
                                    name="About Team"
                                ></ListItem>
                                <ListItem
                                    link="/contact"
                                    name="Locations"
                                ></ListItem>
                                <ListItem
                                    link="/contact"
                                    name="Legal, Sales &amp; support"
                                ></ListItem>
                                <ListItem link="#" name="Site map"></ListItem>
                            </FooterPanel>
                        </div>
                        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                            <h2 className="h4">
                                <ul className="list-unstyled copyright">
                                    <li>
                                        © S<i>nick</i> analytics. All rights
                                        reserved.
                                    </li>
                                </ul>
                            </h2>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default MainFooter;
