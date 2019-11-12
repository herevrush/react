import React from "react";

function OfferingPanel(props) {
    let classes = "glyphicon display-1 offset-top-large hidden-xs";

    classes = classes + " " + props.icon;

    return (
        <div className="col-sm-4">
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <span className={classes} aria-hidden="true"></span>
                    <h2>{props.text}</h2>
                    <p>
                        <img src={props.img} alt={props.text} />>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OfferingPanel;
