import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    login(context, credential){
      axios.post('http://127.0.0.1:8000/api/v1/login',{
        email: credential.email,
        password: credential.password
      }).then(res=>{
        localStorage.setItem('accessToken', res.data.data.access_token)
      }).catch(error=>{
        console.log(error)
      })
    }
  },
  modules: {
  }
})
