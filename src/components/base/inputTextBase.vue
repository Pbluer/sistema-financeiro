<template>
    <div class="section-input">
        <label class="label-input" :for="id">{{ label }}</label>
        <input class="input" type="text" :name="id" :id="id" :class="class">
    </div>
</template>
<script>
export default {
    props:{
        id:{
            type: String,
            required: true
        },
        descricao:{
            type: String,   
            required: false
        },
        label:{
            type: String,
            default: 'Default',
            required: true
        },
        class:{
            type: String,
            default: 'input-width',
            required: false
        },
    }
}
</script>