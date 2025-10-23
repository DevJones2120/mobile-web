import { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';
import axios from "axios";
import imagem2 from "../../assets/imgPng-2.png"
import imagem6 from "../../assets/imgPng-6.png"

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

    // Função para excluir um contato
    const deleteContato = (id) => {
        axios
        .delete(`http://10.0.2.2:3000/contatos/${id}`)
        .then(() => {
            //Atualizar lista contato
            setContatos(contatos.filter((contato) => contato !== id));
            Alert.alert("Sucesso", "Contato excluido com sucesso!")
        })
        .catch((error) => {
            console.log("Erro ao excluir contato", error)
            Alert.alert("Erro ao excluir")
        });
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
                    <Image style={estilos.imgUser} source={imagem6}/>
                    <Text style={estilos.nome}>👤 Nome: {contato.nome}</Text>
                    <Text style={estilos.telefone}>📞 Telefone: {contato.telefone}</Text>
                    <TouchableOpacity style={estilos.button} onPress={() => deleteContato(contato.id)}>
                        <Text style={estilos.titleButton}>Excluir</Text>
                    </TouchableOpacity>
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
        margin: 15,
        marginVertical: 1,
    },
    button: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "rgba(223, 38, 72, 1)",
        backgroundColor: "rgb(234, 34, 100)",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 50,
        marginRight: 50,
        margin: 10,
    },
    titleButton: {
        borderColor: "#000000ff",
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 20,
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
        marginLeft: 50
    },
    imgUser: {
        width: 150,
        height: 150,
        marginLeft: 90
    },
    nome: {
        fontSize: 16,
        paddingLeft: 60,
        padding: 10,
    },
    telefone: {
        fontSize: 16,
        paddingLeft: 60,
        padding: 10,
    }
})