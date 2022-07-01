
// -> -----------------CallBacks 
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


// -> -------------Referencia
// -> Valor
// construir(muro) // -> Spread operator : copy
// console.log("muro", muro)
// const muroAplanado = aplanar(muroConstruido)
// const muroPintado = pintar(muroAplanado)


// setTimeout -> simular asincronia

/*
* Paso 1 -> Construir
* Paso 2 -> Aplanar
* Paso 3 -> Pintar
*/

setTimeout(() => {
    console.log("apenaaaas voy a construir")
    construir({...muro}, aplanar)
  }, 3000)
  
  
  const aplanar = (error, muroAAplanar, pintar) => {
    // Logica negativa
    console.log("error en aplanar", error)
    if(error) { 
      console.log("Hay un error", error)
      return
    }
    muroAAplanar.estaAplanado = true // -> Paso 2
    pintar(muroAAplanar)
  }
  console.log("ya se declaro aplanar")
  

  const pintar = (muroAPintar) => {
    muroAPintar.estaPintado = true
    console.log("exito", muroAPintar)
  }
  console.log("ya se declaro pintar")
  

  const construir = (muroAConstruir, aplanar) => {
    let error = undefined
    muroAConstruir.estaConstruido = false // -> Paso 1
    if(!muroAConstruir.estaConstruido) {
      error = "El muro no fue construido"
    } 
    aplanar(error, muroAConstruir, pintar) // -> izq: el resultado del paso pasado, der: la declaracion del paso que sigue
  }
  console.log("ya se declaro construir")
  






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