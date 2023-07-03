import { StyleSheet, View, Text} from 'react-native';

export function Settings() {
    return (

        <View styles={styles.container}>
            <Text>Essa é a página Settings!</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});
