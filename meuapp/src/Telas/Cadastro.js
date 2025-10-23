import { useState } from "react";
import { Button, View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from "react-native";
import   axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {
    const [nome, setNome] = useState(" ");
    const [telefone, setTelefone] = useState("");
    const navigation = useNavigation();
    

    const enviarContato = async () => {
        if (!nome || !telefone) {
            Alert.alert("Erro, por favor preencha todos os campos!");
            return;
        }

         const novoContato = {nome, telefone};
    

    axios.post('http://10.0.2.2:3000/contatos', novoContato)
        .then(resposta => {
            if (resposta.status == 201) {
                Alert.alert("Sucesso, Contato adicionado!");
                setNome("");
                setTelefone("");
                navigation.navigate("ListaContatos")
            } else {
                Alert.alert("Erro, falha ao adicionar");
            }
        })
        axios.post('http://10.0.2.2:3000/contatos', novoContato)
        .then(resposta => {
            if (resposta.status == 201) {
                Alert.alert<Image>("Sucesso, Contato adicionado!");
                setNome("");
                setTelefone("");
                navigation.navigate("ListaContatos")
            } else {
                Alert.alert("Erro, falha ao adicionar");
            }
        })
    }
     

   


  return (
    <View style={estilos.container}>
        <Text style={estilos.label}>👤 Nome :</Text>
        <TextInput 
            style={estilos.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome" 
        />
        <Text style={estilos.label}>📞 Telefone :</Text>
        <TextInput 
            style={estilos.input}
            value={telefone}
            onChangeText={setTelefone}
            placeholder="Digite seu telefone" 
        />

        {/* <Button title="Cadastrar" onPress={enviarContato}/> */}

        <TouchableOpacity style={estilos.button} onPress={enviarContato}>
            <Text style={estilos.titleButton}>Cadastrar</Text>
        </TouchableOpacity>
    </View>
  )
}

const estilos = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: "bold",
    },
    input: {
        marginLeft: 25,
        marginRight: 25,
        borderWidth: 1,
        borderColor: "rgb(254, 56, 92)",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    button: {
        backgroundColor: "rgb(122, 218, 165)",
        borderWidth: 2,
        borderColor: "#000000ff",
        borderRadius: 10,
        padding: 10,
        marginLeft: 60,
        marginRight: 60,
        alignItems: "center",
    },
    titleButton: {

        borderColor: "#000000ff",
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 20,
    }
});