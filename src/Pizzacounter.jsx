import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Infotab from "./Infotab";

import "./Pizzacounter.css";

export default class Pizzacounter extends Component {
  static defaultProps = {
    pizzas: [
      {
        name: "Peperroni",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam fugit, sed modi dicta possimus odit veritatis harum inventore vero in ea cupiditate nobis maiores expedita quidem repellendus. Corporis, pariatur.",
        price: "$60",
      },
    ],
  };

  constructor(props) {
    super(props);

    this.state = {
      currPizza: {
        data: this.props.pizzas[0],
        quantity: 1,
      },
    };

    this.handleAddquantity = this.handleAddquantity.bind(this);
    this.handleRemovequantity = this.handleRemovequantity.bind(this);
  }

  handleAddquantity() {
    this.setState({
      currPizza: {
        ...this.state.currPizza,
        quantity: this.state.currPizza.quantity + 1,
      },
    });
  }

  handleRemovequantity() {
    this.setState({
      currPizza: {
        ...this.state.currPizza,
        quantity: this.state.currPizza.quantity - 1,
      },
    });
  }

  render() {
    const pizza = this.state.currPizza;
    return (
      <Container className="Pizzacounter">
        <Grid container spacing={3}>
          <Grid item xs className="Pizzacounter__tile">
            <Infotab
              info={pizza.data.info}
              quantity={pizza.quantity}
              add={this.handleAddquantity}
              remove={this.handleRemovequantity}
            />
          </Grid>
          <Grid item xs={6}>
            <h1>hi</h1>
          </Grid>
          <Grid item xs>
            <h1>Hi</h1>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
