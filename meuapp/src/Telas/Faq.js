import { useEffect, useState } from 'react'
import axios from "axios";
import { Text, View, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import imagem1 from "../../assets/imgPng-1.png";
import imagem2 from "../../assets/imgPng-5.png";


export default function Faq() {
    const [faq, setfaq] = useState ([]);

    // Função para buscar faq do servidor
    const infoFaq = () => {
        axios
            .get("http://10.0.2.2:3000/faq")
            .then((res) => {
                setfaq(res.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar resposta.", error) 
            })
    }

    // Use o useEffect para buscar dados
    useEffect(() => {
        infoFaq()
    }, [])

  return (
    <ScrollView >
        <View style = {estilos.container}>

        <Text style={estilos.texto}>Tire suas dúvidas conosco.</Text>
        <Image source={imagem1} style={estilos.imagemTopo} />
        {faq.length > 0 ? (
            faq.map((item, index) => (
                <View style={estilos.texto} key={index}>
                    <Text style={estilos.intemPergunta} >{item.pergunta}</Text>
                    <Image source={imagem2} style={estilos.img}/>
                    <Text >{item.resposta}</Text>
                </View>
               
                ))
        ) : (
            <Text >Nenhuma informação disponível</Text>
        )}


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
    img: {
        width: 250,
        height: 250,
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
    intemPergunta: {
        fontWeight: "bold",
        fontSize: 20,
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