export default {
    install(app){
        app.config.globalProperties.formataBRL = (valor) => {
            return new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(valor)
        },
        app.config.globalProperties.validarEmail = (email) =>{
            let regex =  (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/);
            return regex.test(email)
        }
    }
}