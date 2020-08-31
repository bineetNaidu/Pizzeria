import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";

export default class Infotab extends Component {
  render() {
    const { info, quantity, add, remove } = this.props;
    return (
      <div>
        <h4 className="Pizzacounter__title">information</h4>
        <p className="Pizzacounter__content">{info}</p>
        <Button variant="outlined" color="secondary">
          <AddIcon /> Add Toppings
        </Button>
        <h4 className="Pizzacounter__title">quantity</h4>
        <div className="Pizzacounter__quantity">
          <IconButton
            color="secondary"
            aria-label="add +1 to quantity"
            onClick={add}
          >
            <AddIcon />
          </IconButton>
          <p>{quantity}</p>
          <IconButton
            color="secondary"
            aria-label="add -1 to quantity"
            onClick={remove}
          >
            <RemoveIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}
