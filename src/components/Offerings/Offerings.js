import React from "react";
import OfferingPanel from "./OfferingPanel/OfferingPanel";
import SmartHome from "../../assets/images/smart_home.png";
import HealthIcon from "../../assets/images/health.jpeg";
import VoiceIcon from "../../assets/images/voice3.png";
function Offerings() {
    return (
        <section
            id="offerings"
            className="section-content section-primary section-primary-gradient text-center"
        >
            <div className="container">
                <div className="row offset-bottom">
                    <OfferingPanel
                        text="All in One Place"
                        img={SmartHome}
                        icon="glyphicon-home"
                    ></OfferingPanel>
                    <OfferingPanel
                        text="Health"
                        img={HealthIcon}
                        icon="glyphicon-heart"
                    ></OfferingPanel>
                    <OfferingPanel
                        text="Voice Assistant"
                        img={VoiceIcon}
                        icon="glyphicon-volume-up"
                    ></OfferingPanel>
                </div>
            </div>
        </section>
    );
}

export default Offerings;
