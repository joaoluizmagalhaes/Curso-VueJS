<template>
  <div id="app" class="container">
    
    <h1>Vue JS</h1>
    
    <Post>
      <h2 slot="cabecalho">Components no Vue</h2>

        <p >Components são uma das peças mais importantes no Vue</p>
        <span>...</span>
  
      <small slot="rodape">por João Luiz</small>

    </Post>

  </div>

</template>

<script>

import Post from './components/Post.vue'

export default {
  components: {
    Post
  }  
}
</script>

<style scoped>
  .container {
    width: 960px;
    margin: auto;
  }
</style>