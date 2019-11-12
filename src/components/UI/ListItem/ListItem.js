import React from "react";
import { Link } from "react-router-dom";
import "./ListItem.css";

function ListItem(props) {
  let linkType = props.link + "";
  let link;
  if (linkType.startsWith("/") || linkType.startsWith("#")) {
    link = (
      <Link className="home" to={props.link}>
        {props.name}
      </Link>
    );
  } else {
    link = (
      <a className="home" href={props.link}>
        {props.name}
      </a>
    );
  }

  return <li>{link}</li>;
}

export default ListItem;
