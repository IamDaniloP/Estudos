import { View, StyleSheet, Text} from 'react-native';
import { PlanosTouch} from '../../components/configuracaoComponents/planosTouch';

export function ConfiguracoesPerfilPage() {
    return (


        <View style={styles.container}>

                <View style={styles.caixaPlanos}>

                    <Text  style={styles.titulo}> Planos </Text>

                    <View style={styles.planos}>

                        <PlanosTouch qtMeses={'1 Mês'} valor={'9,90'} valorTotal={'9,90'}/>

                        <PlanosTouch qtMeses={'12 Meses'} qtDesconto={'42%'} valor={'5,90'} valorTotal={'70,80'}/>

                        <PlanosTouch qtMeses={'6 Meses'} qtDesconto={'21%'} valor={'7,90'} valorTotal={'47,40'}/>

                    </View>

                </View>

        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#47c83e',
    },

    caixaPlanos: {
        width: '90%',
        marginTop: '10%',      
        borderRadius: 10,
        backgroundColor: '#fff',
    },

    planos: {
        flexDirection: 'colunm',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5%',
    },

    caixaPerfil: {
        width: '90%',
        height: 295,
        marginTop: '5%',
        marginBottom: '21%',
        borderRadius: 10,
        backgroundColor: '#fff',
    },

    titulo: {
        paddingLeft: '5%',
        paddingTop: '3%',
        paddingBottom: '2%',
        color: '#47c83e',
        fontWeight: 300,
        fontSize: 28,
    },

    caixaInformacoesPerfil: {
        width: '90%',
        height: 230,
        marginLeft: '5%',
    },

    caixaTextoInformacoesPerfil: {
        margin: 5,
    },

    textoInformacoesPerfil: {
        color: '#555',
        paddingBottom: 8,
        fontSize: 18,
        fontWeight: 300,
    },

    trocarSenha: {
        margin: 5,
        position: 'relative',
    },

    textoTrocarSenha: {
        fontSize: 20,
        fontWeight: 300,
        color: '#555',
        marginBottom: 10,
    },

    botaoConfirmar: {
        position: 'absolute',
        width: '20%',
        height: 70,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#47c83e',
        right: 7,
        bottom: 10,
    },

    textoBotaoConfirmar: {
        fontSize: 19,
        fontWeight: 300,
        color: '#fff',
        textAlign: 'center',
    },

});