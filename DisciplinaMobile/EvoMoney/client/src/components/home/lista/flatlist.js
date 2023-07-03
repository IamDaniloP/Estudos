import { StyleSheet, FlatList, View } from 'react-native';
import { InformacaoUm, InformacaoDois, InformacaoTres } from './itensFlat';

const informacoes = [
    { info: <InformacaoUm/>, id: 1 }, { info: <InformacaoDois/>, id: 2 }, { info: <InformacaoTres/>, id: 3 }
];

export function ListaInformacoes() {
    return (
        <FlatList data={informacoes}
            pagingEnabled
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment='start'
            snapToOffsets={[0, 375, 800]}
            renderItem={({ item }) =>
            <View style={styles.informacao}>
                {item.info}
            </View>} 
        />
    );
};

const styles = StyleSheet.create({

    informacao: {
        marginTop: 6,
        marginBottom: 6,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }

});