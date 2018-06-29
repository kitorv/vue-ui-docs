// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import DemoBlock from './components/demo-block.vue'
import install from '../src/index'
install(Vue);

Vue.config.productionTip = false
Vue.component("demo-block", DemoBlock);


new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
