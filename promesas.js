// Promesas
/**
 * Status/Estado
 * 1 - Rechazada
 * 2 - Acceptada
 * 3 - Pending
 * 
 * new Promise((resolve, reject) => {})
 * Resolve -> FUNCTION -> Cuando ya se cumplio, pasa al estado accepted, lo que tenia que hacer la promesa, y se resuelve -> si se construyo
 * Reject -> FUNCTION -> Cuando no se cumple y pasa a su estado rejected, y no se resuelve -> No se cumplio
 * 
 * Then -> Cuando ya se ejecuto, se cumplio 
 * Catch -> Error -> imprimir
 */

 const muro = {
    construido: false,
    aplanado: false,
    pintado: false
  }
  
  // Declarando
  const construir = (muro) => {
    // Haciendo mi promesa, declarandola
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Ejecucion
        muro.construido = true
        // Ya se resolvio mi promesa
        if(muro.construido){
          resolve(muro) // -> me ahorro return, es un return -> then recibe esto
        }else {
          reject(new Error("No se pudo construit")) // catch recibe esto
        }
      }, 3000)
    })
  }
  
  const muroConstruidoPromesa = construir({...muro})
  
  console.log("antes del then y catch", muroConstruidoPromesa)
  
  muroConstruidoPromesa
  .then((muro) => console.log("El muro ya fue construido", muro))
  .catch((err) => console.error(err))