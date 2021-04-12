<template>
    <div>
        <h2>Sobre</h2>

        <p>Autor: {{ autor }}</p>
        <input type="text" v-model="autor">
    </div>
</template>

<script>
export default {
    data() {
        return {
            autor: ''
        }
    },
    created() {
        console.log('Created')
    },
    destroyed() {
        console.log('Destroyed')
    }
}
</script>