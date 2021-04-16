import Vue from 'vue'
import VueRouter from 'vue-router'

import Erro404 from './views/Erro404.vue'
import Erro404Contatos from './views/contatos/Erro404Contatos.vue'
import EventBus from './event-bus.js'

const Contatos = () => import(/* webpackChunkName: "contatos" */ './views/contatos/Contatos.vue')
const ContatoDetalhes = () => import(/* webpackChunkName: "contatos" */ './views/contatos/ContatoDetalhes.vue')
const ContatosHome = () => import(/* webpackChunkName: "contatos" */ './views/contatos/ContatosHome.vue')
const ContatoEditar = () => import(/* webpackChunkName: "contatos" */ './views/contatos/ContatoEditar.vue')
const ContatoNovo = () => import(/* webpackChunkName: "contatos" */ './views/contatos/ContatoNovo.vue')
const Home = () => import('./views/Home.vue')
const Login = () => import('./views/login/Login.vue')



Vue.use(VueRouter)

const extrairParametroId =  route => ({
    id: +route.params.id
})

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPositioin) {
        //return { x: 0, y: 250 }
        return new Promise((resolve, /*reject*/) => {
            setTimeout(() => {
                if(savedPositioin) {
                    return resolve(savedPositioin)
                }
                if(to.hash) {
                    return resolve ({
                        selector: to.hash,
                        offset: { x: 0, y: 0 }
                    })
                }
                resolve( { x: 0, y: 0 } )
            }, 3000)
        })
  },
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
                path: '/contatos/novo',
                component: ContatoNovo,
                name: 'novo'
            },
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
                meta: {
                    requerAutenticacao: true
                },
                beforeEnter(to, from, next) {
                    console.log('beforeEnter')
                    next()
                    //mext(true)
                    //next(false)
                    //next('/contatos')
                    //next({ path: 'contatos })
                    //next(new Error(`Permissão insuficiante para acessar o recurso "${to.fullPath}"`))
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
    { path: '/login', component: Login },
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
    console.log('Requer Autenticação?', to.meta.requerAutenticacao)
    const estaAutenticado = EventBus.autenticado
    if(to.matched.some(rota => rota.meta.requerAutenticacao) ) {
        if(!estaAutenticado) {
            next({
                path: '/login',
                query: { redirecionar: to.fullPath}
            })
            return
        }
    }
    next()
})

router.beforeResolve((to, from, next) => {
    console.log('beforeResolve')
    next()

})

router.afterEach((/*to, from*/) => {
    console.log('afterEach')
})

router.onError(erro => {
    console.log(erro)
})

export default router
