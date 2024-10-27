<template>
    <div>
        <form id="formLogin" class="form">

            <div class="mt-[5rem] mb-[2rem]">
                <LogoIcon class="w-[15rem]"/>
            </div>
            
            <InputBase id="email" type="text" label="E-mail" />
            <InputBase id="senha" type="senha" label="Senha" />

            <div class="flex justify-center">
                <ButtonBase @click="logar" label="ACESSAR"/>                
            </div>
        </form>
    </div>
</template>

<script>
export default {
    methods:{
        logar(){
            this.$router.push('/inicio');
        }
    }
}
</script>
