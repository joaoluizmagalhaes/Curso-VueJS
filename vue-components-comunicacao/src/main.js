import Vue from 'vue'
//import App from './App.vue'
import FilmesListaIten from './components/FilmesListaIten.vue'

Vue.config.productionTip = false

new Vue({
  //render: h => h(App),
  components: {
    FilmesListaIten
  }
}).$mount('#app')
