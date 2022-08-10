import React, { Component } from 'react';
import "@/style/base/bootstrap.scss";
import logo from "@/assets/images/logo.png"

export default class login extends Component {
  render() {
    return (
      <section className="user-form-part">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                    <div className="user-form-logo">
                        <a href="index.html"><img src={logo} alt="logo" /></a>
                    </div>
                    <div className="user-form-card">
                        <div className="user-form-title">
                            <h2>欢迎登录</h2>
                        </div>
                        <form className="user-form">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="请输入用户名" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="请输入密码" />
                            </div>
                            <div className="form-button">
                                <button type="submit">登录</button>
                                {/* <p>Forgot your password?<a href="reset.html">reset here</a></p> */}
                            </div>
                        </form>
                    </div>
                    <div className="user-form-remind">
                        <p>还没有账号?<a href="/register">立即注册</a></p>
                    </div>
                    <div className="user-form-footer">
                        <p><span>Copyright©1999-2022&nbsp;&nbsp;中国移动&nbsp;&nbsp;版权所有&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
