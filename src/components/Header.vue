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
                location.reload();//重新加载页面,也就是刷新!
            }
        }
    }
</script>
<style scoped>
</style>
