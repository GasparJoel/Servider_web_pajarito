//Busca de manera automatica al archivo .env
require ('dotenv').config();

//Obtenemos la funcion get : se utiliza para cargar las variables de entorno
const {get} = require('env-var')

//creamos el objeto envs que contendra las variables de entorno 
const envs = {
    PORT:get('PORT').required().asPortNumber(),
    PUBLIC_PATH:get('PUBLIC_PATH').default('public').asString()
}

// exportar para cualquier modulo 
module.exports={
    envs
}