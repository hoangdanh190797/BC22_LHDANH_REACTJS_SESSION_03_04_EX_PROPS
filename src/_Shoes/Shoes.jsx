import React, { Component } from "react";
import data from "./data.json";
import ShoesList from "./ShoesList";
import InfoDetails from "./InfoDetails";

export default class Shoes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: null,
    };
  }
  handleDetails = (product) => {
    this.setState({ selectedProduct: product });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="border border-primary">
            <h3 className="text-center">Shoes</h3>
            <ShoesList getData={this.handleDetails} products={data} />
          </div>
        </div>
        <InfoDetails products={this.state.selectedProduct} />
      </div>
    );
  }
}
