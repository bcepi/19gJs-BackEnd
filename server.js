const http = require("http")

const server = http.createServer((request, response)=>{
    // Escribiendo
    response.write("Hola desde mi servidor")

    //Acabar
    response.end() //-> es como el return de los servidores
})

// Esta escuchando el servidor
// el primer parametro es el puerto
// el segundo es una callback anonima
server.listen(8080, ()=>{
    console.log("Mi server esta escuchando")
})