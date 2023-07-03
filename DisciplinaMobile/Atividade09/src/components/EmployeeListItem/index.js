import { StyleSheet, View, Image, Text } from "react-native";

export function EmployeeListItem (props) {
    return (
        <View style={styles.container}>

            <View style={styles.image}>
                <Image source={require('/Users/DIDO/PROJETOS/REACT/atividade-09/assets/logo.png')} style={styles.img}/>
            </View>

            <View style={styles.informations}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.number}>{props.number}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
    },
    informations: {
        justifyContent: 'center',
    },
    image: {
        borderRadius: 30,
        backgroundColor: 'grey',
        height: 50,
        width: 50,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 50,
        resizeMode: 'contain'
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    number: {
        fontSize: 13,
        color: '#5a5a5a',
    },
});