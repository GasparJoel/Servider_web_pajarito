//Instalamos express
const express  =require('express')
const path = require('path')

const startServer=(options)=>{
    const{port,public_path='public'}=options

    //Express
    const app = express()

    //para poder usar middlewares se usa la palabra use
    app.use(express.static(public_path)) //contenido estatico que ponemos disponible
    //req : es la peticion que hace el usuario 
    //res : las respuesta que lanzaremos , respuesta 
    app.get('*',(req,res)=>{
    
        const indexPath =path.join(__dirname + `../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    //Para que escuche el servidor y lo ponga disponible
    app.listen(port,()=>{
        console.log(`Escuchando en el puerto ${port} `)
    })
}

module.exports={
    startServer
}