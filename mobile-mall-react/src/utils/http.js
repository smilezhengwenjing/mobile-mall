import http from './index'
 
 
/**
 * 获取登录列表
 */
function getArticleList(){
  return  http("get","https://api.it120.cc/small4/cms/news/list");
}
 
export {
   getArticleList
}
// componentDidMount(){
//     getArticleList().then(
//      (res) => {
//          console.log("get article response:", res);
//      },
//     (error) => {
//          console.log("get response failed!");
//      }
//   )};

 