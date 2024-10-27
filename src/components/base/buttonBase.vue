<template>
   <button :class="class" :id="id" :type="type"> {{label}} </button>
</template>
<script>
export default {
    props:{
        id:{
            type: String,
            required: false
        },
        type:{
            type: String,
            default: 'button',
            required: false
        },
        label:{
            type: String,
            default: 'Default',
            required: true
        },
        class: {
            type: String,
            default: 'button-primary',
            required: false
        }
    }
}
</script>