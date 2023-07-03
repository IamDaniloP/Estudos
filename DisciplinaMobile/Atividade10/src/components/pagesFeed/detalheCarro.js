import { StyleSheet, View, Text, Button} from 'react-native';


export function DetalheCarro({navigation}) {
    return (

        <View style={styles.container}>
            <Text>
                Página de Carro! VRUMVRUM
            </Text>

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
