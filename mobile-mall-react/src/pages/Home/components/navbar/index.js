import React, { Component } from 'react'
import "@/style/base/navbar.scss";
import promo01 from "@/assets/images/promo/shop/01.jpg";
export default class index extends Component {
    render() {
        return (
            <div>
                <nav className="navbar-part">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="navbar-content">
                                    <ul className="navbar-list">
                                        <li className="navbar-item dropdown"><a className="navbar-link dropdown-arrow" href="#">home</a>
                                            <ul className="dropdown-position-list">
                                                <li><a href="index.html">Home index</a></li>
                                                <li><a href="home-grid.html">Home grid</a></li>
                                                <li><a href="home-classNameic.html">Home classNameic</a></li>
                                                <li><a href="home-category.html">Home category</a></li>
                                            </ul></li>
                                        <li className="navbar-item dropdown"><a className="navbar-link dropdown-arrow" href="#">shop</a>
                                            <ul className="dropdown-position-list">
                                                <li><a href="shop-grid.html">shop grid</a></li>
                                                <li><a href="shop-standard.html">shop standard</a></li>
                                                <li><a href="product-details.html">product details</a></li>
                                            </ul></li>
                                        <li className="navbar-item dropdown-megamenu"><a className="navbar-link dropdown-arrow" href="#">category</a>
                                            <div className="megamenu">
                                                <div className="container">
                                                    <div className="row row-cols-5">
                                                        <div className="col">
                                                            <div className="megamenu-wrap">
                                                                <h5 className="megamenu-title">vegetables</h5>
                                                                <ul className="megamenu-list">
                                                                    <li><a href="#">carrot</a></li>
                                                                    <li><a href="#">broccoli</a></li>
                                                                    <li><a href="#">asparagus</a></li>
                                                                    <li><a href="#">cauliflower</a></li>
                                                                    <li><a href="#">eggplant</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="megamenu-wrap">
                                                                <h5 className="megamenu-title">fruits</h5>
                                                                <ul className="megamenu-list">
                                                                    <li><a href="#">Apple</a></li>
                                                                    <li><a href="#">orange</a></li>
                                                                    <li><a href="#">banana</a></li>
                                                                    <li><a href="#">strawberrie</a></li>
                                                                    <li><a href="#">watermelon</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="megamenu-wrap">
                                                                <h5 className="megamenu-title">dairy farms</h5>
                                                                <ul className="megamenu-list">
                                                                    <li><a href="#">Butter</a></li>
                                                                    <li><a href="#">Cheese</a></li>
                                                                    <li><a href="#">Milk</a></li>
                                                                    <li><a href="#">Eggs</a></li>
                                                                    <li><a href="#">cream</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="megamenu-wrap">
                                                                <h5 className="megamenu-title">seafoods</h5>
                                                                <ul className="megamenu-list">
                                                                    <li><a href="#">Lobster</a></li>
                                                                    <li><a href="#">Octopus</a></li>
                                                                    <li><a href="#">Shrimp</a></li>
                                                                    <li><a href="#">Halabos</a></li>
                                                                    <li><a href="#">Maeuntang</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="megamenu-wrap">
                                                                <h5 className="megamenu-title">diet foods</h5>
                                                                <ul className="megamenu-list">
                                                                    <li><a href="#">Salmon</a></li>
                                                                    <li><a href="#">Avocados</a></li>
                                                                    <li><a href="#">Leafy Greens</a></li>
                                                                    <li><a href="#">Boiled Potatoes</a></li>
                                                                    <li><a href="#">Cottage Cheese</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="megamenu-wrap">
                                                                <h5 className="megamenu-title">fast foods</h5>
                                                                <ul className="megamenu-list">
                                                                    <li><a href="#">burger</a></li>
                                                                    <li><a href="#">milkshake</a></li>
                                                                    <li><a href="#">sandwich</a></li>
                                                                    <li><a href="#">doughnut</a></li>
                                                                    <li><a href="#">pizza</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="megamenu-wrap">
                                                                <h5 className="megamenu-title">drinks</h5>
                                                                <ul className="megamenu-list">
                                                                    <li><a href="#">cocktail</a></li>
                                                                    <li><a href="#">hard soda</a></li>
                                                                    <li><a href="#">shampain</a></li>
                                                                    <li><a href="#">Wine</a></li>
                                                                    <li><a href="#">barley</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="megamenu-wrap">
                                                                <h5 className="megamenu-title">meats</h5>
                                                                <ul className="megamenu-list">
                                                                    <li><a href="#">Meatball</a></li>
                                                                    <li><a href="#">Sausage</a></li>
                                                                    <li><a href="#">Poultry</a></li>
                                                                    <li><a href="#">chicken</a></li>
                                                                    <li><a href="#">Cows</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="megamenu-wrap">
                                                                <h5 className="megamenu-title">fishes</h5>
                                                                <ul className="megamenu-list">
                                                                    <li><a href="#">scads</a></li>
                                                                    <li><a href="#">pomfret</a></li>
                                                                    <li><a href="#">groupers</a></li>
                                                                    <li><a href="#">anchovy</a></li>
                                                                    <li><a href="#">mackerel</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="megamenu-wrap">
                                                                <h5 className="megamenu-title">dry foods</h5>
                                                                <ul className="megamenu-list">
                                                                    <li><a href="#">noodles</a></li>
                                                                    <li><a href="#">Powdered milk</a></li>
                                                                    <li><a href="#">nut &amp; yeast</a></li>
                                                                    <li><a href="#">almonds</a></li>
                                                                    <li><a href="#">pumpkin</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div></li>
                                        <li className="navbar-item dropdown-megamenu"><a className="navbar-link dropdown-arrow" href="#">pages</a>
                                            <div className="megamenu">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <div className="megamenu-wrap">
                                                                <h5 className="megamenu-title">useful pages</h5>
                                                                <ul className="megamenu-list">
                                                                    <li><a href="profile.html">my profile</a></li>
                                                                    <li><a href="about.html">about us</a></li>
                                                                    <li><a href="contact.html">contact us</a></li>
                                                                    <li><a href="offer.html">offers</a></li>
                                                                    <li><a href="faq.html">faqs</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="megamenu-wrap">
                                                                <h5 className="megamenu-title">more pages</h5>
                                                                <ul className="megamenu-list">
                                                                    <li><a href="compare.html">compare</a></li>
                                                                    <li><a href="privacy.html">privacy policy</a></li>
                                                                    <li><a href="coming-soon.html">coming soon</a></li>
                                                                    <li><a href="blank-page.html">blank page</a></li>
                                                                    <li><a href="error.html">404 Error</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="megamenu-wrap">
                                                                <h5 className="megamenu-title">user action</h5>
                                                                <ul className="megamenu-list">
                                                                    <li><a href="wishlist.html">wishlist</a></li>
                                                                    <li><a href="checkout.html">checkout</a></li>
                                                                    <li><a href="orderlist.html">order history</a></li>
                                                                    <li><a href="invoice.html">order invoice</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="megamenu-promo">
                                                                <a href="#"><img src={promo01} alt="promo" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div></li>
                                        <li className="navbar-item dropdown"><a className="navbar-link dropdown-arrow" href="#">authentic</a>
                                            <ul className="dropdown-position-list">
                                                <li><a href="login.html">login</a></li>
                                                <li><a href="register.html">register</a></li>
                                                <li><a href="reset.html">reset password</a></li>
                                                <li><a href="change.html">change password</a></li>
                                            </ul></li>
                                        <li className="navbar-item dropdown"><a className="navbar-link dropdown-arrow" href="#">blogs</a>
                                            <ul className="dropdown-position-list">
                                                <li><a href="blog-grid.html">blog grid</a></li>
                                                <li><a href="blog-standard.html">blog standard</a></li>
                                                <li><a href="blog-details.html">blog details</a></li>
                                            </ul></li>
                                    </ul>
                                    <div className="navbar-info-group">
                                        <div className="navbar-info">
                                            <i className="icofont-ui-touch-phone"></i>
                                            <p><small>call us</small><span>(+880) 183 8288 389</span></p>
                                        </div>
                                        <div className="navbar-info">
                                            <i className="icofont-ui-email"></i>
                                            <p><small>email us</small><span>support@organe.com</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
