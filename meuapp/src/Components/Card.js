import { Text, View, StyleSheet, Button, TouchableOpacity, } from 'react-native'

export default function Card(props) {

    return (
        <View style={estilos.container}>
            <Text style={estilos.cardTitle}>{props.title}</Text>
            <Text style={estilos.cardContent}>{props.content}</Text>
            <TouchableOpacity style={estilos.button} onPress={props.onPress} >
                <Text style={estilos.titleButton} >{props.textButton}</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: "#ffff",
        borderRadius: 1.41,
        padding: 20,
        margin: 20,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    cardContent: {
        fontSize: 14,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "rgb(254, 56, 92)",
        borderColor: "#000000ff",
        borderRadius: 8,
        padding: 6,
        marginLeft: 20,
        marginRight: 20,
        alignItems: "center",
    },
    titleButton: {
        borderColor: "#000000ff",
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 18,
    }
});