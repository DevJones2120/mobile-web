import { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import imagem1 from "../../assets/imgPng-1.png";

export default function Faq() {
    const [faq, setfaq] = useState ([]);

    // Função para buscar contatos do servidor
    const faqFunction = () => {
        axios
            .get("http://10.0.2.2:3000/contatos")
            .then((resposta) => {
                setFaq(resposta.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar contatos", error) 
            })
    }

    // Use o useEffect para buscar dados
    useEffect(() => {
        listaContatos()
    }, [])


export default function Faq() {
  return (
    <ScrollView >
        <View style = {estilos.container}>

        <Text style={estilos.texto}>Tire suas dúvidas conosco.</Text>
        <Image source={imagem1} style={estilos.imagemTopo} />

        <Text style={estilos.textoPreencher}>Preencha os campos abaixo. </Text>
    <View>
        <Text>Nome: </Text>
        <TextInput style={estilos.input}/>
    </View>
    <View>
        <Text>Email: </Text>
        <TextInput style={estilos.input}/>
    </View>
    <View>
        <Text>Descreva sua dúvida: </Text>
        <TextInput style={estilos.inputDuvida}/>
    </View>

    </View>
    </ScrollView>
  )
}

const estilos = StyleSheet.create ({
    container: {
        padding: 60,
    },

    imagemTopo: {
        marginBottom: 20,
        width: 300,
        height: 300,
        borderRadius: 100,
        shadowColor: "rgb(234, 34, 100)",
        shadowOpacity: 0.9,
        elevation: 20,
    },

    texto: {
        fontSize: 25,
        padding: 20,
        fontWeight: "bold",
        
    },

    textoPreencher: {
        fontSize: 15,
        paddingTop: 20,
        paddingBottom: 20,
        fontWeight: "bold",
        
    },
    inputDuvida: {
        height: 200,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: "rgb(254, 56, 92)",
    },

    input: {
        marginTop: 10,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: "rgb(254, 56, 92)",
    }
})