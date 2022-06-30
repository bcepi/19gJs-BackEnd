/**
 * Hacer una funcion que reciba como parametro un nombre y me imprima, hola 'nombre', como estan?
 */

const saludo = (nombre) =>{
    let template = `Hola ${nombre}, como estan?`
    return template
}

saludo('Bere')


/** Separar del arreglo los nombres que tienen menos 5 letras y otro con mayor a 5 letras */

const nombres = ['Paco', 'Lorena', 'Kike', 'Abraham', 'Cris', 'Victor', 'Marco', 'Israel', 'Annie']

//solucion con filter
const mayoresCinco = nombres.filter((nombre)=>nombre.length>=5) 

const menoresCinco = nombres.filter((nombre)=>nombre.length<5)


// solucion con forEach

const separar = ()=>{
    let nombresMenores = []
    let nombresMayores = []

    nombres.forEach((nombre)=>{
        if(nombre.length>=5){
            nombresMayores.push(nombre)
        } else{
            nombresMenores.push(nombre)
        }
    })

    return [nombresMenores, nombresMayores]
}

const [nombresMenores, nombresMayores] = separar()
const resultado = separar ()

// console.log(resultado[0])
// console.log(resultado[1])

//Imprimir nombre a colores usando el paquete colores
const colors = require('colors')

let enterName = ''

if(process.argv[2] !== undefined){
    enterName = process.argv[2]
}

(colors.rainbow(`Hola me llamo ${enterName}`));


// Interactuar con los archivos del sistema (fileSystem)

const fs = require("fs")

// fs.readFile('hola.txt', 'utf8', (err, data)=>{
//     if (err) throw err;
//     console.log(data);
// })

//CRUD

// Crear un archivo 
// fs.writeFile('ejemplo.txt', 'Contenido', 'utf8', (err) =>{
//     if(err){
//         throw err
//     }
// } )

//  Eliminar un archivo 

// fs.unlink('ejemplo.txt', (err) =>{
//     if(err){
//         throw err
//     } else{
//         console.log('El archivo fue eliminado con exito')
//     }
// })

//Crear un directorio

// fs.mkdir('Ejemplo', { recursive: true }, (err)=>{
//     if (err) {
//         throw err;
//     } else{
//         console.log('Directorio creado con exito')
//     }
// })

//Crear archivos dentro de un directorio
// fs.writeFile('Ejemplo/ejemplo2.txt', 'ContenidoEsta paractia nos ayuda a leer directorios', 'utf8', (err) =>{
//     if(err){
//         throw err
//     } else{
//         console.log('Archivo creado con exito')
//     }
// } )

// Leer un directorio 
// fs.readdir('Ejemplo', 'utf8', (err, files)=>{
//     if(err){
//         throw err
//     } else{
//         console.log(files)
//     }
// })

// Eliminar un archivo en el directorio nuevo 
// fs.unlink('Ejemplo/ejemplo2.txt', (err) =>{
//         if(err){
//             throw err
//         } else{
//             console.log('El archivo fue eliminado con exito')
//         }
//     })

// Eliminar un directorio con contenido 
// fs.rmdir('Ejemplo', {recursive: true}, (err) =>{
//         if(err){
//             throw err
//         } else{
//             console.log('El folder fue eliminado con exito')
//         }
//     })