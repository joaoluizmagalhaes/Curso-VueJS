<template>
    <div>
        <h3 class="font-weight-light">Cadastre um novo contato:</h3>

        <form @submit.prevent="salvar">
            <div class="form-group">
                <label for="">Nome</label>
                <input 
                    type="text" 
                    class="form-control"
                    placeholder="Insira o nome"
                    v-model="contato.nome"
                >
            </div>
            <div class="form-group">
                <label for="">Email</label>
                <input 
                    type="email" 
                    class="form-control"
                    placeholder="Insira o email"
                   v-model="contato.email"
                >
            </div>
            <button 
                class="btn btn-secondary mt-4 mb-4 mr-2"
                @click="$router.back()"
            >
                Voltar
            </button>
            <button type="submit" class="btn btn-success">
                Salvar
            </button>
        </form>

        
    </div>
</template>

<script>

import EventBus from '@/event-bus'

export default {
    props: ['id'],
    data() {
        return {
            contato: {},
            estaCancelando: true
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.contato = EventBus.buscarContato(+to.params.id)
        })
    },
    beforeRouteLeave(to, from, next) {
        this.estaCancelando
            ? next(window.confirm('Deseja realmente sair?'))
            : next()
    },
    methods: {
        salvar() {
            const novoContato = Object.assign({}, this.contato)
            EventBus.adicionarContato(novoContato)
            this.estaCancelando = false
            this.$router.push('/contatos')
        }
    }
}
</script>