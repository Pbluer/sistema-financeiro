<template>
    <div>
        <form id="formLogin" class="flex flex-col items-center gap-y-4">

            <div class="mt-[5rem] mb-[2rem]">
                <LogoIcon class="w-[15rem]"/>
            </div>
            
            <div class="flex flex-col items-center w-full">
                <InputBase id="email" type="text" label="E-mail" />
                <InputBase id="senha" type="senha" label="Senha" />
            </div>

            <div class="flex justify-center">
                <ButtonBase @click="logar" titulo="ACESSAR"/>                
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
