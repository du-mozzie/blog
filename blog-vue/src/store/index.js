import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //直接从Storage中获取
        token: '',
        userInfo: JSON.parse(sessionStorage.getItem("userInfo"))
    },
    mutations: {
        // set
        SET_TOKEN: (state, token) => {
            state.token = token
            //存储到localStorage，关闭浏览器下次还能获取到
            localStorage.setItem("token", token)
        },
        SET_USERINFO: (state, userInfo) => {
            state.userInfo = userInfo
            //sessionStorage，本次会话都会存在，不能存对象要把userInfo序列化
            sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
        },
        REMOVE_INFO: (state) => {
            state.token = ''
            state.userInfo = {}
            localStorage.setItem("token", '')
            sessionStorage.setItem("userInfo", JSON.stringify({}))
        },

    },
    getters: {
        // getUser
        getUserInfo: state => {
            return state.userInfo
        },
        // getToken
        getToken: state => {
            return state.token
        }
    },
    actions: {},
    modules: {}
})
