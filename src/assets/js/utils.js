export default {
    install(app){
        app.config.globalProperties.formataBRL = (valor) => {
            return new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(valor)
        }
    }
}