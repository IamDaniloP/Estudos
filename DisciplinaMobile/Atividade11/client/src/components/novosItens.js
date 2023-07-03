import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export function NovosItens ({props, funcao}) {
    return (
        <TouchableOpacity onPress={() => funcao(props.id)} style={styles.botao}>
            
            <AntDesign style={styles.icone} name="delete" size={20} color="black" />
            
            <Text style={styles.texto}>  
                {props.itens}
            </Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 16, 
        marginLeft: 40,
        marginRight: 40,
        borderColor: '#a1a1a1',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    
    texto: {
       fontWeight: 700,
       fontSize: 20,
       paddingLeft: 20,
    },

});