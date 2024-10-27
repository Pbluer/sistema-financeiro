<template>
    <div class="main">
        <MenuLateral />

        <div class="mx-auto mt-10">
            <div class="my-5">
                <h1 class="text-center font-bold text-xl">Cadastro</h1>
            </div>
            <form id="formLogin" class="form">
                <InputBase id="descricao" type="text" label="Descrição" />
                
                <SelectBase id="ativo" label="Ativo" :option="[ { value: 1, descricao: 'Sim'}, { value: 0, descricao: 'Não'}]"/>

                <div class="flex justify-center">
                    <ButtonBase label="Cadastrar" />
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import "@/assets/js/dataTable/jquery";
import "@/assets/js/dataTable/dataTable.js";
import "@/assets/js/dataTable/dataTableTailwind.js";

export default {

}
</script>