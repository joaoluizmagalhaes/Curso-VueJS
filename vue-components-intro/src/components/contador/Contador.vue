<template>
    <div :class="$style.contador">
        <h2>Clicado {{ contador }} vezes</h2>
        <button @click="incrementar">Incrementar</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contador: 0
            }
        },
        methods: {
            incrementar() {
                this.contador++
            }
        },
        created() {
            console.log('Css modules: ', this.$style)
        }
    }
</script>

<style module>
    .contador {
        border: solid 1px red;
    }
</style>