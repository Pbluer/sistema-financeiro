<template>
    <div>
        <form id="formLogin" class="flex flex-col items-center gap-y-4">

            <div class="mt-[5rem] mb-[2rem]">
                <LogoIcon class="w-[15rem]"/>
            </div>
            
            <div class="flex flex-col items-center w-full gap-y-2">
                <div class="section-input">
                    <label class="label-input" for="email">E-mail</label>
                    <input type="text" name="email" id="email" v-model="email" class="input input-width">
                </div>

                <div class="section-input">
                    <label class="label-input" for="senha">Senha</label>
                    <input type="password" name="senha" id="senha" v-model="senha" class="input input-width">
                </div>               
            </div>

            <div class="flex justify-between w-[350px]">
                <router-link :to="{ name: 'cadastrarUsuario' }" class="button-link">Cadastrar-se</router-link>
                <ButtonBase @click="logar" titulo="ACESSAR"/>                
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            email: null,
            senha: null
        }
    },
    methods:{
        logar(){
            this.$router.push('/inicio');
        }
    }
}
</script>
