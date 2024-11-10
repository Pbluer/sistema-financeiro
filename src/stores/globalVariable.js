import { defineStore } from "pinia";

export const useGlobalVariableState = defineStore('variaveis',{
    // create the variable
    state:() => ({
        userName: 'Ramon',
        baseUrl:'localhost:8081/'
    }),
    // create the function that chanche the inicial state of variables
    actions:{
        setUserName: name => state.userName = name
    }
});