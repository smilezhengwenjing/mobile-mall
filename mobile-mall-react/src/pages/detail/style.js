import styled from 'styled-components';
export const InputWrapper = styled.input`
    width:200px;
    border:1px solid #999;
    border-radius:10px;
    height:30px;
`;


export const BigPicWrapper = styled.div`
   width:100%;
   height:500px;
   background-color:pink;
   border-radius:10px;
   img{
    width:100%;
    height:500px;
   }
`;
export const SmallPicWrapper = styled.div`
   width:100%;
   display:flex;
   justify-content:space-between;
   .smallImg{
      width:112px;
      height:112px;
      background-color:blue;
      border-radius:10px;
      img{
        width:100%;
      }
   }
`;

export const DetailWrapper = styled.div`
   padding:20px;
   .goodsName{
      font-weight:bold;
   }
   .goodsId{
      margin:10px 0;
      span{
         color:#999;
         font: 12px/1.5 punctuation,微软雅黑;
      }
   }
   .goodsPrice{
      margin:15px 0;
      padding:12px;
      width:100%;
      height:54px;
      background-color:#F0F0F0;
      border-radius:10px;
      .priceTitle{
         color:#999;
         font: 12px/1.5 punctuation,微软雅黑;
      }
      .priceContent{
         font-size: 24px;
         color: #e5008d;
      }
      .priceEnd{
         color: #e5008d;
      }
   }

   .goodsAttr{
      .attrTitle{
         color:#999;
         font: 12px/1.5 punctuation,微软雅黑;
      }
      .attrContent{
         display:inline-block;
         margin-left:10px;
         ul{
            display:flex;
            justify-content:space-between;
            li{
               border:1px solid #999;
               border-radius:2px;
               padding:5px;
               margin-left:10px;
               font: 12px/1.5 punctuation,微软雅黑;
               text-align: center;
               height: 35px;
               width: 70px;
               line-height: 25px;
            }
            li.more{
               margin-left:3px;
               border:none;
               color: #e5008d;
            }
            li.active{
               border:1px solid #e5008d;
               color: #e5008d;
            }
         }
      }
   }

   .btnGroup{
       margin:0 10px;
       button{
          width:48%;
          height:40px;
          padding:5px;
          border-radius:5px;
          font: 12px/1.5 punctuation,微软雅黑;
       }
       button.cart{
         background:#3eb4fa;
         color:white;
       }
       button.order{
         margin-left:2%;
         border:1px solid #999;
       }
   }
`;