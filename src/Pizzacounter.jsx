import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Infotab from "./Infotab";
import Controllers from "./Controllers";
import Pricetab from "./Pricetab";
import Pizza from "./Pizza";
import PizzasList from "./PizzasList";

import "./Pizzacounter.css";

export default class Pizzacounter extends Component {
  static defaultProps = {
    pizzas: [...PizzasList],
  };

  constructor(props) {
    super(props);

    this.state = {
      mLen: this.props.pizzas.length,
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
        quantity:
          this.state.currPizza.quantity === 0
            ? 0
            : this.state.currPizza.quantity - 1,
      },
    });
  }
  handleNext() {
    this.setState((st) => ({
      n: st.n + 1,
      currPizza: {
        data: this.props.pizzas[st.n + 1],
        quantity: 1,
      },
    }));
  }
  handlePrev() {
    this.setState((st) => ({
      n: st.n - 1,
      currPizza: {
        data: this.props.pizzas[st.n - 1],
        quantity: 1,
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
                  <Pricetab
                    price={pizza.data.price}
                    quantity={pizza.quantity}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Pizza img={pizza.data.imgSrc} />
              </Grid>
            </Container>
          ))
        : (data = "");
    }
    return <div>{data}</div>;
  }
}
