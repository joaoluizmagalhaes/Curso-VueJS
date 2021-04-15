<template>
    <div>
        <router-link 
                :to="{ path: '/contatos/novo' }" 
                class="btn btn-success mb-4 mr-2"
            >
                Cadastrar Contato
        </router-link>
        <ContatosLista :busca="busca" />
        
    </div>
</template>

<script>

import ContatosLista from './../../components/contatos/ContatoLista.vue'

export default {
    components: {
        ContatosLista
    },
    props: [ 'busca' ]
}
</script>