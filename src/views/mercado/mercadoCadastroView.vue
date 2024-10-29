<template>
    <div class="main">
        <MenuLateral />

        <form id="formLogin" class="content-form">
            <div class="my-5">
                <h1 class="text-center font-bold text-xl">Mercado</h1>
            </div>

            <div class="form">

                <div class="row">
                    <InputBase id="item" type="text" label="Item" class="w-[30vw]" />

                    <InputNumberBase id="quantidade" type="number" label="Qtd" class="w-[5vw]" min="0" />

                    <ButtonBase descricao="Cadastrar" class="button-primary my-auto" label="true" @click="addItem()" />
                </div>

                
            </div>
            
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            descricaoItem: null,
            quantidadeItem: null,
            carrinhoItems:[]
        }
    }
}
</script>