<template>
    <div class="modal">
      <div class="modal-main">
        <div class="modal-header">
          <div class="w-[20rem]">
            <h1 class="font-bold text-lg">
              <slot name="titulo">Default Name</slot>
            </h1>
          </div>
          <div>
            <button class="text-lg" @click="$emit('fechar')">X</button>
          </div>
        </div>
        <hr class="h-1 my-2 bg-blue-700">

        <div class="modal-body">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
</template>
<script>
export default{
  emits:['fechar']
}
</script>