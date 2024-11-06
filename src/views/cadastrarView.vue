<template>
  <div>
    <form id="formLogin" class="form">

      <div class="mt-[5rem] mb-[2rem]">
        <h1 class="text-xl font-bold text-blue-700">Registrar-se</h1>
      </div>

      <div class="row">
        <div class="section-input">
          <label class="label-input" for="email">E-mail</label>
          <input type="text" name="email" id="email" v-model="email" class="input col
          md:col-2">
        </div>
      </div>

      <div class="row">
        <div class="section-input">
          <label class="label-input" for="senha">Senha</label>
          <input type="password" name="senha" id="senha" v-model="senha" class="input col-4">
        </div>

        <div class="section-input">
          <label class="label-input" for="confirmarSenha">Confimar Senha</label>
          <input type="password" name="confirmarSenha" id="confirmarSenha" v-model="confirmarSenha" class="input col-4">
        </div>
      </div>
      
      <div class="row">
        <div class="section-input">
          <label class="label-input" for="nome">Nome</label>
          <input type="password" name="nome" id="nome" v-model="nome" class="input col-4">
        </div>

        <div class="section-input">
          <label class="label-input" for="sobrenome">Sobrenome</label>
          <input type="password" name="sobrenome" id="sobrenome" v-model="confirmarSenha" class="input col-4">
        </div>
      </div>

      <div class="flex justify-between w-[350px]">
        <ButtonBase @click="logar" titulo="Concluir" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
      return {
          nome: null,
          email: null,
          senha: null,
          confirmarSenha: null
      }
  },
  methods:{
      logar(){
          this.$router.push('/inicio');
      }
  }
}
</script>
