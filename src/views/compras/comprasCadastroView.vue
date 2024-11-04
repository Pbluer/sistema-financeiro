<template>
    <div class="main">
        <MenuLateral />

        
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                ativo: {
                    value: null,
                    data: [
                        { value: 1, descricao: 'Sim'},
                        { value: 0, descricao: 'Não'}
                    ]
                }
            }
        }
    }
}
</script>