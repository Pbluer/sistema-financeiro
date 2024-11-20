<template>
    <div :class="setClass(type)" class="absolute right-2 z-40 top-5 rounded-lg p-3 w-auto shadow-xl animate__animated animate__fadeIn">
        <h1 class="text-start font-bold">
            {{ titulo }}
        </h1>
        <h3 class="">
            {{ descricao }}
        </h3>
    </div>
</template>
<script>
export default {
    props:{
        type:{
            type: String,
            default: 'info'
        },
        titulo:{
            type: String,
            default: 'Atenção'
        },
        descricao:{
            type: String,
            required: true,
            default: ''
        }
    },
    methods:{
        setClass(value){

            if( value == 'error'){
                return 'border-1 border-red-200 bg-red-600 text-white'
            }

            if( value == 'success'){
                return 'border-1 border-green-700 bg-green-600 text-white '
            }

            if( value == 'info'){
                return 'border-1 border-blue-200 bg-blue-600 text-white '
            }

        }        
    }
}
</script>