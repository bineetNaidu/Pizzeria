import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Infotab from "./Infotab";
import Controllers from "./Controllers";

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
      {
        name: "Bineet",
        info: "Loremiores expedita quidem repellendus. Corporis, pariatur.",
        price: "$60",
      },
    ],
  };

  constructor(props) {
    super(props);

    this.state = {
      n: 0,
      currPizza: null,
    };

    this.handleAddquantity = this.handleAddquantity.bind(this);
    this.handleRemovequantity = this.handleRemovequantity.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }
  componentDidMount() {
    this.setState({
      currPizza: {
        data: this.props.pizzas[this.state.n],
        quantity: 1,
      },
    });
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
  handleNext() {
    this.setState((st) => ({
      n: st.n + 1,
      currPizza: {
        data: this.props.pizzas[st.n + 1],
        quantity: st.currPizza.quantity,
      },
    }));
  }
  handlePrev() {
    this.setState((st) => ({
      n: st.n - 1,
      currPizza: {
        data: this.props.pizzas[st.n - 1],
        quantity: st.currPizza.quantity,
      },
    }));
  }

  render() {
    const pizza = this.state.currPizza;
    let data;
    {
      this.state.currPizza !== null
        ? (data = (
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
                  <Controllers
                    name={pizza.data.name}
                    next={this.handleNext}
                    prev={this.handlePrev}
                  />
                </Grid>
                <Grid item xs>
                  <h1>Hi</h1>
                </Grid>
              </Grid>
            </Container>
          ))
        : (data = "");
    }
    return <div>{data}</div>;
  }
}
