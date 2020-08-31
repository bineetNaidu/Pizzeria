import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import "./Controllers.css";

export default class Controllers extends Component {
  render() {
    const { name, next, prev, size } = this.props;
    return (
      <div className="Controllers">
        <h1>{name}</h1>
        <h3>PIZZA OF THE MONTH</h3>
        <div className="Controllers__btn">
          <div className="Controllers__btn__sizes">
            <IconButton
              aria-label="small size pizza"
              style={{ color: "white" }}
              onClick={() => size("20rem")}
            >
              S
            </IconButton>
            <IconButton
              aria-label="middium size pizza"
              style={{ color: "white" }}
              onClick={() => size("25rem")}
            >
              M
            </IconButton>
            <IconButton
              aria-label="large size pizza"
              style={{ color: "white" }}
              onClick={() => size("30rem")}
            >
              L
            </IconButton>
          </div>
          <div className="Controllers__btn__cont">
            <IconButton aria-label="next pizza" onClick={next}>
              <ArrowForwardIcon />
            </IconButton>
            <IconButton aria-label="prev pizza" onClick={prev}>
              <ArrowBackIcon />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}
