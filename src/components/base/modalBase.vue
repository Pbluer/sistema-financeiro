<template>
    <div class="flex justify-center items-center left-0 top-0 absolute bg-gray-700 bg-opacity-15 w-full h-full p-10">

      <div class="bg-white w-[20vw] flex flex-col z-50">
        <div class="flex flex-row px-2 justify-evenly">
            <div>
                <teleport to='modalText'>
                    <h1>Default Name</h1>
                </teleport>

            </div>
            <div class="">
                <BaseButton>X</BaseButton>
            </div>
        </div>
        <h1 class="text-red-500">teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
      </div>

    </div>
</template>
<script>
export default {
    
}
</script>