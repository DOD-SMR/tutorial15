import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import itemPaisProbabilidad from '../itemPaisProbabilidad'
import { Probabilidad } from '../../model/Tipos'

type ListaProbabilidadesProps={
    listaProbabilidades:Array<Probabilidad>
}
export default function ResultadosLayer({listaProbabilidades}:ListaProbabilidadesProps) {
  
  return (
    <View>
      <FlatList
                data={listaProbabilidades}
                renderItem={itemPaisProbabilidad}
                keyExtractor={ item => item.country_id}
                ListEmptyComponent={
                  () => <Text style={{margin:"auto"}}>No se han encontrado resultados</Text>
                }/>
    </View>
  )
}

const styles = StyleSheet.create({})