export default {
    tarefasConcluidas: (state) => state.tarefas.filter(t => t.concluido),
    tarefasAFazer: state => state.tarefas.filter(t => !t.concluido),
    totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
    buscarTarefaPorID: state => id => state.tarefas.find(t => t.id === id),
    boasVindas: (state, getter, rootState, rootGetters) => rootGetters.mensagemBoasVindas
    
}