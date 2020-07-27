export default {
    state : {
        isCollapse : false,
        menu : [],
        currentMenu : {},
        tabsList : [
            {
                path : '/',
                name : 'home',
                label : '首页',
                icon : 'el-icon-s-home'

            }
        ]
    },
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
        setMenu (state,provider){
            state.menu = provider;
            sessionStorage.setItem('menus',JSON.stringify(provider));
        },
        clearMenu (state){
            state.menu = [];
        },
        addMenu(state,router){
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
                    console.info(item);
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
