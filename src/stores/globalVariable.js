import { defineStore } from "pinia";

export const useGlobalVariableState = defineStore('variaveisGlobal',{
    // create the variable
    state:() => ({
        userName: 'Ramon',
        baseUrl:'http://192.168.0.128:8081'
    }),
    // create the function that chanche the inicial state of variables
    actions:{
        setUserName: name => state.userName = name
    }
});