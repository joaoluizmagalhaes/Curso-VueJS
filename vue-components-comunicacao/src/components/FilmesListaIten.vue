<template>
    <li class="list-group-item">
        <span>{{ filmeTituloConcatenado }}</span>
        <button class="btn btn-success float-right">Editar</button>
    </li>
</template>
<script>
export default {
    props: {
        filmeTitulo: String
    },
    computed: {
        filmeTituloConcatenado() {
            return `Título: ${this.filmeTitulo}`
        }
    },
    created() {
        console.log(typeof this.filmeTitulo)
    }
}
</script>
