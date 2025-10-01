import { Text, View, StyleSheet, FlatList } from "react-native";

export default function ListaCursos() {

    const data = ["React Native", "Mongo DB", "Express", "Node.js", "C#"];

  return (
    <View style={estilos.container}>
        <FlatList
            data={data}
                renderItem={({ item }) => (
                    <View style={estilos.lastItem}>
                        <Text style={estilos.bullet}>• </Text>
                        <Text style={estilos.text}>{item}</Text>
                    </View>
                    
                )}
        />
    </View>
  )
}

const estilos = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 20,
    },

    lastItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        padding: 12,
        backgroundColor: "rgba(252, 252, 252, 1)",
        borderWidth: 2,
        borderColor:  "rgb(220, 20, 60)",
        borderRadius: 10,
        elevation: 8,
    },

    bullet: {
        fontSize: 30,
        marginRight: 8,
        color: "rgb(220, 20, 60)",
    },

    text: {
        fontSize: 16,
        color: "rgb(220, 20, 60)",

    }
})
