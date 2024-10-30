<template>
    <div class="main">
        <MenuLateral />

        <div class="content">
            <div class="form">
                <div class="border-b-2 border-blue-700 mb-5 pb-5 w-full">
                    <ButtonBase id="pesquisar" type="text" titulo="Cadastrar" @click=" () => $router.push({ name: 'cartaoCadastro'})"/>
                </div>
    
                <div class="overflow-x-auto w-[45vw]">
                    <table id="example">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Cartão</th>
                                <th>Ativo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nubank</td>
                                <td>Sim</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Itau Vivo</td>
                                <td>Sim</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import "@/assets/js/jquery";
import "@/assets/js/dataTable/dataTable.js";
import "@/assets/js/dataTable/dataTableTailwind.js";

export default {
    mounted() {
        return new $('#example').DataTable({
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
    data() {
        return {}
    },
}
</script>