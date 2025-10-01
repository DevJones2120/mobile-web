import {View, StyleSheet, Text } from "react-native";
import ListaCursos from "../Components/ListaCursos";


export default function Prime() {
  return (
    <>
    <View style={estilos.topo}>
      <Text style={estilos.tituloHeader}>SENAI</Text>
    </View>
    
    <View style={estilos.cursosContent}>
      <Text style={estilos.texto}>- HTML Completo</Text>
      <Text style={estilos.texto}>- Power B.I</Text>
      <Text style={estilos.texto}>- Front End</Text>
      <Text style={estilos.texto}>- Back End</Text>
      <Text style={estilos.texto}>- Java</Text>
    </View>

    <ListaCursos>
    </ListaCursos>
    </>
    
  )
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    backgroundColor: "rgb(220, 20, 60)",
  },

  tituloHeader: {
    whidth: "100%",
    color: "white",
    textAlign: "center",
    paddingTop: 60,
    paddingBottom: 20,
    fontSize: 40,
  },

  cursosContent: {
    whidth: "100%",
    height: 285,
    backgroundColor: "rgb(220, 20, 60)",
    
    
  },

  texto: {
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft:25,
    fontSize: 20,
    backgroundColor: "rgba(229, 240, 252, 1)",
    
  },

});
