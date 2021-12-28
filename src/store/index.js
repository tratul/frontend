import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

axios.defaults.baseURL= "http://127.0.0.1:8000"

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('accessToken') || null,
    isSuper: false
  },
  getters: {
    loggedIn(state){
      return state.token !== null
    },
    isSuper(state){
       return state.isSuper
    }
  },
  mutations: {
    setToken(state, data){
      state.token = data.access

      state.isSuper = data.is_superuser == true ? true : false
    
      // if(data.is_superuser == true){
      //   state.isSuper =true
      // }
      // else{
      //   state.isSuper =false
      // }
    },
    removeToken(state){
      state.token = null,
      state.isSuper= null
    }
  },
  actions: {
    login(context, credential){
      return new Promise((resolve, reject)=>{
        axios.post('/users/login/',{
          email: credential.email,
          password: credential.password
        }).then(res=>{
          // console.log(res.data)
          localStorage.setItem('accessToken', res.data.access)
          localStorage.setItem('refreshToken', res.data.refresh)
          localStorage.setItem('isSuper', res.data.is_superuser)
          context.commit('setToken', res.data)
           resolve(res.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    register(context, formdata){
      return new Promise((resolve, reject)=>{
        axios.post('users/register/',{
          name: formdata.name,
          email: formdata.email,
          password: formdata.password
        }).then(res=>{
           resolve(res.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    logout(context){
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      return new Promise((resolve, reject)=>{
        axios.post('/users/logout/',{
           refresh: localStorage.getItem('refreshToken'),
        }).then(res=>{
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')
          localStorage.removeItem('isSuper')
          context.commit('removeToken')
           resolve(res.data)
        }).catch(error=>{
          reject(error)
        })
      })
    }
  },
  modules: {
  }
})
