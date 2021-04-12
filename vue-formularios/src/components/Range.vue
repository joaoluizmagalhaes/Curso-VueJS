<template>
    <div>
        <label>{{ customLabel }}</label>
        <input 
            type="range"
            v-bind="$attrs"
            :value="value"
            :class="inputClasses"
            @input="atualizar"   
        >
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: { 
        label: String,
        value: [Number, String],
        inputClasses: [String, Object, Array]
    },
    data() {
        return {
            valorAtual: this.value || this.$attrs.min
        }
    },
    computed: {
        customLabel() {
            return `${this.label} (R$ ${this.valorAtual})`
        }
    },
    created() {
        console.log('Attrs ', this.$attrs)
    },
    methods: {
        atualizar(event) {
            const valor = event.target.value
            this.$emit('input', valor)
            this.valorAtual = valor
        }
    }
}
</script>