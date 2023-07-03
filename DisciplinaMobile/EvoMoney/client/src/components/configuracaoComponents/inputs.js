import { View, StyleSheet, TextInput } from 'react-native';

export function Inputs({ titulo }) {
    return (
        <View style={styles.caixaInputsConfirmacao}>
            <TextInput placeholder={titulo}></TextInput>
        </View>
    );
};

const styles = StyleSheet.create ({
    caixaInputsConfirmacao: {
        width: '75%',
        height: 30,
        marginBottom: 10,
        paddingLeft: 15,
        borderWidth: 1,
        borderColor: '#a1a1a1',
        borderRadius: 5,
        justifyContent: 'center',
    },
});