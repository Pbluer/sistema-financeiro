<template>
   <router-link :class="class" :id="id" :type="type" :to="to"> {{label}} </router-link>
</template>
<script>
export default {
    props:{
        id:{
            type: String,
            required: true
        },
        type:{
            type: String,
            default: 'button'
        },
        label:{
            type: String,
            default: 'Default'
        },
        class: {
            type: String,
            default: 'button-primary'
        },
        to:{
            type: String || Object
        }
    }
}
</script>