import {View, StyleSheet, Text } from "react-native";
import ListaCursos from "../Components/ListaCursos";
import ListaAlunos from "../Components/ListaAlunos";
import ListaPessoas from "../Components/ListaPessoas";


export default function Prime() {
  return (
    <>
    <View style={estilos.topo}>
      <Text style={estilos.tituloHeader}>SENAI</Text>
    </View>

    <ListaPessoas/>
    
    <View style={estilos.cursosContent}>
      <Text style={estilos.texto}>- HTML Completo</Text>
      <Text style={estilos.texto}>- Power B.I</Text>
      <Text style={estilos.texto}>- Front End</Text>
      <Text style={estilos.texto}>- Back End</Text>
      <Text style={estilos.texto}>- Java</Text>
    </View>

    <ListaCursos></ListaCursos>

    <View style={estilos.meio}>
      <Text style={estilos.tituloAluno}>🗒️Liista de Alunos</Text>
    </View>

    <ListaAlunos></ListaAlunos>
    </>
    
  )
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    backgroundColor: "rgb(220, 20, 60)",
  },

  meio: {
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

    tituloAluno: {
    whidth: "100%",
    color: "white",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 23,
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
    backgroundColor: "rgba(255, 255, 255, 1)",
    
  },

});
