import { StyleSheet, Text, View } from "react-native";

export function Header(props) {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    title:{
        fontSize: 30,
    },
})