<template>
  <div id="app">

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">Treinando transição/animação de elementos/components no Vue.</p>
      </div>
    </div>

    <div class="container">
      
      <h3 class="font-weight-light">Animações de estado</h3>
      
      <div class="form-group">
        <input 
          class="form-control"
          v-model="numero"
          step="50"
        >
      </div>

      <div class="alert alert-info">
        <div class="font-weight-light">
          <strong>Número: </strong>
          <span>{{ numeroAnimado}}</span>
        </div>
      </div>

      <hr>


      <h3 class="font-weight-light">Tecnologias</h3>

      <div class="row">
        <div class="col-sm-2">
          <button class="btn btn-info" @click="embaralhar">Embaralhar</button>
        </div>

        <div class="col-sm-10">
          <div class="form-group">
            <input 
              type="text" 
              class="form-control"
              placeholder="Insira um novo inter e pressione enter"
              @keyup.enter="adicionar"
              ref="input"
            >
          </div>
        </div>
      </div>

      

      <transition-group tag="ul" class="list-group" name="slide">
        <li 
          class="list-group-item"
          v-for="(tecnologia, indice) in tecnologias"
          :key="tecnologia"
          >
            <span>{{ tecnologia }}</span>
            <button 
              class="btn btn-danger btn-sm float-right"
              @click="remover(indice)"  
            >
              x
            </button>
          </li>
      </transition-group>
      
      <hr>


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
      <transition

        appear
        appear-active-class="animate__animated animate__flipInY"

        @before-appear="beforeAppear"
        @appear="appear"
        @after-appear="afterAppear"
        @appear-cancelled="appearCancelled"

        enter-active-class="animate__animated animate__bounceInLeft"
        leave-active-class="animate__animated animate__bounceOutDown"
      >
        <div class="alert alert-primary" v-if="mostrar">Animate CSS</div>
      </transition>

      <transition

        appear

        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"

        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"

        :css="false"
      >
        <div class="alert alert-primary" v-if="mostrar">Animação JS</div>
      </transition>

      <hr>
      
      <div class="form-group">
        <label>Animações: </label>
        <select class="form-control" v-model="animacaoSelecionada">
          <option value="fade">Fade</option>
          <option value="zoom">Zoom</option>
          <option value="slide">Slide</option>
        </select>

      </div>

      <div class="form-group">
        <label>Mensagem: </label>
        <select class="form-control" v-model="alertaAtual">
          <option value="info">Info</option>
          <option value="warning">Alerta</option>
          <option value="success">Secesso</option>
        </select>

      </div>

      <transition :name="animacaoSelecionada" mode="out-in">
         <div :class="classesDeAlerta" :key="alertaAtual" >{{ animacaoSelecionada }}</div>
         
      </transition>

      <hr>

      <div class="form-group">
        <label>Component: </label>
        <select class="form-control" v-model="componentSelecionado">
          <option value="AppHome">Home</option>
          <option value="AppSobre">Sobre</option>
        </select>

      </div>

      <transition :name="animacaoSelecionada" mode="out-in">
        <component :is="componentSelecionado"></component>
   
      </transition>


    </div>


  </div>
</template>

<script>

import { shuffle } from 'lodash'
import { TweenLite } from 'gsap'

export default {
  components: {
    AppHome: () => import('./components/Home.vue'),
    AppSobre: () => import('./components/Sobre.vue')
  },
  data() {
    return {
      animar: true,
      mostrar: true,
      animacaoSelecionada: 'fade',
      alertaAtual: 'info',
      componentSelecionado: 'AppHome',
      tecnologias : [
        'JavaScript',
        'Vue JS',
        'Vuex',
        'Vue Router'
      ],
      numero: 0,
      numeroInterpolado: 0
    }
  },
  computed: {
    classesDeAlerta() {
      return {
        alert: true,
        [`alert-${this.alertaAtual}`]: true
      }
    },
    numeroAnimado() {
      return this.numeroInterpolado.toFixed(0)
    }
  },
  methods: {
    adicionar(event){
      const novoIten = event.target.value
      if (novoIten) {
        const indice = Math.floor(Math.random() * this.tecnologias.length)
        this.tecnologias.splice(indice, 0, novoIten)
        this.$refs.input.value = ''

      }
    },
    remover(indice) {
      this.tecnologias.splice(indice, 1)
    },
    embaralhar() {
      this.tecnologias = shuffle(this.tecnologias)
    },
    beforeAppear() {
      console.log('beforeAppear')
    },
    appear() {
      console.log('appear')
    },
    afterAppear() {
      console.log('afterAppear')
    },
    appearCancelled() {
      console.log('appearCancelled')
    },
    beforeEnter(el) {
      console.log('beforeEnter')
      el.style.opacity = 0
    },
    enter(el, done) {
      console.log('enter')
      
      let contagem = 0

      const intervalo = setInterval(() => {
        el.style.opacity = +el.style.opacity + 0.1
        contagem++

        if(contagem > 10) {
          clearInterval(intervalo)
          done()
        }

      }, 150)

      
    },
    afterEnter() {
      console.log('afterEnter')
    },
    enterCancelled() {
      console.log('enterCancelled')
    },
    beforeLeave(el) {
      console.log('beforeLeave')
      el.style.transition = 'width 0.1s'
      el.style.overflow = 'hidden'
      el.style.whiteSpace = 'nowrap'
    },
    leave(el, done) {
      console.log('leave')

      let contagem = 0

      const tamanho = el.offsetWidth

      const intervalo = setInterval(() => {
        el.style.width = (tamanho * (1 - (contagem / 10))) + 'px'
        contagem++

        if(contagem > 10) {
          clearInterval(intervalo)
          done()
        }


      }, 150)

    },
    afterLeave() {
      console.log('afterLeave')
    },
    leaveCancelled() {
      console.log('leaveCancelled')
    }
  },
  watch: {
    numero(novoNumero) {
      TweenLite.to(this.$data, 2, {numeroInterpolado: novoNumero})
    }
  }
}
</script>


<style scoped>

  .zoom-move,
  .slide-move,
  .fade-move {
    transition: all 1s;
  }

  .zoom-leave-active,
  .slide-leave-active,
  .fade-leave-active {
    position: absolute;
    width: calc( 100% - 100px);
  }

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