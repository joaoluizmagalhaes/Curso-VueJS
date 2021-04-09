<template>
  <div id="app" class="container">
    
    <h1>Vue JS</h1>
    
    <Post>
      <h2 slot="cabecalho">Components no Vue</h2>

        <p class="post-paragrafo">Components são uma das peças mais importantes no Vue</p>
        <span>...</span>
  
      <small slot="rodape">{{ autor }}</small>

    </Post>

  </div>

</template>

<script>

import Post from './components/Post.vue'

export default {
  components: {
    Post
  },
  data() {
    return {
      autor: 'João'
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