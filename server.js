const http = require("http")

const server = http.createServer((request, response) => {
  // Destructurar
  const { url, method } = request
  console.log("url", url)
  console.log("method", method)

  // Put -> Reemplazo
  // Patch -> Actualiza

  // Estructura de datos
  const endpoints = {
    GET: {
      "/hola":"get en /hola",
    },
    POST: {
      "/hola": "POST en /hola, aqui podemos crear",
    },
    PATCH: {
      "/hola": "PATCH en /hola, aqui podemos actualizar",
    },
    DELETE:{
      "/hola": "DELETE en /hola, aqui podemos eliminar",
      "/adios": "DELETE en /adios, aqui podemos eliminar"
    } 
  }

  response.write(endpoints[method][url])

  // Endpoints
  // Punto final donde llega el request
  // Se conforma de 2 cosas
  // 1 - Method -> GET, PUT, PATCH, DELETE
  // 2 - Ruta -> /home, /koders 

  // Acabar
  response.end() // -> como el return de los servidores
})

// Listening
// 1- PORT
// 2- CALLBACK
server.listen(8080, () => {
  console.log("Mi servidor esta escuchando")
})