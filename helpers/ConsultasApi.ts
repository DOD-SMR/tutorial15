import axios from "axios"
import {Probabilidad} from "../model/Tipos"
async function consultarProbabilidades(nombre:string):Promise<Array<Probabilidad>>{
    
    const url = `https://api.nationalize.io/`
    const params = {name:nombre}
    const respuestaServidor = await axios.get(url,{params})
    
    for (let objeto of respuestaServidor.data.country){
        objeto.pais = await (consultarNombrePais(objeto.country_id))
    }
    return respuestaServidor.data.country
    
}
async function consultarNombrePais(codigo:string):Promise<string>{
    const url = `https://restcountries.com/v3.1/alpha/${codigo}`
    const respuesta= await axios.get(url)
    return respuesta.data[0].translations.spa.common
}
export {consultarProbabilidades}