<template>
    <div class="main">
        <MenuLateral />

        <form id="" class="content-form">
            <div class="my-5">
                <h1 class="text-center font-bold text-xl">Mercado</h1>
            </div>

            <div class="row">
                <div class="section-input">
                    <label class="label-input" for="item">Item</label>
                    <input v-model="descricaoItem" type="text" name="item" id="item"
                        class="input w-[90vw] sm:w-[40vw] md:w-[35vw] lg:w-[15vw]">
                </div>

                <div class="section-input">
                    <label class="label-input" for="quantidade">Qtd</label>
                    <input v-model="quantidadeItem" type="number" name="quantidade" id="quantidade" min="0"
                        class="input w-[90vw] sm:w-[10vw] md:w-[100px]">
                </div>

                <div class="section-input">
                    <label class="label-input" for="valor">Valor</label>
                    <input v-model.lazy="valorItem" type="text" name="valor" id="valor"
                        class="input w-[90vw] sm:w-[10vw] md:w-[150px]">
                </div>


                <ButtonBase titulo="Cadastrar" class="button-primary my-auto" label="true" @click="carregarItems()" />
            </div>
            
            <hr class="border-2 border-blue-700 w-[50vw] my-5">


            <div class="overflow-x-auto w-[90vw] 
                    sm:w-[35rem]
                    md:w-[40rem]
                    lg:w-[55rem]">
                <table id="example">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>

            <hr class="border-2 border-blue-700 w-[60vw] my-5">

            <div class="row !justify-around w-full mb-10">
                <div class="section-input">
                    <label class="label-input" for="totalCompra">Total</label>
                    <input v-model="valorTotalCarinho" type="text" name="totalCompra" id="totalCompra" disabled
                        class="input w-[90vw] sm:w-[40vw] md:w-[15vw]">
                </div>

                <ButtonBase titulo="Cadastrar" class="button-success my-auto" label="true" @click="carregarItems()" />
            </div>

        </form>
    </div>
</template>
<script>
import '@/assets/js/utils'
import "@/assets/js/dataTable/dataTable.js";
import "@/assets/js/dataTable/dataTableTailwind.js";

export default {
    mounted() {
        $('#valor').mask('#.##0,00', { reverse:true });

        new $('#example').DataTable({
            destroy: true,
                data: this.carrinhoItems,
                paging: true,
                searching: false,
                columns: [
                    { "data": "item" },
                    { "data": "quantidade" },
                    { "data": "valorTotalFormatado" },
                ],
                "oLanguage": {
                    "sSearch": "Pesquisar",
                },
                layout: {
                    topStart: '',
                    bottom: 'paging',
                    bottomStart: false,
                    bottomEnd: false
                },
                language: {
                    info: "Total de items: _START_ a _END_ items",
                    infoEmpty: "Nenhuma informação encontrada.",
                    infoFiltered : " ",
                    loadingRecords: "Carregando...",
                    emptyTable: ' ',
                    paginate: {
                        "first": "Primeiro",
                        "last": "Último",
                        "next": "Próximo",
                        "previous": "Anterior"
                    },
                }
        });
    },
    data() {
        return {
            descricaoItem: null,
            quantidadeItem: null,
            valorItem: null,
            valorTotalCarinho: 'R$ 0',
            carrinhoItems: [],
        }
    },
    methods: {
        carregarItems() {
            let valorTotal = this.quantidadeItem * parseFloat( (this.valorItem).replace(',','.'));

            this.carrinhoItems.push(
                {
                    "item": this.descricaoItem,
                    "quantidade": this.quantidadeItem,
                    "valorUnidade": this.valorItem,
                    "valorTotal": valorTotal,
                    "valorTotalFormatado": this.formataBRL( valorTotal )
                }
            );            

            new DataTable('#example', {
                destroy: true,
                data: this.carrinhoItems,
                paging: true,
                searching: false,
                columns: [
                    { "data": "item" },
                    { "data": "quantidade" },
                    { "data": "valorTotalFormatado" },
                ],
                "oLanguage": {
                    "sSearch": "Pesquisar",
                },
                layout: {
                    topStart: '',
                    bottom: 'paging',
                    bottomStart: false,
                    bottomEnd: false
                },
                language: {
                    info: "Total de items: _START_ a _END_ items",
                    infoEmpty: "Nenhuma informação encontrada.",
                    infoFiltered : "",
                    loadingRecords: "Carregando...",
                    emptyTable: 'No data aaaaa in table',
                    paginate: {
                        "first": "Primeiro",
                        "last": "Último",
                        "next": "Próximo",
                        "previous": "Anterior"
                    },
                }
            });

            this.limparCampos()
            this.calculaValorTotal()   
        },
        limparCampos(){
            this.descricaoItem = null;
            this.quantidadeItem = null;
            this.valorItem = null;
        },
        calculaValorTotal(){
            let valorTotal = 0;

            this.carrinhoItems.forEach( item => {
                valorTotal += item.valorTotal 
            });

            this.valorTotalCarinho = `R$ ${valorTotal}`
        }
    }
}
</script>