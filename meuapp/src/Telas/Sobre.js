import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Imagem1 from "../../assets/imgPng-3.png"
import Imagem2 from "../../assets/imgPng-4.png"


export default function Sobre() {
  const info = {
    nomeApp: "Fut Popeto",
    versao: "1.0.0",
    desenvolvedor: "DevJones",
  }


  return (
    <ScrollView style={estilos.container}>
        <Text style={estilos.titulo}>Sobre</Text>
        
        <Image source={Imagem1} style={estilos.img}/>
        <View style={estilos.line}/>

        <Image source={Imagem2} style={estilos.img}/>
        <View style={estilos.line}/>

        <Text style={estilos.titulo}>Sobre o APP</Text>
        <Text>Nome: {info.nomeApp}</Text>
        <Text>Versão: {info.versao}</Text>
        <Text>Desenvolvido: {info.desenvolvedor}</Text>
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
  container: {
    padding: 60,
  },
  titulo: {
    fontSize: 25,
    padding: 60,
  },

  img: {
    width: 300,
    height: 300,
  },

  line: {
    width: "90%",
    height: 2,
    backgroundColor: "rgb(254, 56, 92)",
    marginVertical: 10,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  }
})
