<template>
  <div id="app">

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">Treinando transição/animação de elementos/components no Vue.</p>
      </div>
    </div>

    <div class="container">

      <button class="btn btn-primary mb-3" @click="mostrar = !mostrar">Alternar</button>
      <transition name="fade">
        <div class="alert alert-primary" v-if="mostrar">Fade</div>
      </transition>
      <transition name="zoom">
        <div class="alert alert-primary" v-if="mostrar">Zoom</div>
      </transition>
      <transition name="slide" type="animation" :duration="{ enter: 1200, leave: 500 }">
        <div class="alert alert-primary" v-if="mostrar">Slide</div>
      </transition>

      <hr>

      <transition
        enter-active-class="animate__animated animate__bounceInDown"
        leave-active-class="animate__animated animate__bounceOutDown"
      >
        <div class="alert alert-primary" v-if="mostrar">Animate CSS</div>
      </transition>

    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: true
    }
  }
}
</script>

<style >
  body {
    overflow: hidden;
  }
</style>

<style scoped>

  .zoom-enter,
  .zoom-leave-to {
    transform: scale(0);
  }

  .zoom-enter-active,
  .zoom-leave-active {
    transition: transform 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }

  .slide-enter,
  .slide-leave-to {
    opacity: 0;
  }

  .slide-enter-active{
    animation: slide 0.7s ease-in-out;
    transition: opacity 1s;
  }

  .slide-leave-active {
    animation: slide 0.7s reverse;
    transition: opacity 1s;
  }

  @keyframes slide {
    0% {
      transform: translateX(-100px)
    }

    100% {
      transform: translateX(0px);
    }
  }


</style>