import { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import axios from "axios";
import imagem2 from "../../assets/imgPng-2.png"

export default function ListaContatos() {
    const [contatos, setContatos] = useState ([]);

    // Função para buscar contatos do servidor
    const listaContatos = () => {
        axios
            .get("http://10.0.2.2:3000/contatos")
            .then((resposta) => {
                setContatos(resposta.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar contatos.", error) 
            })
    }

    // Use o useEffect para buscar dados
    useEffect(() => {
        listaContatos()
    }, [])

  return (
    <ScrollView style={estilos.container}>
        <Text style={estilos.titulo}>Lista de Contatos</Text>
        <Image source={imagem2} style={estilos.img} />
        {contatos.length > 0 ? (
            contatos.map((contato, index) => (
                <View style={estilos.dados} key={index}>
                    <Text style={estilos.nome}>👤 Nome: {contato.nome}</Text>
                    <Text style={estilos.telefone}>📞 Telefone: {contato.telefone}</Text>
                </View>
            ))
        ) : (
            <Text >Nenhum contato disponível</Text>
        )}
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
    },
    dados: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "rgb(254, 56, 92)",
        padding: 8,
        margin: 20,
    },
    titulo: {
        fontSize: 25,
        paddingTop: 25,
        paddingLeft: 80,
        paddingBottom: 25,
        fontWeight: "bold",
    },
    img: {
        width: 250,
        height: 250,
        marginLeft: 50 ,
        shadowColor: "rgb(234, 34, 100)",
        shadowOpacity: 0.9,
        elevation: 20,
    },
    nome: {
        fontSize: 16,
        padding: 10,
    },
    telefone: {
        fontSize: 16,
        padding: 10,
        

    },
})