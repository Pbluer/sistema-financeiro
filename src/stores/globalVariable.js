import { defineStore } from "pinia";

export const useGlobalVariableState = defineStore('variaveisGlobal',{
    // create the variable
    state:() => ({
        userName: null,
        baseURL:'http://192.168.0.128:8081',
        tokenUser: null
    }),
    // create the function that chanche the inicial state of variables
    actions:{
        setUserName( nome ){
            this.userName = nome
        },
        setTokenUser( token ){
            this.tokenUser = token
        }
    }
});