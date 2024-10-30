<template>
   
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