import { Text, View, StyleSheet, Input } from 'react-native';
import imagemFaq from "../../assets/faq1.jpg";

export default function Faq() {
  return (
    <View style = {estilos.container}>
        <Text style = {estilos.texto}>Tire suas dúvidas sobre os próximos jogos.</Text>

    </View>
  )
}

const estilos = StyleSheet.create ({
    container: {
        padding: 20,
    },

    texto: {
        fontSize: 20,
        padding: 20,
        fontWeight: "bold",
    }
})