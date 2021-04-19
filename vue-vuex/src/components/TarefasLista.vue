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

import TarefaSalvar from '@/components/TarefaSalvar'
import TarefasListaIten from '@/components/TarefasListaIten'

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
        /*this.$store.dispatch('listarTarefas', {
            tarefas: [
                { id: 1, titulo: 'Aprender Vue', concluido: true },
                { id: 2, titulo: 'Aprender Vue Router', concluido: true },
                { id: 3, titulo: 'Aprender Vuex', concluido: false }
            ]
        })*/

        console.log('Usuário Atual: ', this.boasVindas )
        this.listarTarefas()
            .then(() => {
                console.log('Actions executadas')
                console.log('Usuário Atual: ', this.boasVindas )
            })


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