import Vue from 'vue'

import App from './App.vue'
//import AppContador from './AppContador.vue'

//Vue.component('app-contador', AppContador)

new Vue({
	render: h => h(App)
}).$mount('#app')
