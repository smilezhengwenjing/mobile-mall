import React, { PureComponent } from 'react';
import { RegisterWrapper } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Redirect } from 'react-router-dom';
import { notification } from 'antd';
import logo from '@/assets/images/logo.png';

class Register extends PureComponent{
  render() {
    const { registerStatus } = this.props;
    if (!registerStatus) {
      return (
        <div>
          <RegisterWrapper>
            <div>
              <div className="user-form-logo">
                <img src={logo} alt="" />
              </div>
              <div className="user-form-card">
                <div className="user-form-title">
                  <h2>欢迎注册</h2>
                </div>
                <div className="user-form-group__login">
                  <div className="user-form-input">
                    <input type="text" className="form-control"  placeholder="请输入手机号"
                      ref={(input) => { this.account = input }} />
                  </div>
                  <div className="user-form-input">
                    <input type="password" className="form-control"  placeholder="请输入密码" ref={(input) => { this.password = input }} />
                  </div>
                  <div className="user-form-input">
                    <input type="password" className="form-control"  placeholder="请重复输入密码" ref={(input) => { this.confirmPassword = input }}/>
                  </div>
                  <div className="user-form-user-form-input">
                    <button className="form-control-button" onClick={() => this.props.register(this.account, this.password,this.confirmPassword)}>注册</button>
                  </div>
                </div>
              </div>
              <div className="user-form-remind">
                <p>
                  已创建账户?
                  <a href="/login">登录</a>
                </p>
              </div>
            </div>
          </RegisterWrapper>
        </div>
      )
    } else {
      return (
        <Redirect to="/login"></Redirect>
      )
    }
  }
};
const mapState = (state) => ({
  registerStatus: state.getIn(['login','registerFlag'])
})
const mapDispatch = (dispatch) => ({
  register(accountElem, passwordElem,confirmPassword) {
      if (!confirmPassword.value) {
        notification['warning']({
          message: '请重复输入密码',
        });
        return;
      }
      if (confirmPassword.value!==passwordElem.value) {
        notification['warning']({
          message: '请保证密码一致',
        });
        return;
      }
      let param = {
        loginName: accountElem.value,
        password: passwordElem.value
      }
      dispatch(actionCreators.register(param));
    }
})
export default connect(mapState,mapDispatch)(Register);
