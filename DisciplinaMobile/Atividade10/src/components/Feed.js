import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function Feed({navigation}) {
    return (

        <View style={styles.container}>

            <TouchableOpacity onPress={() => navigation.navigate('detalheMoto')}>
                <Text>Moto</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('detalheCarro')}>
                <Text>Carro</Text>
            </TouchableOpacity>


        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});
