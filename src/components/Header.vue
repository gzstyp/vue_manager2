<template>
    <div>
        <i @click="showHide()" style="font-size: 24px;cursor: pointer;" title="隐藏|显示导航" :class="aside ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
        <el-dropdown>
            <span class="el-dropdown-link">
              <img :src="userImage" class="el-icon-arrow-down el-icon--right" style="cursor:pointer;width:32px;height:32px">
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus">个人信息</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">修改密码</el-dropdown-item>
                <el-dropdown-item icon="el-icon-close" @click.native="logout()">退出登录</el-dropdown-item><!--添加.native属性表示是支持原生的方法,因为组件 el-dropdown 不提供click方法-->
            </el-dropdown-menu>
        </el-dropdown>
        <label :to="current.path">{{current.label || '首页'}}</label>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        name : "Header",
        computed : {
            ...mapState({
                current : state => state.tab.currentMenu
            })
        },
        data(){
            return {
                aside : true,
                userImage : require('../assets/images/avatar.png')
            }
        },
        methods : {
            showHide() {
                this.aside = !this.aside;
                this.$store.commit('collapseMenu');
            },
            logout(){
                this.$store.commit('clearMenu');
                this.$store.commit('clearToken');
                //必须注意这个name，否则vue会提示[vue-router] Route with name '/' does not exist !!!,被炕了N多次!!!
                this.$router.push({name:'login'});//使用自定义通过name来进行跳转,所以需要给定一个name,采用的是编程式导航,进行页面跳转
            }
        }
    }
</script>
<style scoped>
</style>
