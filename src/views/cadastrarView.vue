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
          <input type="text" id="email" ref="email" v-model.trim="email.value" class="input w-[80vw]
            sm:w-[30rem]">
        </div>
      </div>

      <div class="row">
        <div class="section-input">
          <label class="label-input" for="senha">Senha</label>
          <input type="password" autocomplete="off" id="senha" ref="senha" v-model.trim="senha.value" class="input w-[80vw]
            sm:w-[14.6rem]">
        </div>

        <div class="section-input">
          <label class="label-input" for="confirmarSenha">Confimar Senha</label>
          <input type="password" autocomplete="off" id="confirmarSenha" ref="confirmarSenha"
            v-model.trim="confirmarSenha.value" class="input w-[80vw]
            sm:w-[14.6rem]">
        </div>
      </div>

      <div class="row">
        <div class="section-input">
          <label class="label-input" for="nome">Nome</label>
          <input type="text" id="nome" ref="nome" v-model.trim="nome.value" :class="nome.class" class="input w-[80vw]
            sm:w-[14.6rem]">
        </div>

        <div class="section-input">
          <label class="label-input" for="sobrenome">Sobrenome</label>
          <input type="text" id="sobrenome" ref="sobrenome" v-model.trim="sobrenome.value" class="input w-[80vw]
            sm:w-[14.6rem]">
        </div>

      </div>

      <div class="flex justify-center mt-5">
        <ButtonBase @click="cadastrar" titulo="Concluir" />
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      alert: {
        show: false,
        descricao: '',
        titulo: '',
        type: ''
      },
      nome: {
        value: null,
        class: ''
      },
      sobrenome: {
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
  methods: {
    async cadastrar() {

      if (!this.validarFormulario()) return;

      let resultado = await this.$axios.post('/usuario',
        {
          nome: this.nome.value,
          sobrenome: this.sobrenome.value,
          email: this.email.value,
          senha: this.senha.value,
          confirmarSenha: this.confirmarSenha.value,
        }
      )

      let { status, mensage, data } = resultado.data;

      if (status > 200) {        
        this.showAlert('error', 'Atenção', mensage);
      }

      if (status < 400) {
        this.showAlert('success', 'Atenção', mensage);

        setTimeout(() => this.$router.push('/login') , 1500);
      }

    },
    validarFormulario() {

      if (!this.email.value) {
        this.$refs.email.focus()
        this.showAlert('error', 'Atenção', 'Informe o e-mail.');
        return false
      }

      if (!this.validarEmail(this.email.value)) {
        this.$refs.email.focus()
        this.showAlert('error', 'Atenção', 'Informe um e-mail válido.');
        return false
      }

      if (!this.senha.value) {
        this.$refs.senha.focus()
        this.showAlert('error', 'Atenção', 'Informe a senha.');
        return false
      }

      if (!this.confirmarSenha.value) {
        this.$refs.confirmarSenha.focus()
        this.showAlert('error', 'Atenção', 'Informe a senha de confirmação.');
        return false
      }

      if (this.senha.value != this.confirmarSenha.value) {
        this.$refs.senha.focus()
        this.showAlert('error', 'Atenção', 'A senha não são iguais.');
        return false
      }

      if (!this.nome.value) {
        this.$refs.nome.focus()
        this.showAlert('error', 'Atenção', 'Informe o nome.');
        return false
      }

      if (!this.sobrenome.value) {
        this.$refs.sobrenome.focus()
        this.showAlert('error', 'Atenção', 'Informe o sobrenome.');
        return false
      }


      return true

    },
    showAlert(type, titulo, descricao) {
      this.alert.show = true
      this.alert.type = type ? type : 'error'
      this.alert.titulo = titulo
      this.alert.descricao = descricao

      setTimeout(() => this.alert.show = false, 1500);
    }
  }
}
</script>
