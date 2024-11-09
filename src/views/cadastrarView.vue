<template>
  <Alert v-show="alert.show" :descricao="alert.descricao" :titulo="alert.titulo" :type="alert.type" />
  <div>
    <form id="formLogin" class="form">

      <div class="mt-[5rem] mb-[2rem]">
        <h1 class="text-xl font-bold text-blue-700">Registrar-se</h1>
      </div>

      <div class="row">
        <div class="section-input">
          <label class="label-input" for="email">E-mail</label>
          <input type="text" name="email" id="email" v-model.trim="email.value" class="input w-[80vw]
            sm:w-[30rem]">
        </div>
      </div>

      <div class="row">
        <div class="section-input">
          <label class="label-input" for="senha">Senha</label>
          <input type="password" name="senha" id="senha" v-model.trim="senha.value" class="input w-[80vw]
            sm:w-[14.6rem]">
        </div>

        <div class="section-input">
          <label class="label-input" for="confirmarSenha">Confimar Senha</label>
          <input type="password" name="confirmarSenha" id="confirmarSenha" v-model.trim="confirmarSenha.value" class="input w-[80vw]
            sm:w-[14.6rem]">
        </div>
      </div>
      
      <div class="row">
        <div class="section-input">
          <label class="label-input" for="nome">Nome</label>
          <input type="password" name="nome" id="nome" v-model.trim="nome.value" :class="nome.class" class="input w-[80vw]
            sm:w-[14.6rem]">
        </div>

        <div class="section-input">
          <label class="label-input" for="sobrenome">Sobrenome</label>
          <input type="password" name="sobrenome" id="sobrenome" v-model.trim="confirmarSenha.value" class="input w-[80vw]
            sm:w-[14.6rem]">
        </div>
      </div>

      <div class="flex justify-center mt-5">
        <ButtonBase @click="validarFormulario" titulo="Concluir" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
      return {
        alert:{
          show: false,
          descricao: '',
          titulo: '',
          type: ''
        },
        nome: {
          value: null,
          class: ''
        },
        email: {
          value: null,
          class: ''
        },
        senha: {
          value: null,
          class: ''
        },
        confirmarSenha: {
          value: null,
          class: ''
        }
      }
  },
  methods:{
      async cadastrar(){

        if( this.validarFormulario() ) return;

        await axios({
          method:'post',
          url:'/usuario',
          data: formData
        })

      },
      validarFormulario(){
        
        if( !this.nome.value ){
          this.alert.show = true
          this.alert.type = 'faild'
          this.alert.titulo = 'Teste'
          this.alert.descricao = 'assa'

          setTimeout( () => this.alert.show = false, 1800 );
        }

      }    
  }
}
</script>
