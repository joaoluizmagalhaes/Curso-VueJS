<template>
    <div>
        <div class="row">
            <div class="col-sm-10">
                <h1 class="font-weight-light">Lista de Tarefas</h1>
            </div>
            <div class="col-sm-2">
                <button 
                    class="btn btn-primary float-right"
                    @click="exibirFormularioCriarTarefa"
                >   
                    <i class="fa fa-plus mr-2"></i><span>Criar</span>
                </button>
                </div>
        </div>

        <h3 class="font-weight-light mt-4">A Fazer ( {{ tarefasAFazer.length }} )</h3>

        <ul class="list-group" v-if="tarefasAFazer.length > 0">

            <TarefasListaIten 
                v-for="tarefa in tarefasAFazer"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao"
            />

        </ul>

        <p v-else>Nenenhuma tarefa a fazer.</p>

        <h3 class="font-weight-light mt-4">Concluidas ( {{ totalDeTarefasConcluidas }} )</h3>

        <ul class="list-group" v-if="tarefasConcluidas.length > 0">

            <TarefasListaIten 
                v-for="tarefa in tarefasConcluidas"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao"
            />

        </ul>

        <p v-else>Nenenhuma tarefa concluida.</p>

        
        <TarefaSalvar 
            v-if="exibirFormulario"
            :tarefa="tarefaSelecionada"
        />
    </div>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'


import register from './../_store/register'
import TarefaSalvar from './TarefaSalvar'
import TarefasListaIten from './TarefasListaIten'

const { mapActions, mapGetters, mapState } = createNamespacedHelpers('tarefas')

export default {
    components: {
        TarefaSalvar,
        TarefasListaIten
    },
    data() {
        return {
            exibirFormulario: false,
            tarefaSelecionada: undefined   
        }
    },
    computed: {
        ...mapState(['tarefas']),
        ...mapGetters([
            'tarefasAFazer', 
            'tarefasConcluidas', 
            'totalDeTarefasConcluidas',
            'boasVindas'
        ])
    },
    created() {

        register(this.$store)

        setTimeout(async () => {
            
            console.log('Usuário Atual: ', this.boasVindas )
            
            await this.listarTarefas()
               
            console.log('Actions executadas')

            console.log('Usuário Atual: ', this.boasVindas )
            
            }, 1000)
        console.log('Boas vindas: ', this.boasVindas )
    },
    methods: {
        ...mapActions({
            carregarTarefas: 'listarTarefas',
            listarTarefas: (dispatch, payload, options) => {
                return dispatch('listarTarefas', payload, options)
            }
        }),
        exibirFormularioCriarTarefa() {
            if(this.tarefaSelecionada) {
                this.tarefaSelecionada = undefined
                return
            }
            this.exibirFormulario = !this.exibirFormulario
        },
        selecionarTarefaParaEdicao(tarefa) {
            this.exibirFormulario = true
            this.tarefaSelecionada = tarefa
        },
        resetar() {
            this.exibirFormulario = false
            this.tarefaSelecionada = undefined
        }
    }
}
</script>