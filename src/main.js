import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/style/global.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入全局的axios库及它的全局配置
import http from '@/api/config';
import './mock';//引入mock

Vue.config.productionTip = false;

Vue.use(ElementUI);
/*添加到Vue组件里,调用方式: this.$http.xxx */
Vue.prototype.$http = http;

router.beforeEach((to, from, next) =>{

    console.info('*************');
    console.info(to.name);//输出: login
    console.info(to.fullPath);//输出:  /login
    console.info(to.params);//输出: {}
    console.info(to.path);//输出: /login
    console.info(to.query);//输出: {}
    console.info('---------------');

    //如果用户访问登录页,直接放行
    if(to.path === '/login') return next();
    //从 sessionStorage 获取已登录保存的token信息
    var token = sessionStorage.getItem('token');
    //如果没有token强制跳转到登录页
    if(!token)return next('/login');
    next();
});

/*router.beforeEach((to, from, next) => {
    // 防止刷新后vuex里丢失token
    store.commit('getToken');
    const token = store.state.user.token;
    // 防止刷新后vuex里丢失标签列表tagList
    store.commit('getMenu',router);

    console.info('*************');
    console.info(to.name);//输出: login
    console.info(to.fullPath);//输出:  /login
    console.info(to.params);//输出: {}
    console.info(to.path);//输出: /login
    console.info(to.query);//输出: {}
    console.info('---------------');

    // 过滤登录页，防止死循环
    if (!token && to.name !== 'login') {
        next({ name : 'login' });//注意这个name
    } else {
        if(to.name ==='login'){
            next();
        }
        next();
    }
});*/

new Vue({
    router,
    store,
    render: h => h(App),
    /*create(){
        console.info('走你???!');
        //store.commit('addMenu',router);//在页面被刷新后需要重新加载当前的动态路由,还有一处就是在 src/views/Login.vue 登录成功后触发
    }*/
}).$mount('#app');
