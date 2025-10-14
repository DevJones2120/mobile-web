import React from 'react'
import { Text, View, StyleSheet } from "react-native"

export default function Header() {
    return (
        <View style={estilos.topo}>
            <Text style={estilos.tituloHeader}>Fut Popeto</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 120,
        backgroundColor: "rgb(255, 149, 39)",
        borderBottomColor: "rgb(254, 56, 92)",
        borderBottomWidth: 3,
    },
    tituloHeader: {
        width: "100%",
        textAlign: "center",
        color:"#fff",
        fontWeight:"bold",
        fontSize:20,
        paddingTop:45
    }
})