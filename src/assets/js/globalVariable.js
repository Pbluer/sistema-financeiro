export default {
    install(app){        
        app.config.globalProperties.baseUrl = 'localhost:8081/',
        app.config.globalProperties.userName = 'Ramon',
        app.config.globalProperties.$showAlert = false
    }
}