export default {
    methods: {
        formataBRL(valor) {
            return new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(valor)
        }
    },
}