import axios from 'axios'
import Element from 'element-ui'
import router from './router'
import store from './store'

axios.defaults.baseURL = "http://localhost:8080"

//前置拦截
axios.interceptors.request.use(config => {
    // console.log("前置请求");
    //可以统一设置请求头
    return config
})

//后置拦截
axios.interceptors.response.use(
    response => {
        const res = response.data;
        // console.log("后置请求");
        if (res.code === 200) {
            return response;
        } else {
            Element.Message({
                message: res.msg,
                type: "error",
                duration: 3 * 1000
            })
            return Promise.reject(response.data)
        }
    },
    error => {
        console.log(error);
        if (error.response.data) {
            error.message = error.response.data.msg;
        }
        if (error.response.status === 401) {
            store.commit("REMOVE_INFO");
            router.push("/login")
        }
        if (error.response.status === 403) {
            error.message = '权限不足，无法访问';
        }
        Element.Message({
            message: error.message,
            type: "error",
            duration: 3 * 1000
        })
        return Promise.reject(error);
    }
)
