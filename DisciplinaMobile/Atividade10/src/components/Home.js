import { StyleSheet, View, Text} from 'react-native';

export function Home() {
    return (

        <View styles={styles.container}>
            <Text>Essa é a página Home!</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});
