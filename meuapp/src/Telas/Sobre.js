import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Imagem1 from "../../assets/img-1.jpg"
import Imagem2 from "../../assets/img-1.jpg"


export default function Sobre() {
  const info = {
    nomeApp: "Fut Popeto",
    versao: "1.0.0",
    desenvolvedor: "DevJones",
  }


  return (
    <ScrollView style={estilos.container}>
        <Text>Sobre</Text>
        <Image source={Imagem1} style={estilos.image}/>
        <View style={estilos.line}/>
        <Image source={Imagem2} style={estilos.image}/>
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
    padding: 80,
  },

  image: {
    padding: 10,
    margin: 10,
    borderRadius: 8,
    borderColor: "red",
    borderWidth: 2,
  },

  line: {
    width: "90%",
    height: 1,
    backgroundColor: "rgb(254, 56, 92)",
    marginVertical: 10,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  }
})
