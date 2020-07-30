import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode : 'history',
  base : process.env.BASE_URL,
  routes : [
      {
          path : '/',
          component : () => import('@/views/Main'),
          children : [
              {
                  path : '/',
                  name : 'home',//别名,可以通过别名 name 来进行页面跳转
                  component : () => import('@/views/Home/Home')
              },
              {
                  path : '/video',
                  name : 'video',
                  component : () => import('@/views/VideoManage/VideoManage')
              },
              {
                  path : '/user',
                  name : 'user',
                  component : () => import('@/views/UserManage/UserManage')
              },
              {
                  path : '/page1',
                  name : 'page1',
                  component : () => import('@/views/Other/PageOne')
              },
              {
                  path : '/page2',
                  name : 'page2',
                  component : () => import('@/views/Other/PageTwo')
              }
          ]
      }
  ]
});

export default router;
