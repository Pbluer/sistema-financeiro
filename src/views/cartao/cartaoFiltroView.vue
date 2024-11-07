<template>
    <div class="main">
        <MenuLateral />

        <div class="content">
            <div class="form">
                <div class="border-b-2 border-blue-700 mb-5 pb-5 w-full">
                    <ButtonBase id="pesquisar" type="text" titulo="Cadastrar"
                        @click="() => showModal = true" />
                </div>

                <div class="overflow-x-auto w-[90vw] 
                    sm:w-[35rem]
                    md:w-[40rem]
                    lg:w-[55rem]">
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

    <ModalBase @fechar="() => showModal = false" v-if="showModal">
        <template v-slot:titulo>Cartão</template>
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
                        <ButtonBase titulo="Cadastrar" @click="cadastrarItem" />
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
            showModal: false
        }
    },
}
</script>