<template>
  <teleport to='body'>
    <div class="modal">
      <div class="modal-main">
        <div class="modal-header">
          <div class="w-[30vw]">
            <h1>
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
  </teleport>
</template>
<script>
export default{
  emits:['fechar']
}
</script>