<template>
    <div class="main">
        <MenuLateral />

        <form id="formLogin" class="content-form">
            <div class="my-5">
                <h1 class="text-center font-bold text-xl">Cadastro</h1>
            </div>

            <div class="form">

                <div class="section-input">
                    <label class="label-input" for="descricao">Descrição</label>
                    <input type="text" name="descricao" id="descricao" class="input input-width">
                </div>
                
                <SelectBase id="ativo" label="Ativo" :option="[ { value: 1, descricao: 'Sim'}, { value: 0, descricao: 'Não'}]"/>

                <div class="mt-5">
                    <ButtonBase titulo="Cadastrar" />
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {

}
</script>