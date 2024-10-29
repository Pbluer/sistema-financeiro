<template>
    <div class="main">
        <MenuLateral />

        <form id="" class="content-form">
            <div class="my-5">
                <h1 class="text-center font-bold text-xl">Mercado</h1>
            </div>

            <div class="form">

                <div class="row">
                    <InputTextBase id="item" label="Item" v-model="descricaoItem" class="w-[30vw]" />
                    
                    <InputNumberBase id="quantidade" label="Qtd" v-model="quantidadeItem" class="w-[5vw]" min="0" />

                    <InputTextBase id="valor" label="Valor" v-model="valorItem" class="w-[10vw]" />

                    <ButtonBase titulo="Cadastrar" class="button-primary my-auto" label="true" @click="carregarItems()" />
                </div>
                <hr class="border-2 border-blue-700 w-full">
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


        </form>
    </div>
</template>
<script>
import "@/assets/js/dataTable/jquery";
import "@/assets/js/dataTable/dataTable.js";
import "@/assets/js/dataTable/dataTableTailwind.js";

export default {
    mounted() {
        new $('#example').DataTable({
            data: this.carrinhoItems,
            paging: false,
            searching: false,
            columns: [
                { "data" : "item" },
                { "data" : "quantidade" },
                { "data" : "valor" },
            ],
            "oLanguage": {
                "sSearch": "Pesquisar"
            },
            layout: {
                topStart: '',
                bottom: 'paging',
                bottomStart: false,
                bottomEnd: false
            },
            language: {
                "info": "Total de items: _START_ a _END_ items",
                "infoEmpty": "Nenhuma informação encontrada.",
                "infoFiltered": "",
                "loadingRecords": "Carregando...",
                "paginate": {
                    "first": "Primeiro",
                    "last": "Último",
                    "next": "Próximo",
                    "previous": "Anterior"
                },
            }
        });
    },
    data(){
        return {
            descricaoItem: null,
            quantidadeItem: null,
            valorItem: null,
            carrinhoItems: [{
                "item" :'Sabao',
                "quantidade" :'2',
                "valor" :'2'
                
            }]
        }
    },
    methods:{
        carregarItems(){
        this.carrinhoItems.push(
            {
                "item" : this.descricaoItem,
                "quantidade" : this.quantidadeItem,
                "valor" : this.valorItem,     
            } 
        );
        console.log( this.carrinhoItems )
        /* $('#example').DataTable({
            data: this.carrinhoItems,
        }); */
    }
    }
}
</script>