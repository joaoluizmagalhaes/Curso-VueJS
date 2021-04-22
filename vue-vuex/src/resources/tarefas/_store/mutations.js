import {
    LISTAR_TAREFAS,
    CRIAR_TAEFA,
    EDITAR_TAREFA,
    DELETAR_TAREFA,
    SELECIONAR_TAREFA,
    SETAR_ERRO
} from './mutations-types'

export default {
    [LISTAR_TAREFAS]: (state, { tarefas }) => {
         state.tarefas = tarefas
    },
    [CRIAR_TAEFA]: (state, { tarefa }) => {
        state.tarefas.push(tarefa)
    },
    [EDITAR_TAREFA]: (state, { tarefa }) => {
        const indice = state.tarefas.findIndex( t => t.id === tarefa.id)
        state.tarefas.splice(indice, 1, tarefa)
    },
    [DELETAR_TAREFA]: (state, { tarefa }) => {
        const indice = state.tarefas.findIndex( t => t.id === tarefa.id)
        state.tarefas.splice(indice, 1)
    },
    [SELECIONAR_TAREFA]: (state, { tarefa }) => {
        state.tarefaSelecionada = tarefa
    },
    [SETAR_ERRO]: (state, { erro }) => {
        state.erro = erro
    }

}