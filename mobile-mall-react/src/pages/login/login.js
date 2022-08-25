import React, { PureComponent } from 'react';
import "@/style/base/bootstrap.scss";
import logo from "@/assets/images/logo.png";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from '@/pages/login/store/index.js';

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem){
		dispatch(actionCreators.login(accountElem.value, passwordElem.value))
	}
})
class login extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if(!loginStatus){
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
                                      <input type="text" className="form-control" placeholder="请输入用户名" ref={(input) => {this.account = input}}/>
                                  </div>
                                  <div className="form-group">
                                      <input type="password" className="form-control" placeholder="请输入密码" ref={(input) => {this.password = input}}/>
                                  </div>
                                  <div className="form-button">
                                      <button type="submit" onClick={() => this.props.login(this.account, this.password)}>登录</button>
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
    }else{
        return <Redirect to='/'/>
    }
   
  }
}

export default connect(mapState, mapDispatch)(login);
