import { StyleSheet, View, Text, Button} from 'react-native';


export function DetalheMoto() {
    return (

        <View style={styles.container}>
            <Text>
                Página de Moto! MOOMOMOMOMOMOMO
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
