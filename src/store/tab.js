export default {
    state : {
        isCollapse : false,
        menu : [],
        currentMenu : {},
        tabsList : [
            {
                path : '/',
                name : 'home',/*根据此name来进行页面跳转*/
                label : '首页',
                icon : 'el-icon-s-home'

            }
        ]
    },
    /*mutations [异步]处理菜单数据的功能,也就是使用vuex保存数据再通过vuex把数据传播出去*/
    mutations : {
        selectMenu(state,provider){
            if(provider.name !== 'home'){
                state.currentMenu = provider;
                let result = state.tabsList.findIndex(item => item.name === provider.name);
                if(result === -1){
                    state.tabsList.push(provider);
                }
            }else{
                state.currentMenu = {};
            }
        },
        closeTab(state,provider){
            let result = state.tabsList.findIndex(item => item.name === provider.name);
            state.tabsList.splice(result,1);
        },
        /*仅需一个参数,采用取反即可*/
        collapseMenu(state){
            state.isCollapse = !state.isCollapse;
        },
        /*保存菜单数据*/
        setMenu (state,provider){
            state.menu = provider;
            console.info('setMenu:'+provider);
            sessionStorage.setItem('menus',JSON.stringify(provider));//序列化,使用sessionStorage获取或保存是防止用户页面刷新而导致数据丢失
        },
        /*清除菜单,用于退出登录或防止二次登录*/
        clearMenu (state){
            state.menu = [];
            sessionStorage.removeItem('menus');
            sessionStorage.clear();
        },
        /*动态添加到路由,router是在登录成功后从那传递进来的,即在登录成功后触发*/
        addMenu(state,router){
            let menus = JSON.parse(sessionStorage.getItem('menus'));//反序列化
            if(!menus)return;
            state.menu = menus;//从 sessionStorage 获取或保存是防止用户页面刷新而导致数据丢失
            //动态拼接添加路由,先定义总体的路由,即
            let _currentMenu = [
                {
                    path : '/',
                    component : () => import(`@/views/Main`),
                    children : []//动态添加的都添加到它
                }
            ]
            //循环拼接添加到路由
            menus.forEach(item => {
                if(item.children){
                    item.children = item.children.map(item => {
                        item.component = () => import(`@/views/${item.url}`);//使用 $ 表示变量,可以拼接字符串|变量,注意用``包裹!
                        return item;
                    });
                    _currentMenu[0].children.push(...item.children);//...表示展开,push的是子页面
                }else{
                    item.component = () => import(`@/views/${item.url}`);
                    _currentMenu[0].children.push(item);//因为没有子页面,所以就直接 push 即可
                }
            })
            console.info('_currentMenu:'+_currentMenu);
            //this.$router.options.routes = routes;
            //this.$router.addRoutes(routes);
            //router.options.routes = routers;
            router.addRoutes(_currentMenu);

            /*let menus = JSON.parse(sessionStorage.getItem('menus'));
            if(!menus)return;
            state.menu = menus;
            let _currentMenu = [
                {
                    path : '/',
                    component : () => import(`@/views/Main`),
                    children : []
                }
            ]
            for(var index in menus){
                var object = menus[index];
                if(object.children){
                    _currentMenu[0].children.push(object.children);//... 表示展开
                }else{
                    _currentMenu[0].children.push(object);
                }
            }*/
            /*menus.forEach(item => {
                if(item.children){
                    item.children = item.children.map(item => {
                        item.component = () => import(`@/views/User`);
                        return item;
                    });
                    _currentMenu[0].children.push(...item.children);//... 表示展开
                }else{
                    item.component = () => import(`@/views/User`);
                    _currentMenu[0].children.push(item);
                }
            });*/
            //this.$router.options.routes = routes;
            //this.$router.addRoutes(routes);
            //router.options.routes = routers;
            //router.addRoutes(routers);
        }
    },
    actions: {
    }
}
