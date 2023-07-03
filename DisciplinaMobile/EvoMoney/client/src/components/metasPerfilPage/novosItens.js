import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export function NovosItens({ props, funcao }) {
    return (
        <TouchableOpacity onPress={() => funcao(props.id)} style={styles.botao}>

            <View style={styles.caixaIconeImg}>
                <Text style={styles.iconeImg}> {props.metas.charAt(0)} </Text>
            </View>

            <Text style={styles.texto}>
                {props.metas}
            </Text>

            <AntDesign style={styles.icone} name="delete" size={20} color="black" />

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao: {
        width: 150,
        height: 160,
        padding: 10,
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#47c83e',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        justifyContent: 'center',
    },

    texto: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 300,
        fontSize: 24,
        textAlign: 'center',
    },

    caixaIconeImg: {
        borderRadius: 30,
        backgroundColor: '#a1a1a1',
    },

    iconeImg: {
        color: '#fff',
        fontSize: 27,
        fontWeight: 900,
        padding: 10,
    },

});