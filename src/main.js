import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import MainView from './components/MainView'
import MyReposView from './components/MyReposView'
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss'
import '../node_modules/font-awesome/css/font-awesome.css'

Vue.use(VueRouter)

let router = new VueRouter()

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

router.map({
  '/': {
    component: MainView
  },
  '/myrepos': {
    component: MyReposView
  }
})

router.start(App, 'body')
