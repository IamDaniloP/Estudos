import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function InputEmail() {

    return (
        <View style={styles.caixaInput}>
            <MaterialCommunityIcons style={styles.iconeEmail} name="email" size={24} color="#a1a1a1" />
            <TextInput type='email' placeholder='Digite seu e-mail' placeholderTextColor={'#a1a1a1'} style={styles.inputEmail}
                keyboardType="email-address" />
        </View>
    );
};

export function InputSenha() {

    const [trocarOlho, setTrocarOlho] = useState(true);
    const [esconderSenha, setEsconderSenha] = useState(true);


    const visibilidadeDaSenha = () => {
        setTrocarOlho(!trocarOlho);
        setEsconderSenha(!esconderSenha);
    };

    return (

        <View style={styles.caixaInput}>
            <FontAwesome5 style={styles.iconeSenha} name="key" size={22} color="#a1a1a1" />
            <TextInput placeholder='Digite sua senha' placeholderTextColor={'#a1a1a1'} style={styles.inputSenha} secureTextEntry={esconderSenha} />

            <TouchableOpacity onPress={visibilidadeDaSenha}>
                {
                    trocarOlho ? // se trocarOlho = true
                        <MaterialIcons style={styles.iconeOlho} name="visibility" size={20} color="#a1a1a1" />
                        : //senão
                        <MaterialIcons style={styles.iconeOlho} name="visibility-off" size={20} color="#a1a1a1" />
                }
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    caixaInput: {
        width: '60%',
        borderBottomWidth: 1,
        borderColor: '#a1a1a1',
        marginBottom: 65,
    },

    inputEmail: {
        width: 280,
        paddingLeft: 43,
        marginBottom: 3,
        fontSize: 18,
    },

    iconeEmail: {
        position: 'absolute',
        left: 10,
        bottom: 1,
    },

    inputSenha: {
        width: 280,
        paddingLeft: 43,
        paddingRight: 43,
        marginBottom: 3,
        fontSize: 18,
    },

    iconeSenha: {
        position: 'absolute',
        left: 10,
        bottom: 4,
    },

    iconeOlho: {
        position: 'absolute',
        right: 10,
        bottom: 5,
    },

});