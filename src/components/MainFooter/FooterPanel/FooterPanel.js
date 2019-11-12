import React from "react";
import "./FooterPanel.css";

function FooterPanel(props) {
  return (
    <div className="col-12 col-md-4 p-3 p-md-5 bg-light border border-white">
      <h3>{props.text}</h3>
      <ul className="list-unstyled">{props.children}</ul>
    </div>
  );
}

export default FooterPanel;
