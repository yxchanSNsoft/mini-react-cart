
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Cart from "./components/cart";
import "./App.css";

class App extends Component {
  state = {
    cart: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super(props);

  }

  handleIncrement = (cartitem) => {
    const cart = [...this.state.cart];

    const index = cart.indexOf(cartitem);

    cart[index] = { ...cartitem };
    cart[index].value++;
    this.setState({ cart });
  };


  handleDelete = (counterId) => {
    const indexToRemove = (c) => c.id !== counterId;
    const cart = this.state.cart.filter(indexToRemove);
    this.setState({ cart });
  };

  handleReset = () => {
    const cart = this.state.cart.map((arrayIndex) => {
      arrayIndex.value = 0;
      return arrayIndex;
    });
    this.setState({ cart });
  };

  render() {
    console.log("app - rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.cart.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Cart
            cart={this.state.cart}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
