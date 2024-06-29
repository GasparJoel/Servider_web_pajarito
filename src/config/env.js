//Busca de manera automatica al archivo .env
import env from  'dotenv'
//Obtenemos la funcion get : se utiliza para cargar las variables de entorno
import  envvar from 'env-var';

env.config();
//creamos el objeto envs que contendra las variables de entorno 
export const envs = {
    PORT:envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH:envvar.get('PUBLIC_PATH').default('public').asString()
}

// exportar para cualquier modulo 
