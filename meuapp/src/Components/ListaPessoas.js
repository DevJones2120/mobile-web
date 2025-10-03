import { Text, View, StyleSheet } from 'react-native'

export default function ListaPessoas() {
    const pessoas = [
        {
            id: 1,
            nome: "Julia",
            idade: 20,
        },
        {
            id: 2,
            nome: "Caio",
            idade: 40,
        },
        {
            id: 30,
            nome: "Edu",
            idade: 18,
        },
            {
            id: 4,
            nome: "Popeto",
            idade: 36,
        },


    ];

    
  return (
    <View style={estilos.container}>
        <Text style={estilos.titulo}>📝Dados</Text>

        {pessoas.map((pessoa) => (
            <View style={estilos.card}>
                <Text>Nome: {pessoa.nome}  •  </Text>
                <Text>Idade: {pessoa.idade} anos </Text>
            </View>
        ))}

    </View>
  )
}

const estilos = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 40,
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        padding: 12,
        backgroundColor: "rgba(252, 252, 252, 1)",
        borderWidth: 2,
        borderColor:  "rgb(220, 20, 60)",
        borderRadius: 10,
        elevation: 8,
    }
})
