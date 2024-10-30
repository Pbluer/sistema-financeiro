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
                
                <div class="w-full">
                    <div class="relative">            
                        <label class="label-input" >{{ label }}</label>
                        <select :for="id"
                            class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                            <option selected hidden > Selecione </option>
                            <option v-for="data in option" :value=" data.value ?? data.descricao "> {{ data.descricao }}</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2"
                            stroke="currentColor" class="h-5 w-5 ml-1 absolute top-[2rem] right-0.5 text-slate-700">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                        </svg>
                    </div>
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