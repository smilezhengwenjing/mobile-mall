import React, { Component } from 'react';
import "@/style/index.scss";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Slider from "./components/slider";
import Recent from "./components/recentPart";
import Footer from "./components/footer"
export default class home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navbar/>
        <Slider/>
        <Recent/>
        <Footer/>
      </div>
    )
  }
}
