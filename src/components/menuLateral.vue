<script setup>
import { useGlobalVariableState } from "@/stores/globalVariable"

import PersonIcon from "@/components/icons/personIcon.vue"
import HomeIcon from "@/components/icons/homeIcon.vue"
import WalletIcon from "@/components/icons/walletIcon.vue"
import MenuIcon from "@/components/icons/menuIcon.vue"
import CarrinhoMercado from "@/components/icons/carrinhoMercadoIcon.vue"
import CodigoBarra from "@/components/icons/codigoBarraIcon.vue"
import ExitDoor from "@/components/icons/exitIcon.vue"


const global = useGlobalVariableState();
</script>
<template>
    
    <router-link :to="{ name:'inicio'}" class="absolute ml-5 mt-3 right-5" :class=" $route.name == 'inicio' ? 'hidden' : ''">
       <HomeIcon class="fill-blue-700 w-[30px] "/> 
    </router-link>

    <div class="group">
        <MenuIcon class="absolute fill-blue-700 w-[30px] ml-5 mt-3" />  

        <div class="flex-col bg-blue-700 w-[300px] hidden group-hover:absolute group-hover:flex animate__animated animate__slideInLeft z-50 min-h-full">
            <div class="flex flex-col items-center my-10">
                <PersonIcon class="fill-white w-[6rem]"/>

                <div class="my-5 text-center">
                    <h1 class="text-xl text-white font-medium underline">Bem-vindo</h1>
                    <h1 class="text-xl text-white font-bold">{{ global.$state.userName }}</h1>
                </div>
                
                <hr class="w-full h-2 mx-auto mt-4 bg-white">                
                
                <router-link :to="{ name:'loginUsuario'}" class="flex flex-row w-full border-b-2 h-[55px]
                    bg-white">
                    <div class="h-full flex items-center justify-center px-5 py-4 w-20">
                        <ExitDoor class="fill-blue-700 "/> 
                    </div>
                    <div class="flex justify-start items-center h-full w-25">
                        <p class="font-medium text-blue-700 text-lg"> Deslogar-se </p>
                    </div>                
                </router-link>
                
                <router-link :to="{ name:'cartaoFiltro'}" class="flex flex-row w-full border-b-2 h-[55px]
                    hover:bg-blue-950">
                    <div class="h-full flex items-center justify-center px-5 py-4 w-20">
                        <WalletIcon class="fill-white "/> 
                    </div>
                    <div class="flex justify-start items-center h-full w-24">
                        <p class="font-medium text-white text-lg"> Cartão </p>
                    </div>                
                </router-link>
                
                <router-link :to="{ name:'comprasFiltro'}" class="flex flex-row w-full border-b-2 h-[55px]
                    hover:bg-blue-950">
                    <div class="h-full flex items-center justify-center px-5 py-4 w-20">
                        <CarrinhoMercado class="fill-white "/> 
                    </div>
                    <div class="flex justify-start items-center h-full w-24">
                        <p class="font-medium text-white text-lg"> Compras </p>
                    </div>                
                </router-link>

                <router-link :to="{ name:'mercadoCadastro'}" class="flex flex-row w-full border-b-2 h-[55px]
                    hover:bg-blue-950">
                    <div class="h-full flex items-center justify-center px-5 py-4 w-20">
                        <CodigoBarra class="fill-white "/> 
                    </div>
                    <div class="flex justify-start items-center h-full w-24">
                        <p class="font-medium text-white text-lg"> Mercado </p>
                    </div>                
                </router-link>
                
            </div>
        </div>
    
    </div>
</template>
<script>
export default {
}
</script>
