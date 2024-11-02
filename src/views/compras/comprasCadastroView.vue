<template>
    <div class="main">
        <MenuLateral />

        <form id="formLogin" class="content-form">
            <div class="my-5">
                <h1 class="text-center font-bold text-xl">Cadastro</h1>
            </div>

            <div class="row">
                <div class="section-input">
                    <label class="label-input" for="descricao">Descrição</label>
                    <input type="text" name="descricao" id="descricao" class="input w-[90vw] sm:w-[40vw] md:w-[35vw] lg:w-[15vw]">
                </div>
                
                      
                <div class="mt-5">
                    <ButtonBase titulo="Cadastrar" />
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                ativo: {
                    value: null,
                    data: [
                        { value: 1, descricao: 'Sim'},
                        { value: 0, descricao: 'Não'}
                    ]
                }
            }
        }
    }
}
</script>