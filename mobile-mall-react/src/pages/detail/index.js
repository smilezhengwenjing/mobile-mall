import React, { PureComponent } from 'react';
import logo from '@/assets/images/product.jpg';
import Header from "@/pages/Home/components/header";
import Navbar from "@/pages/Home/components/navbar";
// import { post } from "@/utils/request";
import { BigPicWrapper,SmallPicWrapper,DetailWrapper } from './style';
export default class Detail extends PureComponent {
    constructor(props){
       super(props);
       this.state = {
         detailInfo:{}
       }
    }
    
    //在组件即将被挂载到页面的时刻自动执行，只在第一次被执行
    componentWillMount(){
        this.getDetail();
    }

    render() {
        return (
            <div>
                <Header/>
                <Navbar/>
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
                                <h3 className="goodsName">{this.state.detailInfo.title}</h3>
                                <div className="goodsId">
                                   <span>商品编号：{this.state.detailInfo.productId}</span>
                                   <span className="ms-3">品牌名称：{this.state.detailInfo.brandId}</span>
                                </div>
                                <div className="goodsId">
                                   <p>{this.state.detailInfo.desc}</p>
                                </div>
                                <div className="goodsPrice">
                                   <span className="priceTitle">价  格</span>
                                   <span className="priceContent ms-3">{this.state.detailInfo.price}</span>
                                   <span className="priceEnd ms-1">积分</span>
                                </div>
                                {
                                    this.state.detailInfo.attrList.map((item,index)=>{
                                        return(
                                            <div key={index}>
                                                <div className="goodsAttr mt-3">
                                                     <span className="attrTitle">{item.name}</span>
                                                     <div className="attrContent"> 
                                                         <ul>
                                                            {
                                                                item.attrList.map((item1,index1)=>{
                                                                    if(item1.clickedFlag){
                                                                        return(
                                                                            <li key={index1} className="active" onClick={()=>this.clickHandle(item,item1)}>
                                                                                 {item1.name}                                                                           
                                                                            </li>
                                                                        )
                                                                    }else{
                                                                        return(
                                                                        <li key={index1} onClick={()=>this.clickHandle(item,item1)}>
                                                                            {item1.name}                                                                           
                                                                        </li>
                                                                        )
                                                                    }
                                                                
                                                                })
                                                            } 
                                                         </ul>
                                                    </div>
                                                 </div>
                                            </div>
                                        )
                                    })
                                }
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
  
    //获取商品详情
    getDetail(){
        let data={
            imgInfo:{
                bigImgInfo:{
                    src:logo
                },
                smallImgList:[
                    {
                       src:logo
                    },
                    {
                       src:logo
                    },
                    {
                       src:logo
                    }
                ]
            },
            title:"2G日流量包",
            productId:"843042",
            brandId:"843042",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores quibusdam.",
            price:500,
            attrList:[
                {
                   name:"选择套餐",
                   attrList:[
                      {
                          name:"套餐1",
                          desc:""
                      },
                      {
                          name:"套餐2",
                          desc:""
                      },
                      {
                         name:"套餐3",
                         desc:""
                      },
                      {
                         name:"套餐4",
                         desc:""
                     },
                     {
                         name:"套餐5",
                         desc:""
                     }
                  ]
               },
               {
                  name:"选择支付方式",
                  attrList:[
                     {
                         name:"全积分",
                         desc:""
                     }
                 ]
              }
            ]
        }
        //初始化数据选中
        data.attrList.forEach((elem1)=>{
            elem1.attrList.forEach((elem2,index2)=>{
                if(index2===0){
                    elem2.clickedFlag = true;
                }
            })
        })
        this.setState({
         detailInfo:data
        })
        // let param = {
        //     productId:"123"
        // }
        // post('/product/getDetail',param).then((res) => {
        //     const resultCode = res.resultCode;
        //     if (resultCode===200) {
        //         this.setState({
        //             detailInfo:res.data
        //         })
        //     } 
        // })
    }
   
    //属性点击处理
    clickHandle(item,item1){
        //修改class状态
        item.attrList.forEach(elem=>{
            if(elem.name === item1.name){
                elem.clickedFlag = true;
            }else{
                elem.clickedFlag = false;
            }
        })
        //修改数组内部状态数据
        this.state.detailInfo.attrList.forEach(elem=>{
           if(elem.name === item.name){
               elem = item;
           }
        })
        //修改state中的值
        this.setState({
            detailInfo: Object.assign({},this.state.detailInfo)
        })
    }
}