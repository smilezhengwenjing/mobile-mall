import React from 'react';
import { RegisterWrapper } from './style';
import logo from '../../assets/images/logo.png';

const Register = () => {
  return (
    <div>
      <RegisterWrapper>
        <div>
          <div className="user-form-logo">
            <img src={logo} alt="" />
          </div>
          <div className="user-form-card">
            <div className="user-form-title">
              <h2>Join Now!</h2>
            </div>
            <div className="user-form-group">
              <div className="user-form-input">
                <input type="text" className="form-control" placeholder="请输入手机号" />
              </div>
              <div className="user-form-input">
                <input type="password" className="form-control" placeholder="请输入密码" />
              </div>
              <div className="user-form-input">
                <input type="password" className="form-control" placeholder="请重复输入密码" />
              </div>
              <div className="user-form-user-form-input">
                {/* eslint-disable-next-line react/button-has-type */}
                <button className="form-control-button">注册</button>
              </div>
            </div>
          </div>
          <div className="user-form-remind">
            <p>
              已创建账户?
              <a href="blank">登录</a>
            </p>
          </div>
        </div>
      </RegisterWrapper>
    </div>
  );
};

export default Register;
