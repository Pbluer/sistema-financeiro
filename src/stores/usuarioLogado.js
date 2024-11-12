import { defineStore } from "pinia";

export const useUsuarioLogado = defineStore('usuarioLogado',{
    // create the variable
    state:() => ({
        nome: null,
        codigo: null
    }),
    // create the function that chanche the inicial state of variables
    actions:{
        setNome: nome => state.nome = nome,
        setCodigo: codigo => state.codigo = codigo,
    }
});