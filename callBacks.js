const muro = {
    estaConstruido: false,
    estaAplanado: false, 
    estaPintado: false, 
    estaMasAlto: false
}

function construir(muroAConstruir){
    muroAConstruir.estaConstruido = true
    return muroAConstruir
}

function aplanar(muroAplanar){
    muroAplanar.estaAplanado = true
    return muroAplanar
}

function pintar(muroAPintar){
    muroAPintar.estaPintado = true
    return muroAPintar
}

// const muroConstruido = construir(...muro)
// const muroAplanado = aplanar(muroConstruido)
// const muroPintado = pintar(muroAplanado)

/**
 * Vamos a hacer un pastel 
 * 1 - Preparar la masa
 * 2- Hornearla
 * 3- Decorarlo
 */

let pastel = {
    masaPreparada: false,
    masaHorneada: false,
    panDecorado: false
}

// Proceso de preparacion:

const prepararMasa = (ingredientes) =>{
    let err = undefined;

    ingredientes.masaPreparada = true 
    if(!ingredientes.masaPreparada){
        err="Ingredientes equivocados!"
        console.log(err)
        return
    }
    hornearMasa(err, ingredientes, decorarPastel)
}

const hornearMasa = (err, masa, decorarPastel) =>{
    console.log(err)
    masa.masaHorneada = true
    if(!masa.masaHorneada){
        console.log("No funciona el horno")
        return
    }
    decorarPastel(err, masa)
}

const decorarPastel = (err, pan) =>{
    pan.panDecorado = true

    if(!pan.panDecorado){
        console.log(err)
        return
    } 
    console.log('El pastel esta listo!')
}

setTimeout(() => {
    prepararMasa({...pastel}, hornearMasa)
    console.log({...pastel})
  }, 1500)


  // hacer el pastel con promesas