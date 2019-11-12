import React from "react";
import ProfilePic from "../../assets/images/sachinprofile.jpg";

function About() {
    return (
        <div>
            <div className="col-12  text-center about_us">
                <h1 className="my-auto"> Our Team</h1>
                <p>
                    <br /> <br /> We are a team of developers and designers at
                    Snick Analytics working with Sachin.
                </p>
            </div>
            <section id="content" className="section-content">
                <div className="container ">
                    <div className="row col-12">
                        <div className="col-lg-6 col-xs-12 col-md-6">
                            <img src={ProfilePic} alt="Profile pic" />
                        </div>
                        <div className="col-lg-6 col-xs-12 col-md-6">
                            <h2>Sachin Wasnik</h2>
                            <p>
                                Sachin is a Phd Student at the Design Lab,
                                University of Sydney.
                                <br /> He is a computer science engineer, and
                                prior to commencing his Phd, he worked for Large
                                Hadron Collider (ATLAS Project), IBM Software
                                Labs Tivoli Autonomic Computing and Belfast
                                e-Science Centre, UK.
                            </p>
                            <p>
                                His research interests include Cloud Computing,
                                Big Data, Machine Learning, Social Network
                                Analysis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default About;
