import { useState } from "react";
import { Button, ScrollView, Text, TextInput, StyleSheet, } from "react-native";
import axios from "axios";

export default function Cadastro() {
    const [nome, setNome] = useState(" ");
    const [telefone, setTelefone] = useState("");

    const enviarContato = async () => {
        if (!nome || !telefone) {
            Alert.alert("Erro, por favor preencha todos os campos");
            return;
        }
    }

    const novoContato = {nome, telefone};
    axios.post(`http://localhost:3000/contatos`, novoContato)


  return (
    <ScrollView style={estilos.container}>
        <Text style={estilos.label}>👤 Nome :</Text>
        <TextInput 
            style={estilos.input}
            value={nome}
            onChange={setNome}
            placeholder="Digite seu nome" 
        />
        <Text style={estilos.label}>📞 Telefone :</Text>
        <TextInput 
            style={estilos.input}
            value={telefone}
            onChange={setTelefone}
            placeholder="Digite seu telefone" 
        />

        <Button title="Cadastro" onPress={enviarContato}/>
    </ScrollView>
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
        borderColor: "ccc",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    }
});