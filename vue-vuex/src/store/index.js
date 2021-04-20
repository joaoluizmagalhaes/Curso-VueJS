import Vue from 'vue'
import Vuex from 'vuex'

import contador from '@/resources/contador/_store/index'
import tarefas from '@/resources/tarefas/_store/index'

Vue.use(Vuex)

const state ={
    usuario: 'Joao'
}

const getters = {
    mensagemBoasVindas: state => `Olá ${state.usuario}`
}

const actions = {
    logar: ({ commit }, usuario) => {
        commit('logar', usuario)
    }
}

const mutations = {
    logar: (state, usuario) => {
        state.usuario = usuario
    }
}

const modules = {
    contador,
    tarefas
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules
})

export default store