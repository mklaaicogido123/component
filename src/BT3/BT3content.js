import React, { Component } from "react";
import BT3Carousel from "./BT3Carousel";
import BT3ProductList from "./BT3ProductList";
import BT3Footer from "./BT3Footer";

export default class BT3content extends Component {
  render() {
    return (
      <div className="container my-5">
        <BT3Carousel></BT3Carousel>
        <div className="row text-center">
          <BT3ProductList></BT3ProductList>
          <BT3ProductList></BT3ProductList>
          <BT3ProductList></BT3ProductList>
          <BT3ProductList></BT3ProductList>
        </div>
      </div>
    );
  }
}
