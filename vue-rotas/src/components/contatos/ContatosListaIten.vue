<template>
    <li>
        <span>{{ contato.nome }}</span>
        <router-link 
            :to="`/contatos/${contato.id}`"
            class="btn btn-info btnsm float-right" 
        >
            Detalhes
        </router-link>    
    </li>
</template>

<script>
export default {
    props: {
        contato: {
            type: Object,
            required: true
        }
    }
}
</script>