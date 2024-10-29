<template>
    <div class="section-input">
        <label class="label-input" :for="id">{{ label ? '&nbsp;' : '' }}</label>
        <button :class="class" :id="id" :type="type"> {{titulo}} </button>
    </div>
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
            required: false
        },
        titulo:{
            type: String,
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