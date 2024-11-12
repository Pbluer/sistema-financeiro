<template>
    <Alert v-show="alert.show" :descricao="alert.descricao" :titulo="alert.titulo" :type="alert.type" />s
    <div>
        <form id="formLogin" class="flex flex-col items-center gap-y-4">

            <div class="mt-[5rem] mb-[2rem]">
                <LogoIcon class="w-[15rem]" />
            </div>

            <div class="flex flex-col items-center w-full gap-y-2">
                <div class="section-input">
                    <label class="label-input" for="email">E-mail</label>
                    <input type="text" ref="email" id="email" v-model="email.value" class="input w-[80vw]
                        sm:w-[25rem]">
                </div>

                <div class="section-input">
                    <label class="label-input" for="senha">Senha</label>
                    <input type="password" ref="senha" id="senha" v-model="senha.value" class="input w-[80vw]
                        sm:w-[25rem]">
                </div>
            </div>

            <div class="flex flex-col-reverse items-center mt-5">
                <router-link :to="{ name: 'cadastrarUsuario' }" class="button-link">Cadastrar-se</router-link>
                <ButtonBase @click="acessar" titulo="ACESSAR" />
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    mounted(){
        sessionStorage.removeItem('userToken')
    },
    data() {
        return {
            alert: {
                show: false,
                descricao: '',
                titulo: '',
                type: ''
            },
            email: {
                value: null,
                class: ''
            },
            senha: {
                value: null,
                class: ''
            }
        }
    },
    methods: {
        async acessar() {
            console.log( this.$pinia )
            return
            if (!this.validarFormulario()) return;

            let resultado = await axios({
                method: 'post',
                url: '/usuario/acessar',
                baseURL:this.$pinia.state.value.variaveisGlobal.baseUrl,
                data: {
                    email: this.email.value,
                    senha: this.senha.value,
                }
            })

            let { status, mensage, data } = resultado.data;
            if (status > 200) {
                this.showAlert('error', 'Atenção', mensage);
            }

            if (status < 400) {
               
                this.$pinia.state.value.usuarioLogado.setCodigo(data.nome)
                
                sessionStorage.setItem('userToken', data.token);
                this.showAlert('success', 'Atenção', mensage);
                setTimeout(() => this.$router.push('/inicio') , 1500);
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

            return true;
    
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
