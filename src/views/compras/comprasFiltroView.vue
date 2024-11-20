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
                                <th class="w-[10rem] border-r-2">Descrição</th>
                                <th class="w-[10rem] border-r-2">Valor</th>
                                <th class="w-[10rem] border-r-2">Tipo</th>
                                <th class="w-[10rem] border-r-2">Data de Cadastro</th>
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

    <ModalBase @fechar="() => modalOperacao.show = false" v-show="modalOperacao.show">
        <template v-slot:titulo>Compra</template>
        <template v-slot:body>
            <form class="form">

                <div class="my-5">
                    <h1 class="text-center font-bold text-xl">{{ modalOperacao.type == 'edit'? 'Alteração' : 'Cadastro'  }}</h1>
                </div>

                <div class="flex flex-col gap-y-2">

                    <div class="row">
                        <div class="section-input">
                            <label class="label-input" for="descricao">Descrição</label>
                            <input v-model.trim="form.descricao" type="text" ref="descricao" id="descricao"
                                class="input w-[90vw] sm:w-[40vw] md:w-[35vw] lg:w-[15vw]">
                        </div>
    
                        <div class="section-input">
                            <label class="label-input" for="valor">Valor</label>
                            <input v-model.lazy="form.valor" type="text" ref="valor" id="valor"
                                class="input w-[90vw] sm:w-[40vw] md:w-[35vw] lg:w-[15vw]">
                        </div>
                    </div>

                    <div class="row">
                        <div class="section-input" >
                            <label for="cartao" class="label-input">Cartão</label>
                            <select v-model="form.cartao" id="cartao" ref="cartao" class="input w-[90vw] sm:w-[40vw] md:w-[35vw] lg:w-[15vw]">
                                <option selected hidden value=""> Selecione </option>                            
                                <option v-for="cartao in cartaoPopula" :value="cartao.codigo"> {{ cartao.descricao  }}</option>                            
                            </select>
                        </div>

                        <div class="section-input" >
                            <label for="tipoCompra" class="label-input">Tipo de Operação</label>
                            <select v-model="form.tipoCompra" id="tipoCompra" ref="tipoCompra" class="input w-[90vw] sm:w-[40vw] md:w-[35vw] lg:w-[15vw]">
                                <option selected hidden value=""> Selecione </option>
                                <option value="1"> Entrada </option>
                                <option value="0"> Saída </option>
                            </select>
                        </div>

                    </div>

                    <div class="row">
                        <div class="section-input" >
                            <label for="retroativo" class="label-input">Compra Retroativa?</label>
                            <select v-model="form.retroativo" class="input w-[90vw] sm:w-[40vw] md:w-[35vw] lg:w-[15vw]" ref="retroativo" name="retroativo">
                                <option value="true"> Sim </option>
                                <option value="false"> Não </option>
                            </select>
                        </div>
    
                        <div class="section-input">
                            <label class="label-input" for="dataCompra">Data da Compra</label>
                            <input v-model.trim="form.dataCompra" :disabled="form.retroativo"
                                type="text" ref="dataCompra" id="dataCompra"
                                class="input w-[90vw] sm:w-[40vw] md:w-[35vw] lg:w-[15vw]">
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="my-5">
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
        $('#valor').mask('#.###,00', { reverse:true })
        //this.carregarListagem()
        this.popularComboCartao()
    },
    data() {
        return {
            alert: {
                show: false,
                descricao: '',
                titulo: '',
                type: ''
            },
            modalOperacao: {
                type: 'novo',
                show: false
            },
            form: {
                codigo: 0,
                descricao: '',
                valor: '',
                cartao: '',
                tipoCompra: '',
                retroativo: false,               
                dataCompra: ''
            },
            cartaoPopula: null,
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
                tipoCompra: item.tipoCompra,
                cartao: item.cartao,
                retroativo: item.retroativo,
                valor: item.valor,
                data: item.data,
                dataCompra: item.dataCompra,
            }

            this.modalOperacao = {
                show: true,
                type: 'edit'
            }
        },
        cadastrarCartao(){
            this.modalOperacao = {
                show: true,
                type: 'novo',               
            }

            this.form =  {
                codigo: 0,
                descricao: '',
                valor: '',
                cartao: '',
                tipoCompra: '',
                retroativo: false,               
                dataCompra: ''
            }
        },
        async gravarModal(){
            if( !this.validarFormulario() ) return;
                
            let resultado = await this.$axios.post('/cartao/compra', this.form);

            let { status,mensage } = resultado.data;

            if( status == 200 ){
                this.modalOperacao.show = false;
                this.showAlert('success', 'Atenção', mensage);
                this.carregarListagem()
            }
        },
        validarFormulario(){
            let descricao = this.$refs.descricao;
            let valor = this.$refs.valor;
            let cartao = this.$refs.cartao;
            let tipoCompra = this.$refs.tipoCompra;
            let retroativo = this.$refs.retroativo;
            let dataCompra = this.$refs.dataCompra;

            if( !descricao.value ){
                descricao.focus()
                this.showAlert('error', 'Atenção', 'Informe a descrição.');
                return false
            }

            if( !valor.value ){
                valor.focus()
                this.showAlert('error', 'Atenção', 'Informe o valor da compra.');
                return false
            }

            if( !cartao.value ){
                cartao.focus()
                this.showAlert('error', 'Atenção', 'Informe o cartão que será debitado a compra.');
                return false
            }

            if( !tipoCompra.value ){
                tipoCompra.focus()
                this.showAlert('error', 'Atenção', 'Selecione o tipo de operacão.');
                return false
            }
            console.log(dataCompra.value)
            console.log(retroativo.value)
            if( !dataCompra.value && retroativo.value ){
                dataCompra.focus()
                this.showAlert('error', 'Atenção', 'Informe a data da compra.');
                return false
            }
            
            return true
        },
        async popularComboCartao(){

            try{
                let results = await this.$axios.get('/cartao/listagem');

                let { status, mensage, data } = results.data;
                
                if (status == 200) {
                    this.cartaoPopula = data;
                }

                if( status >= 400 ){
                    this.showAlert('error', 'Atenção', mensage);            
                }
                
            }catch(err){
                this.showAlert('error', 'Atenção', 'Entre em contato com o suporte.');            
            }      

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