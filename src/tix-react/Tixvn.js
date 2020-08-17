import React, { Component } from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Schedule from "./Schedule";
import News from "./News";

export default class Tixvn extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Carousel></Carousel>
        <Schedule></Schedule>
        <News></News>
      </div>
    );
  }
}
