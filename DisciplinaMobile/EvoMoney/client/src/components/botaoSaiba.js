import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function BotaoSaiba() {
    return (
        <TouchableOpacity style={styles.botaoSaiba} >
            <Text style={styles.textoSaiba}>Saiba mais</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    botaoSaiba: {
        width: 90,
        height: 35,
        backgroundColor: '#47c83e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },

    textoSaiba: {
        fontSize: 16,
        color: '#fff',
    },

    caixaBotaoLogin: {
        backgroundColor: '#47c83e',
        padding: 8,
        borderRadius: 5,
        width: 100,
        alignItems: 'center',
    },

    textoBotaoLogin: {
        color: '#fff',
        fontSize: 20,
    },

});