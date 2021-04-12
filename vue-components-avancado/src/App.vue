<template>
  <div id="app" class="container">
    
    <h1>Components Dinâmicos</h1>

    <button @click="componentSelecionado = 'Home' ">Home</button>
    <button @click="componentSelecionado = 'Sobre' ">Sobre</button>
    <button @click="componentSelecionado = 'PostsLista' ">Posts</button>

    <p>{{ componentSelecionado }}</p>

    <component :is="componentSelecionado"></component> 

  </div>
  
</template>

<script>

import Home from './components/Home.vue'
import Sobre from './components/Sobre.vue'
import PostsLista from './components/PostsLista.vue'

export default {
  components: {
    Home,
    PostsLista,
    Sobre
  },
  data() {
    return {
      componentSelecionado: 'Home',
      posts: [
        { id: 1, titulo: 'Components no Vue', conteudo: 'Components são uma das peças mais importantes no VueJS.', autor: 'João Luiz'},
        { id: 2, titulo: 'Distribuindo conteúdo co Slots', conteudo: 'Slots podem ser usados como repositórios de código HTLM', autor: 'Joao'}
      ]
    }
  }
}
</script>

<style scoped>
  .container {
    width: 960px;
    margin: auto;
  }


</style>