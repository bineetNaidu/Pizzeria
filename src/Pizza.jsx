import React, { Component } from "react";
import "./Pizza.css";

export default class Pizza extends Component {
  render() {
    const { img, size } = this.props;

    return (
      <div className="Pizza">
        <img
          src={img}
          alt="CURR IMG"
          className=" Pizza__item"
          style={{ width: size }}
        />
      </div>
    );
  }
}
