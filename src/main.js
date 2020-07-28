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

new Vue({
    router,
    store,
    render: h => h(App),
    create(){
        store.commit(('addMenu',router));
    }
}).$mount('#app');
