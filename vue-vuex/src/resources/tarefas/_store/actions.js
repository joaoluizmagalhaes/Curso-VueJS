import TarefasService from '../_services/TarefasService'
import * as types from './mutations-types'

export default {
    concluirTarefa: async({ dispatch }, payload) => {
        const tarefa = Object.assign({}, payload.tarefa)
        tarefa.concluido = !tarefa.concluido
        dispatch('editarTarefa', { tarefa })
    },
    listarTarefas: async ({ commit }) => {
        try {
            const response = await TarefasService.getTarefas()
        commit(types.LISTAR_TAREFAS, { tarefas: response.data })
        } catch(erro) {
            commit(types.SETAR_ERRO, { erro})
        }
    },
    criarTarefa: ({ commit }, { tarefa }) => {
        return TarefasService.postTarefa(tarefa)
            .then(response => commit(types.CRIAR_TAEFA, { tarefa: response.data}))
            .catch(erro => commit(type.SETAR_ERRO, { erro }))
    },
    editarTarefa: async ({ commit }, { tarefa }) => {
        const response = await TarefasService.putTarefa(tarefa)
        commit(types.EDITAR_TAREFA, { tarefa: response.data })
    },
    deletarTarefa: async ({ commit }, { tarefa }) => {
        const response = await TarefasService.deleteTarefa(tarefa.id)
        commit(types.DELETAR_TAREFA, { tarefa })
    },
    selecionarTarefa: ({ commit }, payload) => {
        commit(types.SELECIONAR_TAREFA, payload)
    },
    resetarTarefaSelecionada: ({ commit }) => {
        commit(types.SELECIONAR_TAREFA, { tarefa: undefined })
    }

}