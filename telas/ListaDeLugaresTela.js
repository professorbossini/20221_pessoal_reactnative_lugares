import { 
  StyleSheet, 
  Text, 
  View,
  FlatList
} 
from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import LugarItem from '../componentes/LugarItem'
import DetalhesDoLugarTela from './DetalhesDoLugarTela'

const ListaDeLugaresTela = (props) => {
  const lugares = useSelector(estado => estado.lugares.lugares)
  return (
    <FlatList 
      data={lugares}
      keyExtractor={lugar => lugar.id}
      renderItem={lugar => (
        <LugarItem 
          nomeLugar={lugar.item.titulo}
          onSelect={() => props.navigation.navigate ('DetalhesDoLugar', {tituloLugar: lugar.item.titulo, idLugar: lugar.id})}
          imagem={null}
          endereco={null}
        />

      )
        
      }
    />
  )
}



export default ListaDeLugaresTela

const styles = StyleSheet.create({})