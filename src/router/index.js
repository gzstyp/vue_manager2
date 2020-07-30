import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode : 'history',
  base : process.env.BASE_URL,
  routes : [
      /*已删除需要生成的动态路由,仅留一个登录页,此时需要在vuex里补充 mutations [异步]处理菜单数据的功能,也就是使用vuex保存数据再通过vuex把数据传播出去*/
      {
          path: '/login',/*注意层次结构*/
          name: 'login',
          component : () => import('@/views/Login')/*拼接懒加载*/
      }
  ]
});

export default router;
