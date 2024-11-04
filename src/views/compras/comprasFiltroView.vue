<template>
    <div class="main">
        <MenuLateral />

        <div class="content">
            <div class="form">
                <div class="border-b-2 border-blue-700 mb-5 pb-5 w-full">
                    <ButtonBase id="pesquisar" type="text" titulo="Cadastrar"
                        @click=" () => $router.push({ name: 'comprasCadastro'})" />
                </div>

                <div class="overflow-x-auto">
                    <table id="example">
                        <thead>
                            <tr>
                                <th class="w-[10px]"></th>
                                <th>Período</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <ButtonBase id="pesquisar" type="text" titulo="Acessar" />
                                </td>
                                <td> 00/00/0000 à 00/00/000 </td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <ModalBase @fechar="showmodal = false" v-if="showModal">
                <template v-slot:titulo>Teste</template>
                <template v-slot:body>
                    <form class="form">
                        <div class="my-5">
                            <h1 class="text-center font-bold text-xl">Cadastro</h1>
                        </div>

                        <div class="row">
                            <div class="section-input">
                                <label class="label-input" for="descricao">Descrição</label>
                                <input type="text" name="descricao" id="descricao"
                                    class="input w-[90vw] sm:w-[40vw] md:w-[35vw] lg:w-[15vw]">
                            </div>

                            <div class="mt-5">
                                <ButtonBase titulo="Cadastrar" />
                            </div>
                        </div>
                    </form>
                </template>
            </ModalBase>

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
        return {
            showModal: true
        }
    },
}
</script>