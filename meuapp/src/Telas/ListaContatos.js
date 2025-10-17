import { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import axios from "axios";

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
                console.error("Erro ao buscar contatos", error) 
            })
    }

    // Use o useEffect para buscar dados
    useEffect(() => {
        listaContatos()
    }, [])

  return (
    <View style={estilos.container}>
        <Text style={estilos.titulo}>Lista de Contatos</Text>
        {contatos.length > 0 ? (
            contatos.map((contato, index) => (
                <View key={index}>
                    <Text style={estilos.nome}>👤 Nome: {contato.nome}</Text>
                    <Text style={estilos.telefone}>📞 Telefone: {contato.telefone}</Text>
                </View>
            ))
        ) : (
            <Text >Nenhum contato disponível</Text>
        )}
    </View>
  )
}

const estilos = StyleSheet.create({
    container: {
        marginLeft: 50,
        marginRight: 50,
        borderWidth: 2,
        borderColor: "rgb(254, 56, 92)",
    },

    titulo: {
        fontSize: 20,
        paddingTop: 25,
        paddingLeft: 80,
        paddingBottom: 25,
        fontWeight: "bold",
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