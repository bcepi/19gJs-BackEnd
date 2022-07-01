/**
 * 1- Vamos a escribir un archivo -> writeFile 
 * 2 - Vamos a hacer un append con una linea nueva a este mismo archivo -> appendFile
 * 3 - Vamos a borrar el archivo despues de 5s. -> unlink -> setTimeout
 */

 const fsPromises = require('fs/promises')

const ruta = "archivo-nuevo.txt"
// Promificacion -> Pasar las callbacks a promesas

// Then/Catch
// fsPromises.writeFile(ruta, "Hola soy un archivo nuevo", "utf-8") // -> Promesa
// .then(() => {
//   console.log("Se escribio exitosamente el archivo")
// })
// .catch((err) => {
//   console.log("Sucedio un error", err)
// })

/**
 * Reglas -> Async/Await
 * 1 - Si se quiere usar async, se tiene que hacer una funcion asincrona.
 * 2 - El await va dentro de esa funcion asincrona, si no esta el async, no se puede usar await.
 * 3 - El await espera una Promesa.
 * 4 - La funcion async/asincrona retorna una Promesa
 * 5 - Si retornamos en nuestro funcion asincrona y queremos usar ese valor afuera, then/catch
 */

// Async/Await
// const escribirArchivo = async () => {
//   await fsPromises.writeFile(ruta, "Hola soy un archivo nuevo", "utf-8")
// }
// escribirArchivo()

// Paso 2

const agregarLinea = async () =>{
    await fsPromises.appendFile(ruta, "\n Esta es la linea 2", "utf-8")
}

// agregarLinea()



const eliminarArchivo = async () =>{
        await fsPromises.unlink(ruta)
}

setTimeout(() =>{ eliminarArchivo()}, 5000)
