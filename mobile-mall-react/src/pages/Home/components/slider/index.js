import React, { Component , Fragment } from 'react';

import Slider from "react-slick";
//在头部引入css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "@/style/base/slider.scss";
import slider_01 from '@/assets/images/slider/01.png';
import slider_02 from '@/assets/images/slider/02.png';
export default class index extends Component {
    render() {
        const settings = {
            //详细的设置请查看官方API
              dots: false, //圆点显示（false隐藏）
              infinite: true, //无限的环绕内容
              autoplay: true, //自动播放，速度默认为（3000毫秒）
              speed: 500, //自动播放速度（毫秒）
              slidesToShow: 1, //在一帧中显示3张卡片
              slidesToScroll: 1 //一次滚动3张卡片
            };
        return (
            <Fragment>
                <section className="home-index-slider slider-arrow slider-dots">
                <Slider {...settings}>
                <div className="banner-part banner-1">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 col-lg-6">
                                    <div className="banner-content">
                                        <h1>free home delivery within 24 hours now.</h1>
                                        <p>Lorem ipsum dolor consectetur adipisicing elit modi consequatur eaque expedita porro necessitatibus eveniet voluptatum quis pariatur Laboriosam molestiae architecto excepturi</p>
                                        <div className="banner-btn">
                                            <a className="btn btn-inline" href="shop-grid.html"><i className="icofont-shopping-cart"></i><span>shop now</span></a>
                                            <a className="btn btn-outline" href="offer.html"><i className="icofont-sale-discount"></i><span>get offer</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <div className="banner-img">
                                        <img src={slider_01} alt="index" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-part banner-2">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 col-lg-6">
                                    <div className="banner-img">
                                        <img src={slider_02} alt="index" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <div className="banner-content">
                                        <h1>free home delivery within 24 hours now.</h1>
                                        <p>Lorem ipsum dolor consectetur adipisicing elit modi consequatur eaque expedita porro necessitatibus eveniet voluptatum quis pariatur Laboriosam molestiae architecto excepturi</p>
                                        <div className="banner-btn">
                                            <a className="btn btn-inline" href="shop-grid.html"><i className="icofont-shopping-cart"></i><span>shop now</span></a>
                                            <a className="btn btn-outline" href="offer.html"><i className="icofont-sale-discount"></i><span>get offer</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                    
                </section>
            </Fragment>
        )
    }
}
