import Vue from 'vue'

/*const data = {
	titulo: 'Curso de VueJS',
	contador: 0
}*/

//Registrando o component globalmente
/*Vue.component('jm-component', {
	data: function() {
		return {
			titulo: 'Curso de VueJS',
			contador: 0
		}
	},
	methods: {
		incrementar: function() {
			this.contador++
		}
	},
	template: `
		<div>
			<h1>{{ titulo }}</h1>
			<button @click="incrementar">Clicado {{ contador }} vezes</button>
		</div>
	`
}) */

const jmComponent = {
	data: function() {
		return {
			titulo: 'Curso de VueJS',
			contador: 0
		}
	},
	methods: {
		incrementar: function() {
			this.contador++
		}
	},
	template: `
		<div>
			<h1>{{ titulo }}</h1>
			<button @click="incrementar">Clicado {{ contador }} vezes</button>
		</div>
	`
}

new Vue({
	el: '#app1',
	components: {
		'jm-component' : jmComponent //registrado localmente
	}
})

new Vue({
	el: '#app2'
})
