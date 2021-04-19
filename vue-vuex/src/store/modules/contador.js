const getters = {
    contadorAtual: state => state.contador
}

const state =  {
    contador: 0,
}

export default {
    namespaced: true,
    state,
    getters
}