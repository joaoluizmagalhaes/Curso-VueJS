<template>
  <div id="app" class="container">
    
    <h1>Components Dinâmicos</h1>

    <button @click="componentSelecionado = 'Home' ">Home</button>
    <button @click="componentSelecionado = 'Sobre' ">Sobre</button>
    <button @click="componentSelecionado = 'PostsLista' ">Posts</button>
    <button @click="componentSelecionado = 'Assincrono' ">Assincrono</button>
    
    <keep-alive :exclude="['Home', 'PostsLista']">
      <component 
        :is="componentSelecionado"
        v-bind="propsAtuais">
      </component> 
    </keep-alive>

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
    Sobre,
    Assincrono: () => ({
      component: new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(import('./components/Assincrono.vue'))
          reject('Carregamento falhou!')
        }, 2000)
      }),
      loading: { template: '<p>Carregando...</p>' },
      error: { template: '<p>Erro ao carregaro o component!</p>'},
      delay: 200,
      timeout: 3000
    })
  },
  data() {
    return {
      componentSelecionado: 'Home',
      posts: [
        { id: 1, titulo: 'Components no Vue', conteudo: 'Components são uma das peças mais importantes no VueJS.', autor: 'João Luiz'},
        { id: 2, titulo: 'Distribuindo conteúdo co Slots', conteudo: 'Slots podem ser usados como repositórios de código HTLM', autor: 'Joao'}
      ]
    }
  },
  computed: {
    propsAtuais() {
      return this.componentSelecionado === 'PostsLista'
        ? { posts: this.posts }
        : {}
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