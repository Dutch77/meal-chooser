import Vue from 'vue'
import App from './App.vue'

window.onload = function () {
  const vue = new Vue({
    el: '#app',
    test: '666',
    render: h => h(App)
  })
  window.vm = vue;
}
