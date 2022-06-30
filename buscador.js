process.argv[3]

/**Generar un script que reciba parametros y que me diga si el nombre esta en el arreglo nombres, 
 * si si esta, que nos imprima si esta, y si no, que imprima Afuera de aqui */

 const nombres = ['Paco', 'Lorena', 'Kike', 'Abraham', 'Cris', 'Victor', 'Marco', 'Israel', 'Annie']

let enterName = ''

if(process.argv[2] !== undefined){
    enterName = process.argv[2]
}

let resultado = nombres.filter(nombre => nombre === enterName)

if(resultado.length >= 1){
    console.log('Si, si existe')
} else {
    console.log('Fuera del arreglo')
}