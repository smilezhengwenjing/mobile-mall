import React, { Component , Fragment } from 'react'

export default class index extends Component {
    render() {
        return (
            <Fragment>
                <section class="home-index-slider slider-arrow slider-dots">
                    <div class="banner-part banner-1">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-md-6 col-lg-6">
                                    <div class="banner-content">
                                        <h1>free home delivery within 24 hours now.</h1>
                                        <p>Lorem ipsum dolor consectetur adipisicing elit modi consequatur eaque expedita porro necessitatibus eveniet voluptatum quis pariatur Laboriosam molestiae architecto excepturi</p>
                                        <div class="banner-btn">
                                            <a class="btn btn-inline" href="shop-grid.html"><i class="icofont-shopping-cart"></i><span>shop now</span></a>
                                            <a class="btn btn-outline" href="offer.html"><i class="icofont-sale-discount"></i><span>get offer</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6">
                                    <div class="banner-img">
                                        <img src="images/home/index/01.png" alt="index" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="banner-part banner-2">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-md-6 col-lg-6">
                                    <div class="banner-img">
                                        <img src="images/home/index/02.png" alt="index" />
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6">
                                    <div class="banner-content">
                                        <h1>free home delivery within 24 hours now.</h1>
                                        <p>Lorem ipsum dolor consectetur adipisicing elit modi consequatur eaque expedita porro necessitatibus eveniet voluptatum quis pariatur Laboriosam molestiae architecto excepturi</p>
                                        <div class="banner-btn">
                                            <a class="btn btn-inline" href="shop-grid.html"><i class="icofont-shopping-cart"></i><span>shop now</span></a>
                                            <a class="btn btn-outline" href="offer.html"><i class="icofont-sale-discount"></i><span>get offer</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
