import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';

export function AdicionarItem({ funcao }) {

    const [texto, setTexto] = useState('');

    const pegarMudanca = (valor) => {
        setTexto(valor);
    }

    return (

        <View style={styles.areaAdicionar}>

            <Text style={styles.textoMetas}>
                Minhas Metas
            </Text>

            <View style={styles.alinhamento}>
                <View style={styles.input}>
                    <TextInput placeholder='Adicione sua meta' placeholderTextColor={'#a1a1a1'} style={styles.campoInput} onChangeText={pegarMudanca} />
                </View>

                <TouchableOpacity onPress={() => funcao(texto)} style={styles.botao}>
                    <AntDesign name="plus" size={28} color="#fff"/>
                </TouchableOpacity>
            </View>


        </View>

    );
};

const styles = StyleSheet.create({
    areaAdicionar: {
        alignItems: 'center',
        marginTop: '10%',
    },

    input: {
        height: 45,
        width: '72%',
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
        padding: 7,
        marginLeft: 10,
        backgroundColor: '#47c83e',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoBotao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 300,
    },

    textoMetas: {
        fontSize: 25,
        fontWeight: 800,
        marginTop: 10,
    },

    alinhamento: {
        flexDirection: 'row',
        marginTop: '5%',
    },
    
});