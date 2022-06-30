/**
 * usar el metodo reduce
 * Usando el arr de nombres, retornar un objeto, key: nombre, value: longitud de caracteres 
 */

 const nombres = ['Paco', 'Lorena', 'Kike', 'Abraham', 'Cris', 'Victor', 'Marco', 'Israel', 'Annie']

 const retornoObj = (arr) =>{
    return arr.reduce((acc, element)=>{
        let nombre = element
        let longitudNombre = element.length
        acc [nombre] = longitudNombre
        return acc
    }, {}) 
 }

 console.log(retornoObj(nombres))

 //Eliminar los archivos dentro del directorio, todos