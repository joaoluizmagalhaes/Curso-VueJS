<template>
    <div>
        <h2>Contador Vue</h2>
        <hr>
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
    }
}
</script>

<style scoped>
    div {
        border: solid 1px green;
    }
</style>