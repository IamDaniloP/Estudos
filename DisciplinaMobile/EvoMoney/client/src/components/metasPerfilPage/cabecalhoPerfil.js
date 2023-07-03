import { View, Text, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export function CabecalhoPerfil() {
    return (

        <View style={styles.container}>

            <View style={styles.containerPerfil}>

                <FontAwesome name="user-circle" size={72} color="#a1a1a1" style={styles.profile} />

                <Text style={styles.textoPerfil}>
                    Bem vindo, Danilo!
                </Text>
            
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: '7%',
        alignItems: 'center',
    },

    containerPerfil: {
        width: '90%',
        alignItems: 'center',
    },

    textoPerfil: {
        marginTop: 10,
        fontSize: 23,
        fontWeight: 300,
    },
});