import React, { Component } from "react";
import Cartitem from "./cartitem";

class Cart extends Component {
  render() {
    const { onReset, cart, onDelete, onIncrement } = this.props;
    console.log("the carts", cart)

    return (
      <div>
        <button onClick={onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {cart.map((cartitem) => (
          <Cartitem
            key={cartitem.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            cartitem={cartitem}
          ></Cartitem>
        ))}
      </div>
    );
  }
}

export default Cart;
