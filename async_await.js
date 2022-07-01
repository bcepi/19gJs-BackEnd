/**
 * Async/Await
 * async => indica cuando una funcion va a ser asincrona (internamente necesita un await)
 * await => espera una promesa se cumpla 
 */

 let pastel = {
    masaPreparada: false,
    masaHorneada: false,
    panDecorado: false
}

const prepararMasa = (ingredientes) =>{
    return new Promise((resolve, reject)=>{
        setTimeout (()=>{
            ingredientes.masaPreparada = true

            if(ingredientes.masaPreparada){
                resolve (ingredientes)
            } else {
                reject (new Error('No se consiguieron los ingredientes'))
            }
        },1000)
    })
}

const hornearMasa = (masa) =>{
    return new Promise((resolve, reject)=>{
        setTimeout (()=>{
            masa.masaHorneada = true

            if(masa.masaHorneada){
                resolve (masa)
            } else {
                reject (new Error('El horno no funciona o nos quedamos sin gas'))
            }
        },1000)
    })
}

const decorarPastel = (pan) =>{
    return new Promise((resolve, reject)=>{
        setTimeout (()=>{
            pan.panDecorado = true

            if(pan.panDecorado){
                resolve (pan)
            } else {
                reject (new Error('El decorado quedo feo!!'))
            }
        }, 1000)
    })
}

const prepararPastel = async (pastel) =>{
    const masadePastel = await prepararMasa(pastel)
    const masaHorneada = await hornearMasa(masadePastel)
    const pastelDecorado = await decorarPastel(masaHorneada)
    console.log('El pastel esta listo!')
    console.log(pastelDecorado)
}

prepararPastel(pastel)

