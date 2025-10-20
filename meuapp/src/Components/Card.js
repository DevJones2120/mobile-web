import { Text, View, StyleSheet, Button, } from 'react-native'

export default function Card(props) {

    return (
        <View style={estilos.container}>
            <Text style={estilos.cardTitle}>{props.title}</Text>
            <Text style={estilos.cardContent}>{props.content}</Text>
            <Button
                title={props.textButton}
                onPress={props.onPress}
            />
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
    }
});