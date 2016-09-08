import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import MainView from './components/MainView'
import MyReposView from './components/MyReposView'

Vue.use(VueRouter)

let router = new VueRouter()

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

router.map({
  '/': {
    component: MainView
  },
  '/myrepos': {
    component: MyReposView
  }
})
