
<script setup>
import { RouterView } from "vue-router";
import PersonIcon from "@/components/icons/personIcon.vue"
import HomeIcon from "@/components/icons/homeIcon.vue"
import WalletIcon from "@/components/icons/walletIcon.vue"
</script>
<template>
    <div class="flex flex-col bg-blue-700 h-screen w-[16rem] mr-10">

        <div class="flex flex-col items-center my-10">
            <PersonIcon class="fill-white w-[6rem]"/>

            <div class="my-5 text-center">
                <h1 class="text-xl text-white font-medium underline">Bem-vindo</h1>
                <h1 class="text-xl text-white font-bold">{{ userName }}</h1>
            </div>
            
            <hr class="w-full h-2 mx-auto mt-4 bg-white">
            
            <router-link :to="{ name:'inicio'}"  class="flex flex-row w-full border-b-2 h-[55px]
                hover:bg-blue-950">
                <div class="h-full flex items-center justify-center px-5 py-4 w-20">
                    <HomeIcon class="fill-white "/> 
                </div>
                <div class="flex justify-start items-center h-full w-24">
                    <p class="font-medium text-white text-lg"> Home </p>
                </div>                
            </router-link >
            
            <router-link :to="{ name:'cartaoFiltro'}" class="flex flex-row w-full border-b-2 h-[55px]
                hover:bg-blue-950">
                <div class="h-full flex items-center justify-center px-5 py-4 w-20">
                    <WalletIcon class="fill-white "/> 
                </div>
                <div class="flex justify-start items-center h-full w-24">
                    <p class="font-medium text-white text-lg"> Cartão </p>
                </div>                
            </router-link>
            
        </div>
    </div>
</template>
<script>
export default {
}
</script>
