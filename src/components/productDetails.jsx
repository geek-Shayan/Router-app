import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    // this.props.history.push("/products"); //adds a new input in history
    this.props.history.replace("/products"); //replaces previous history with a new input // used in  login pages
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id} </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
