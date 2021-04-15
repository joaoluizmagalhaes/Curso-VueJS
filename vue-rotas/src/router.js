import Vue from 'vue'
import VueRouter from 'vue-router'

import Contatos from './views/contatos/Contatos.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoEditar from './views/contatos/ContatoEditar.vue'
import Erro404 from './views/Erro404.vue'
import Erro404Contatos from './views/contatos/Erro404Contatos.vue'
import Home from './views/Home.vue'

Vue.use(VueRouter)

const extrairParametroId =  route => ({
    id: +route.params.id
})

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { 
        path: '/contatos', 
        alias: [ '/meus-contatos', '/lista-de-contatos' ],
        props: (route) => {
            const busca = route.query.busca
            return busca ? { busca } : {}
        },
        component: Contatos, 
        children: [
            { 
                path: ':id(\\d+)', 
                component: ContatoDetalhes, 
                name: 'contato',
                props: extrairParametroId,
            },
            { 
                //path: ':id(\\d+)/editar/:opcional?', 
                //path: ':id(\\d+)/editar/:zeroOuMais*', 
                //path: ':id(\\d+)/editar/:umOuMais+', 
                path: ':id(\\d+)/editar/',
                alias: ':id(\\d+)/alterar',
                beforeEnter(to, from, next) {
                    console.log('beforeEnter')
                    if(to.query.autenticado === 'true') {
                        next()
                        return
                    }
                    
                },
                components: {
                    default: ContatoEditar,
                    'contato-detalhes': ContatoDetalhes
                }, 
                props: {
                    default: extrairParametroId,
                    'contato-detalhes': extrairParametroId
                }
            },
            { 
                path: '', 
                component: ContatosHome, 
                name: 'contatos' 
            },
            {
                path: '/contatos/*',
                component: Erro404Contatos
            },
        ] 
    },
    { path: '/home', component: Home },
    //{ path: '/', redirect: '/contatos'  }
    { 
        path: '/', 
        redirect: () => {
            //return '/contatos'
            return { name: 'contatos'}
        }
    },
    {
        path: '*',
        component: Erro404
    }
  ]
})

router.beforeEach((to, from, next) => {
    console.log('beforeEach')
    next()
})

router.afterEach((/*to, from*/) => {
    console.log('afterEach')
})

export default router
