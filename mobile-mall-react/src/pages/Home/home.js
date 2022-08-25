import React, { Component } from 'react';
import "@/style/index.scss";
import "@/assets/fonts/flaticon/flaticon.scss";
import "@/assets/fonts/icofont/icofont.scss";
import Header from "./components/header";
import Navbar from "./components/navbar";
export default class home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navbar/>
      </div>
    )
  }
}
