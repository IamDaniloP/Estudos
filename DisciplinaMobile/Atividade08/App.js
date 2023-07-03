import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  const [numeros, setNumeros] = useState([
    { numero: 'One', key: 1},
    { numero: 'Two', key: 2},
    { numero: 'Three', key: 3},
    { numero: 'Four', key: 4},
    { numero: 'Five', key: 5},
    { numero: 'Six', key: 6},
    { numero: 'Seven', key: 7},
    { numero: 'Eight', key: 8},
  ]);

  const remover = (key) => {
    setNumeros(
      (numerosAnteriores) => {
        return numerosAnteriores.filter(numeros => numeros.key != key);
      }
    )
  }

  return (

    <View style={styles.container}>
      <FlatList
        numColumns={1} keyExtractor={(item) => item}
        data={numeros}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => remover(item.key)}>
            <Text style={styles.item}>{item.numero}</Text>     
          </TouchableOpacity>
          )}>
      </FlatList>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:'15%',
    backgroundColor: '#fff',
  },
  item: {
    margin: 5,
    paddingTop: '10%',
    paddingBottom: '10%',
    fontSize: 22,
    color: '#fff',
    fontWeight: 700,
    textAlign: 'center',
    backgroundColor: 'pink',
  },

});
