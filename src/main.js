import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import mock from './mock/mock'
Vue.use(VueRouter)
let router  = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component: IndexPage
        }
    ]
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    router ,
    mock,
  render: h => h(Layout),
}).$mount('#app')
