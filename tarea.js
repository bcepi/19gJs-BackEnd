// hacer el pastel con promesas

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

const prepararPastel = prepararMasa(pastel)

prepararPastel
  .then((ingredientes)=>{
    hornearMasa(ingredientes)
        .then((masa)=>{
            decorarPastel(masa)
                .then((pan)=>{
                    console.log('El pastel esta listo!')
                    console.log(pan)
                }).catch((err)=>{console.log(err)})
        }).catch((err)=>{console.log(err)})})
  .catch((err) => console.error(err))