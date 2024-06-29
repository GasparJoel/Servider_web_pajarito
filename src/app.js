
//const {envs}=require('./config/env')
import {envs} from './config/env.js'
//const {startServer}=require('./server/server')
import { startServer } from './server/server.js'
//Funcion agnostica autocombocada
//agnostica por que  no tiene nombre
//autocombocada por que ejecutamos con los ultimos parentesis

const main =()=>{
    startServer({
        port:envs.PORT,
        public_path:envs.PUBLIC_PATH
    })
}

(async()=>{
    main()
})()



