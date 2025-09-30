import {View, StyleSheet, Text } from "react-native";

export default function Prime() {
  return (
    <>
    <View style={estilos.topo}>
      <Text style={estilos.tituloHeader}>Loja SENAI</Text>
    </View>

    
    <View style={estilos.cursosContent}>
      <Text style={estilos.cursosContent}>- HTML Completo</Text>
      <Text style={estilos.cursosContent}>- Power B.I</Text>
      <Text style={estilos.cursosContent}>- Front End</Text>
      <Text style={estilos.cursosContent}>- Back End</Text>
      <Text style={estilos.cursosContent}>- Java</Text>
    </View>
    </>
  )
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 150,
    backgroundColor: "rgb(220, 20, 60)",
  },
  tituloHeader: {
    whidth: "100%",
    color: "white",
    textAlign: "center",
    paddingTop: 60,
    fontSize: 20,
  },
  cursosContent: {
    whidth: "100%",
    height: 35,
    paddingTop: 8,
    paddingLeft: 15,
    backgroundColor: "rgb(217, 234, 253)",
    fontSize: 20,
  }


});
