import React, { PureComponent } from 'react';
import logo from '@/assets/images/product.jpg';
import { BigPicWrapper,SmallPicWrapper,DetailWrapper } from './style';
export default class Detail extends PureComponent {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        {/*左侧图片区域*/}
                        <div className='col-lg-6'>
                            <div className='mt-3'>
                                <BigPicWrapper>
                                    <img src={logo} alt=""/>
                                </BigPicWrapper>
                                <SmallPicWrapper className='mt-3'>
                                    <div className='smallImg'>
                                        <img src={logo} alt=""/>
                                    </div>
                                    <div className='smallImg'>
                                        <img src={logo} alt=""/>
                                    </div>
                                    <div className='smallImg'>
                                        <img src={logo} alt=""/>
                                    </div>
                                    <div className='smallImg'>
                                        <img src={logo} alt=""/>
                                    </div>
                                    <div className='smallImg'>
                                        <img src={logo} alt=""/>
                                    </div>
                                </SmallPicWrapper>
                            </div>
                        </div>
                        {/*右侧详情区域*/}
                        <div className='col-lg-6'>
                            <DetailWrapper className="mt-3">
                                <h3 className="goodsName">2G流量日包</h3>
                                <div className="goodsId">
                                   <span>商品编号：843042</span>
                                   <span className="ms-3">品牌名称：843042</span>
                                </div>
                                <div className="goodsId">
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores quibusdam.</p>
                                </div>
                                <div className="goodsPrice">
                                   <span className="priceTitle">价  格</span>
                                   <span className="priceContent ms-3">500</span>
                                   <span className="priceEnd ms-1">积分</span>
                                </div>
                                <div className="goodsAttr">
                                   <span className="attrTitle">选择套餐</span>
                                   <div className="attrContent">
                                        <ul>
                                            <li className="active">套餐1</li>
                                            <li>套餐2</li>
                                            <li>套餐3</li>
                                            <li>套餐4</li>
                                            <li>套餐5</li>
                                            <li className="more">更多&gt;</li>
                                        </ul>
                                   </div>
                              
                                </div>
                                <div className="goodsAttr mt-3">
                                    <span className="attrTitle">支付方式</span>
                                    <div className="attrContent"> 
                                        <ul>
                                             <li className="active">全积分</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="btnGroup mt-5">
                                    <button className="cart">添加到购物车</button>
                                    <button className="order">直接下单</button>
                                </div>
                            </DetailWrapper>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}