import { View, Text, StyleSheet } from "react-native";

export function CabecalhoMetas () {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Metas</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },

    texto: {
        color: '#fff',
        fontSize: 20,
    },
})