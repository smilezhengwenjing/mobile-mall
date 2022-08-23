import React, { Component } from 'react'
import userimg from "@/assets/images/user.png";
import logo from '@/assets/images/logo.png';
import "@/style/base/header.scss";
export default class index extends Component {
  render() {
    return (
        <div>
        <section className="header-part">
          <div className="container-fluid">
            <div className="header-content-group">
              <div className="header-widget-group left">
                <button className="header-widget header-user" href="#" title="我的账户"><img src={userimg} alt="user" /></button>
                <a className="header-logo" href="index.html"><img src={logo} alt="logo" /></a>
                <button className="header-widget header-src" title="Search Bar"><i className="icofont-ui-search"></i></button>
                <button className="header-widget header-cate" title="分类 List"><i className="icofont-align-left"></i><span>分类</span></button>
              </div>
              <form className="header-form">
                <input type="text" placeholder="Search anything..." />
                <button><i className="icofont-ui-search"></i></button>
              </form>
              <div className="header-widget-group right">
                <a className="header-widget" href="login.html" title="注册"><img src={userimg} alt="user" /><span>注册</span></a>
                <a className="header-widget" href="compare.html" title="Compare List"><i className="icofont-ui-rotation"></i><sup>0</sup></a>
                <a className="header-widget" href="wishlist.html" title="Wishlist"><i className="icofont-ui-love"></i><sup>0</sup></a>
                <button className="header-widget header-cart" title="Cartlist"><i className="icofont-shopping-cart"></i><span>00.00</span><sup>9+</sup></button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
