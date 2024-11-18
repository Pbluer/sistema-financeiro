<template>
    <div class="main">
        <MenuLateral />
        <Alert v-show="alert.show" :descricao="alert.descricao" :titulo="alert.titulo" :type="alert.type" />
        <div class="content">
            <div class="form">
                <div class="border-b-2 border-blue-700 mb-5 pb-5 w-full">
                    <ButtonBase id="pesquisar" titulo="Cadastrar" @click="cadastrarCartao()" />
                </div>

                <div class="overflow-x-auto w-[90vw] 
                    sm:w-[35rem]
                    md:w-[40rem]
                    lg:w-[55rem]">
                    <table class="border-l-2 border-r-2 border-blue-500 w-full text-center">
                        <thead class="bg-blue-600 text-white">
                            <tr>
                                <th class="w-[1rem] border-r-2"></th>
                                <th class="w-[1rem] border-r-2">Codigo</th>
                                <th class="w-[10rem] border-r-2">Descrição</th>
                                <th class="w-[10rem] border-r-2">Limite</th>
                                <th class="w-[10rem]">Ativo</th>
                            </tr>
                        </thead>
                        <tbody v-for="item in listagem">
                            <tr>
                                <td class="border-b-2 border-r-2 flex justify-center border-blue-600">
                                    <ButtonBase id="editar" titulo="Editar" @click="editar(item)" />
                                </td>
                                <td class="border-b-2 border-r-2 border-blue-600">{{ item.codigo }}</td>
                                <td class="border-b-2 border-r-2 border-blue-600">{{ item.descricao }}</td>
                                <td class="border-b-2 border-r-2 border-blue-600">{{ formataBRL(item.limite) }}</td>
                                <td class="border-b-2 border-r-2 border-blue-600">{{ item.ativo.data[0] ? 'Sim' : 'Não' }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>

    <ModalBase @fechar="() => modalCartao.show = false" v-show="modalCartao.show">
        <template v-slot:titulo>Cartão</template>
        <template v-slot:body>
            <form class="form">

                <div class="my-5">
                    <h1 class="text-center font-bold text-xl">{{ modalCartao.type == 'edit'? 'Alteração' : 'Cadastro'  }}</h1>
                </div>

                <div class="row">
                    <div class="section-input">
                        <label class="label-input" for="descricao">Descrição</label>
                        <input v-model.trim="form.descricao" type="text" ref="descricao" id="descricao"
                            class="input w-[90vw] sm:w-[40vw] md:w-[35vw] lg:w-[15vw]">
                    </div>
                </div>

                <div class="flex flex-col">
                    <div class="section-input">
                        <label class="label-input" for="limiteCartao">Limite</label>
                        <input v-model.lazy="form.limite" type="text" ref="limiteCartao" id="limiteCartao"
                            class="input w-[90vw] sm:w-[40vw] md:w-[35vw] lg:w-[15vw]">
                    </div>
                    <div class="section-input" ref="sectionAtivo" v-show="modalCartao.type == 'edit'">
                        <label for="ativo" class="label-input">Ativo</label>
                        <select v-model.trim="form.ativo" id="ativo" ref="ativo" class=" input w-[90vw] sm:w-[40vw] md:w-[35vw] lg:w-[15vw]">
                            <option value="1" selected>Sim</option>
                            <option value="0">Não</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="mt-5">
                        <ButtonBase titulo="Finalizar" @click="gravarModal" class="button-success" />
                    </div>
                </div>
            </form>
        </template>
    </ModalBase>
</template>
<script>
import "@/assets/js/jquery";
import "@/assets/js/dataTable/dataTable.js";
import "@/assets/js/dataTable/dataTableTailwind.js";

export default {
    mounted() {
        $('#limiteCartao').mask('#.###,00', { reverse:true })
        this.carregarListagem()
    },
    data() {
        return {
            alert: {
                show: false,
                descricao: '',
                titulo: '',
                type: ''
            },
            modalCartao: {
                type: 'novo',
                show: false
            },
            form: {
                codigo: 0,
                descricao: null,
                limite: null,
                ativo: null
            },
            listagem: null
        }
    },
    methods: {
        async carregarListagem() {

            try{
                let results = await this.$axios.get('/cartao/listagem');

                let { status, mensage, data } = results.data;

                if (status == 200) {
                    this.listagem = data;
                }

                if( status >= 400 ){
                    this.showAlert('error', 'Atenção', mensage);            
                }
                
            }catch(err){
                this.showAlert('error', 'Atenção', 'Entre em contato com o suporte.');            
            }            
           
        },
        editar(item) {
            this.form = {
                codigo: item.codigo,
                descricao: item.descricao,
                limite: item.limite,
                ativo: item.ativo.data[0]
            }
            
            this.modalCartao = {
                show: true,
                type: 'edit'
            }
        },
        cadastrarCartao(){
            this.modalCartao = {
                show: true,
                type: 'novo',               
            }

            this.form =  {
                codigo: 0,
                descricao: '',
                ativo: 1
            }
        },
        async gravarModal(){
            if( !this.validarFormulario() ) return;
                
            let resultado = await this.$axios.post('/cartao', {
                codigo: this.form.codigo,
                descricao: this.form.descricao,
                limite: this.form.limite,
                ativo: this.form.ativo,
            });

            let { status,mensage } = resultado.data;

            if( status == 200 ){
                this.modalCartao.show = false;
                this.showAlert('success', 'Atenção', mensage);
                this.carregarListagem()
            }
        },
        validarFormulario(){
            let descricao = this.$refs.descricao

            if( !descricao.value ){
                descricao.focus()
                this.showAlert('error', 'Atenção', 'Informe a descrição.');
                return false
            }
            
            return true
        },
        showAlert(type, titulo, descricao) {
            this.alert.show = true
            this.alert.type = type ? type : 'error'
            this.alert.titulo = titulo
            this.alert.descricao = descricao
    
            setTimeout(() => this.alert.show = false, 1500);
        }
    }
}
</script>