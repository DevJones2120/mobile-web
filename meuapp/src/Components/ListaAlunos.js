import { FlatList, Text, StyleSheet, View } from 'react-native'

export default function ListaAlunos() {

    const alunos = ["Rodrigo", "Juliana", "Paty", "Fernando", "Popeto"];

  return (
    <View style={estilos.container}>
        <FlatList
            data={alunos}
              renderItem={({item}) => (
                  <View style={estilos.lastItem}>
                      <Text style={estilos.ponto}>•</Text>
                      <Text style={estilos.text}>{item}</Text>
                  </View>

              )}
        />
    </View>
  )
}

const estilos = StyleSheet.create ({

  container: {
        marginTop: 40,
        padding: 20,
    },

    lastItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        padding: 6,
        backgroundColor:  "rgb(220, 20, 60)",
        borderWidth: 2,
        borderColor:  "rgb(220, 20, 60)",
        borderRadius: 10,
        elevation: 8,
    },

    ponto: {
        fontSize: 30,
        padding: 6,
        color: "rgba(255, 255, 255, 1)",
    },

    text: {
        fontSize: 16,
        color: "rgba(255, 255, 255, 1)",

    }
})