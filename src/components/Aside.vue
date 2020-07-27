<template>
    <el-menu :collapse="isCollapse"
        default-active="2"
        class="menu-vertical"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item :index="''+item.path" v-for="(item,index) in noChildren" :key="item.path" @click="clickMenu(item)">
            <i :class="item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu :index="''+item.path" v-for="(item,index) in hasChildren" :key="index">
            <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.label}}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item :index="''+subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">
                    <i :class="subItem.icon"></i>
                    <span slot="title">{{subItem.label}}</span>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>
<script>
    export default {
        name : "Aside",
        /*计算属性*/
        computed : {
            noChildren(){
                return this.asideMenu.filter(item => !item.children);//无子页面
            },
            hasChildren(){
                return this.asideMenu.filter(item => item.children);//有子页面
            },
            isCollapse(){
                return this.$store.state.tab.isCollapse;/*这个 isCollapse 变量是在 Header 的方法 showHide()｛this.$store.commit('collapseMenu');}赋值的 */
            }
        },
        data(){
            return {
                asideMenu : [
                    {
                        path : '/',
                        name : 'home',
                        label : '首页',
                        icon : 'el-icon-s-home'

                    },
                    {
                        path : '/video',
                        name : 'video',
                        label : '视频管理',
                        icon : 'el-icon-video-camera'
                    },
                    {
                        path : '/user',
                        name : 'user',
                        label : '用户管理',
                        icon : 'el-icon-user'
                    },
                    {
                        label : '其他页面',
                        icon : 'el-icon-monitor',
                        children : [
                            {
                                path : '/page1',
                                name : 'page1',
                                label : '页面1',
                                icon : 'el-icon-present'
                            },
                            {
                                path : '/page2',
                                name : 'page2',
                                label : '页面2',
                                icon : 'el-icon-setting'
                            }
                        ]
                    }
                ]
            }
        },
        methods : {
            /*点击导航菜单时跳转页面*/
            clickMenu(item){
                this.$router.push({name : item.name});//自定义通过name来进行跳转,即点击左边的导航菜单进行页面跳转,采用的是函数式编程,当有r时是路由,没有r的是参考路由信息
                this.$store.commit('selectMenu',item);
            }
        }
    }
</script>
<style scoped>
    .el-menu{
        height:100vh;
        border-right: none;
    }
    .menu-vertical:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>
