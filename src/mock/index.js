import Mock from 'mockjs';
import home from "./home";
import permission from "./permission";

//设置延时,200-2000毫秒的随机数
Mock.setup({
    timeout : '200-2000'
});
//指定拦截哪一个请求,这里的首页相关
Mock.mock(/\/home\/getData/,'get',home.getHomeData);// 两个 // 表示正则表达式,因为用到了转义符,此处拦截的意思 /home/getData
// 权限相关
Mock.mock(/\/permission\/getMenu/, 'post',permission.getMenu);