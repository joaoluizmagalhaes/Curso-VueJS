import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        usuario: 'Joao'
    },
    getters: {
        mensagemBoasVindas: state => `Olá ${state.usuario}`
    },
    actions: {
        logar: ({ commit }, usuario) => {
            commit('logar', usuario)
        }
    },
    mutations: {
        logar: (state, usuario) => {
            state.usuario = usuario
        }
    },
    modules: {
        contador: contadorModule,
        tarefas: tarefasModule
    }
})

console.log('Store: ', store)

export default store