import { StyleSheet, View, Text} from 'react-native';

export function Profile() {
    return (

        <View styles={styles.container}>
            <Text>Essa é a página Profile!</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});
