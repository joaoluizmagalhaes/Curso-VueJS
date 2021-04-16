<template>
    <li>
        <span>{{ contato.nome }}</span>
        <router-link 
            :to="{ 
                path: `/contatos/${ contato.id }`
            }"
            class="btn btn-info" 
        >
            Detalhes
        </router-link>    
        <button class="btn btn-danger ml-4" @click="apagarContato">X</button>
        <!-- <button
            class="btn btn-info btnsm float-right" 
            @click="verDetalhes"
        >
            Detalhes
        </button> -->
    </li>
</template>

<script>

import EventBus from '@/event-bus'

export default {
    props: {
        contato: {
            type: Object,
            required: true
        }
    },
    methods: {
        verDetalhes() {
            //this.$router.push(`/contatos/${this.contato.id}`)
            //this.$router.push({ path: `/contatos/${this.contato.id}` })
            //this.$router.push({ path: '/contatos/', params : { id = this.contato.id } })
            //this.$router.push({ name: 'contato', params : { id: this.contato.id } })
            //this.$router.replace({ name: 'contato', params : { id: this.contato.id } })
        },
        apagarContato(){
            //console.log(this.contato)
            EventBus.apagarContato(this.contato)
        }
    }
}
</script>

<style scoped>
    li {
        display: flex;
        justify-content: space-between;
    }
    span {
        width: 85%;
        padding: .375rem .75rem;
    }
</style>