import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export function AdicionarItem({ funcao }) {

    const [texto, setTexto] = useState('');

    const pegarMudanca = (valor) => {
        setTexto(valor);
    }

    return (

        <View style={styles.areaAdicionar}>
            <View style={styles.input}>
                <TextInput placeholder='Adicione um item aqui' placeholderTextColor={'#a1a1a1'} style={styles.campoInput} onChangeText={pegarMudanca} />
            </View>

            <TouchableOpacity onPress={() => funcao(texto)} style={styles.botao}>
                <Text style={styles.textoBotao}>Adicionar Item</Text>
            </TouchableOpacity>

        </View>

    );
};

const styles = StyleSheet.create({
    areaAdicionar: {
        alignItems: 'center',
    },

    input: {
        marginTop: 16,
        height: 50,
        width: '80%',
        justifyContent: 'center',
        borderColor: '#a1a1a1',
        borderWidth: 2,
        borderRadius: 5,
    },

    campoInput: {
        paddingLeft: 15,
        fontSize: 20,
    },

    botao: {
        marginTop: 18,
        marginBottom: 18,
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 10,
    },

    textoBotao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 300,
    },
    
});