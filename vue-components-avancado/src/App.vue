<template>
  <div id="app" class="container">
    
    <h1>Forma Padrão</h1>
  
    <PostsLista :posts="posts" />

    <hr>

    <h1>Slots com Escopo</h1>

    <PostsLista :posts="posts">
      <template slot-scope="slotProps">
        <h2>{{ slotProps.meuPost.titulo }}</h2>
        <p>{{ slotProps.meuPost.conteudo }}</p>
        <smal>{{ slotProps.meuPost.autor }}</smal>
      </template>
    </PostsLista>

  </div>
  
</template>

<script>

import PostsLista from './components/PostsLista.vue'

export default {
  components: {
    PostsLista
  },
  data() {
    return {
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