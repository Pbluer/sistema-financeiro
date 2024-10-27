<template>
    <div class="section-input">
        <label class="label-input" :for="id">{{ label }}</label>
        <input class="input" :type="type" :name="id" :id="id">
    </div>
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
            default: 'button',
            required: true
        },
        label:{
            type: String,
            default: 'Default',
            required: true
        },
    }
}
</script>