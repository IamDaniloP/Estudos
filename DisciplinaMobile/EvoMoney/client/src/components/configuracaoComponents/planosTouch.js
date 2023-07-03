import { Text, TouchableOpacity, StyleSheet } from "react-native";

export function PlanosTouch({qtMeses, qtDesconto, valor, valorTotal}) {
    return (
        <TouchableOpacity style={styles.Botao}>
            <Text style={styles.qtMeses}>{qtMeses}</Text>
            <Text style={styles.qtDesconto}>{qtDesconto}</Text>
            <Text style={styles.valor}>R$ {valor} / Mês</Text>
            <Text style={styles.valorTotal}>O valor R$ {valorTotal} será cobrado a cada mês. Possui renovação automática.</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    Botao: {
        width: '50%',
        height: 150,
        margin: 7,
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#47c83e',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },

    qtMeses: {
        fontSize: 23,
        fontWeight: 400,
        marginBottom: '3%'
    },

    qtDesconto: {
        color: 'red',
        fontSize: 17,
        fontWeight: 300,
    },

    valor: {
        fontSize: 26,
        fontWeight: 300,
        marginTop: '3%',
        marginBottom: '5%',
    },

    valorTotal: {
        color: '#a1a1a1',
        textAlign: 'center',
        fontSize: 11,
        paddingLeft: 15,
        paddingRight: 15,
        fontWeight: 300,
    },
});