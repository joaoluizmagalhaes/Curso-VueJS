const space = {
    tarefas: []
}

const getters = {
    tarefasConcluidas: (state, /*getters,*/ rootState, /*rootGetters*/) => {
        console.log('Getters state: ', state, rootState)
        return state.tarefas.filter(t => t.concluido)
    },
    tarefasAFazer: state => state.tarefas.filter(t => !t.concluido),
    totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
    buscarTarefaPorID: state => id => state.tarefas.find(t => t.id === id),
    boasVindas: (state, getter, rootState, rootGetters) => {
        //state.tarefas // tarefas.tarefas
        //getters.tarefasAFazer 'tarefas/tarefasAFazer'
        console.log('State Global: ', rootState.usuario)
        console.log('Getter Global: ', rootGetters.mensagemBoasVindas)
        return rootGetters.mensagemBoasVindas
    }
}

const mutations = {
    listarTarefas: (state, { tarefas }) => {
         state.tarefas = tarefas
    }
}

const actions = {
    buscarTarefas: (/*context, payload*/) => {
        return new Promise((resolve, /*reject*/) => {
            setTimeout(() => {
                resolve([
                    { id: 1, titulo: 'Aprender Vue', concluido: true },
                    { id: 2, titulo: 'Aprender Vue Router', concluido: true },
                    { id: 3, titulo: 'Aprender Vuex', concluido: false }
                ])
            }, 2000)
        })
    },
    listarTarefas: async ({ commit, dispatch, state, rootState/*, getters, rootGetters */ }/*, payload*/) => {
        console.log('Action: listarTarefas')
        const tarefas = await dispatch('buscarTarefas')
        console.log('Mutation: listarTarefas')
        commit('listarTarefas', { tarefas })
        console.log('Actions state: ', state, rootState)

        //commit('logar', 'João Luiz') // tarefas/logar (não funciona)
        commit('logar', 'João Luiz', { root: true })

         //dispatch('logar', 'João Luiz') // tarefas/logar (não funciona)
         dispatch('logar', 'João Luiz', { root: true })
         //dispatch('logar', null, { root: true }) //caso não tiver payload

    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}