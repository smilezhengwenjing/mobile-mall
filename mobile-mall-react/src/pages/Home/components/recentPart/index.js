import React, { Component, Fragment } from 'react';
import product01 from "@/assets/images/product/01.jpg";
import "@/style/base/recent.scss";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <section className="section recent-part">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h2>最近售出的物品</h2>
                </div>
              </div>
            </div>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              <div className="col">
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text sale">sale</label>
                    </div>
                    <button className="product-wish wish"><i className="icofont-ui-love"></i></button>
                    <a className="product-image" href="product-details.html"><img src={product01} alt="product" /></a>
                    <div className="product-widget">
                      <a title="Product Compare" href="compare.html" className="icofont-ui-rotation"></a>
                      <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox icofont-ui-play" data-autoplay="true" data-vbtype="video"></a>
                      <a title="Product View" href="#" className="icofont-eye-alt" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="icofont-star"></i>
                      <a href="product-details.html">(3)</a>
                    </div>
                    <h6 className="product-name"><a href="product-details.html">fresh green chilis</a></h6>
                    <h6 className="product-price">
                      <del>
                        $34
                      </del><span>$28<small>/piece</small></span></h6>
                    <button className="product-add" title="Add to Cart"><i className="icofont-cart"></i><span>add</span></button>
                    <div className="product-action">
                      <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                      <input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue="1" />
                      <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pb-xxl-5">
              <div className="col-lg-12">
                <div className="section-btn-25">
                  <a href="shop-grid.html" className="btn btn-outline"><i className="icofont-eye-alt"></i><span>show more</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
