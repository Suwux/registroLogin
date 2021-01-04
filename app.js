let process = require('process')
const moduloLogin = require('./usuarios')
let comando = process.argv[2]

switch (comando) {
    case 'registrar':
        let nombre = process.argv[3]
        let mail = process.argv[4]
        let password = process.argv[5]
        moduloLogin.agregarUsuario(nombre,mail,password)
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        console.log('~~~~~~~~ USUARIO REGISTRADO ~~~~~~~~~')
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        break;
        
    case 'login':
        let mailLogin = process.argv[3]
        let passwordLogin = process.argv[4]
        let resultado = moduloLogin.loguearUsuario(mailLogin, passwordLogin)
        if (resultado.length == 1) {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        console.log('~~~~~~~~ Bienvenido ~~~~~~~~~')
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        } else {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        console.log('~~~~~~~~~ Usuario No Encontrado ~~~~~~~~~')
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        }
        break;
    case 'eliminar':
        let mailEliminar = process.argv[3]
        let passwordEliminar = process.argv[4]
        let existe = moduloLogin.loguearUsuario(process.argv[3], process.argv[4])
        if (existe.length == 1){
            moduloLogin.eliminarUsuario(mailEliminar, passwordEliminar)
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
            console.log('~~~~~~~~~ Usuario Eliminado ~~~~~~~~~')
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        }else {
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
            console.log('~~~~~~~~~ Usuario Inexistente ~~~~~~~~~~')
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        }
            break;
}