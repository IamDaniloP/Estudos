import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import { InputEmail, InputSenha } from '../components/login/input';


export function LoginPage({ navigation }) {
    return (

        <View style={styles.container}>

            <View style={styles.caixaLogo}>
                <Image style={styles.logo} source={require('../../assets/img/logo.png')} />
            </View>

            <View style={styles.container2}>

                <View style={styles.caixa}>

                    <FontAwesome name="user-circle" size={72} color="#a1a1a1" style={styles.profile} />

                    <View style={styles.login}>

                        <InputEmail />

                        <InputSenha />

                    </View>

                </View>


                <TouchableOpacity style={styles.caixaBotaoLogin} onPress={() => navigation.navigate('routesPage')}>
                    <Text style={styles.textoBotaoLogin}>LOGIN</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#47c83e',
    },

    caixaLogo: {
        alignItems: 'center',
        marginTop: '15%',
    },

    logo: {
        width: 170,
        resizeMode: 'contain',
    },

    container2: {
        alignItems: 'center',
        position: 'relative',
    },

    caixaBotaoLogin: {
        position: 'absolute',
        bottom: 40,
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

    caixa: {
        width: '90%',
        height: 400,
        marginTop: '13%',
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    profile: {
        marginTop: 30,
        marginBottom: 50,
    },

    login: {
        alignItems: 'center',
    },


});