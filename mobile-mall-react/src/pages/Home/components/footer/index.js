import React, { Component, Fragment } from 'react';
import logo from '@/assets/images/logo.png';
import "@/style/base/footer.scss";

export default class index extends Component {
    render() {
        return (
            <Fragment>
                <footer className="footer-part">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-xl-3">
                                <div className="footer-widget">
                                    <a className="footer-logo" href="#"><img src={logo} alt="logo" /></a>
                                    <p className="footer-desc">js代码(www.jsdaima.com)是IT资源下载与IT技能学习平台。我们拒绝滥竽充数，只提供精品IT资源！</p>
                                    <ul className="footer-social">
                                        <li><a className="icofont-facebook" href="#"></a></li>
                                        <li><a className="icofont-twitter" href="#"></a></li>
                                        <li><a className="icofont-linkedin" href="#"></a></li>
                                        <li><a className="icofont-instagram" href="#"></a></li>
                                        <li><a className="icofont-pinterest" href="#"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        )
    }
}
