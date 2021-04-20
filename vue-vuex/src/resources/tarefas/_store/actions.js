export default {
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
    listarTarefas: async ({ commit, dispatch }/*, payload*/) => {
        const tarefas = await dispatch('buscarTarefas')
        commit('listarTarefas', { tarefas })
        commit('logar', 'João Luiz', { root: true })
        dispatch('logar', 'João Luiz', { root: true })
    }
}