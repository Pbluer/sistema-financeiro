<template>
    <div class="w-full ">
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
</template>
<script>
export default {
    props:{
        id:{
            type: String,
            required: true
        },
        label:{
            type: String || Object,
            required:true
        },
        option:{
            type: Array || Object,
            required:false
        }
    }
}
</script>