import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BT3SideBar from "./BT3/BT3SideBar";
import BT3content from "./BT3/BT3content";
import BT3header from "./BT3/BT3header";
import BT3Footer from "./BT3/BT3Footer";

function App() {
  return (
    <div className="App">
      <BT3header></BT3header>
      {/* <BT3SideBar></BT3SideBar> */}
      <BT3content></BT3content>
      <BT3Footer></BT3Footer>
    </div>
  );
}

export default App;
