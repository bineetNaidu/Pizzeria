import React, { Component } from "react";
import "./Pizza.css";

export default class Pizza extends Component {
  render() {
    const { img, next, prev } = this.props;

    return (
      <div style={{ display: "flex" }}>
        <img src={prev.imgSrc} alt="Prev IMG" className="Pizza Pizza__prev" />
        <img src={img} alt="CURR IMG" className="Pizza Pizza__mid" />
        <img src={next.imgSrc} alt="Next IMG" className="Pizza Pizza__next" />
      </div>
    );
  }
}
