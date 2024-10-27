<template>
    <div class="main">
        <MenuLateral />

        <form id="formLogin" class="content-form">
            <div class="my-5">
                <h1 class="text-center font-bold text-xl">Cadastro</h1>
            </div>

            <div class="form">
                <InputBase id="descricao" type="text" label="Descrição" />
                
                <SelectBase id="ativo" label="Ativo" :option="[ { value: 1, descricao: 'Sim'}, { value: 0, descricao: 'Não'}]"/>

                <div class="mt-5">
                    <ButtonBase label="Cadastrar" />
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import "@/assets/js/dataTable/jquery";
import "@/assets/js/dataTable/dataTable.js";
import "@/assets/js/dataTable/dataTableTailwind.js";

export default {

}
</script>