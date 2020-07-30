export default {
    state : {
        token : ''
    },
    mutations : {
        setToken(state,provider){
            state.token = provider;
            sessionStorage.setItem('token',provider);
        },
        clearToken(state){
            state.token = ''
            sessionStorage.removeItem('token');
            sessionStorage.clear();
        },
        getToken(state){
            state.token = sessionStorage.getItem('token');
            console.info('token:'+state.token);
        }
    },
    actions: {}
}
