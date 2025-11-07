import axios from "axios"

async function consultarProbabilidades(nombre){
    const url = `https://api.nationalize.io/?name=${nombre}`
    const respuestaServidor = await axios.get(url)
    for (let objeto of respuestaServidor.data.country){
        objeto.pais = await (consultarNombrePais(objeto.country_id))
    }
    return respuestaServidor.data.country
    
}
async function consultarNombrePais(codigo){
    const url = `https://restcountries.com/v3.1/alpha/${codigo}`
    const respuesta= await axios.get(url)
    return respuesta.data[0].translations.spa.common
}
export {consultarProbabilidades}