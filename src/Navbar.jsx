import React, { Component } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <h3 className="Navbar__logo">PIZZERIA</h3>
        <div className="Navbar__links">
          <button>
            <AddShoppingCartIcon />
          </button>
          <button>
            <MenuIcon />
          </button>
        </div>
      </nav>
    );
  }
}
