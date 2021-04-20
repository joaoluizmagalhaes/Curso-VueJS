import {
    LISTAR_TAREFAS,
    CRIAR_TAEFA,
    EDITAR_TAREFA,
    DELETAR_TAREFA
} from './mutations-types'

export default {
    [LISTAR_TAREFAS]: (state, { tarefas }) => {
         state.tarefas = tarefas
    },
    [CRIAR_TAEFA]: (state, { tarefas }) => {
        state.tarefas.push(tarefa)
    },
    [EDITAR_TAREFA]: (state, { tarefas }) => {
        const indice = state.tarefas.findIndex( t => t.id === tarefa.id)
        state.tarefas.splice(indice, 1, tarefa)
    },
    [DELETAR_TAREFA]: (state, { tarefas }) => {
        const indice = state.tarefas.findIndex( t => t.id === tarefa.id)
        state.tarefas.splice(indice, 1)
    }

}