import axios from "axios";
//创建axios实例
const service = axios.create({
    timeout:3000
});

//请求拦截器,好使!!!但需要后端要支持才行
service.interceptors.request.use(function(config){
    config.headers.access_token = '2020053188889999';
    config.headers.refresh_token = '2020053199998888';
    return config;
},error => {
    console.info(error);
});

//响应拦截器,在实际应用中可以,好使!!!
service.interceptors.response.use((data) =>{
    var data = data.data;
    if(data.code === 200){
        var renewal = data.renewal;//在实际项目要注意该更新token标识
        if(renewal){
            //更新令牌
        }
    }
    return data.data;
},error => {
    console.info(error);
});

export default service;//导出，方便其他调用!!!
