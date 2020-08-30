import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export default class Pricetab extends Component {
  render() {
    const p = parseInt(this.props.price.replace(/\$/g, ""));
    const q = parseInt(this.props.quantity);
    return (
      <div className="Pizzacounter__tile">
        <h4 className="Pizzacounter__title">price</h4>
        <h2>${p * q}</h2>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddShoppingCartIcon />}
        >
          Add to Cart
        </Button>
      </div>
    );
  }
}
