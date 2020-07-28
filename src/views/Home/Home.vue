<template>
    <div>首页|欢迎页</div>
</template>
<script>
    export default {
        name : "Home",
        mounted(){
            this.$http.get('/home/getData').then(data =>{
                console.info(data);
            }).catch(err =>{
                console.info(err);
            });
        }
    }
</script>
<style scoped>
</style>
