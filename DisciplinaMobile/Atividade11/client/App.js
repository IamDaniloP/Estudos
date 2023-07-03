import { FlatList, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';

import axios from 'axios';
import { Cabecalho } from './src/components/cabecalho';
import { NovosItens } from './src/components/novosItens';
import { AdicionarItem } from './src/components/adicionarItem';

export default function App() {

  const [lista, setLista] = useState();

  useEffect(() => {
    axios.get("http://192.168.1.2:3001/item").then(  
      (response) => {
        setLista(response.data)
      }
    )
  }, [lista]);

  const submeterInformacao = (texto) => {
    axios.post("http://192.168.1.2:3001/item", {texto: texto});
  };

  const deletarItem = (id) => {
    axios.delete(`http://192.168.1.2:3001/item/${id}`)
  };

  return (

    <View style={styles.container}>

      <Cabecalho />

      <AdicionarItem funcao={submeterInformacao}/>

      <View>
        <FlatList data={lista}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment='start'
          renderItem={({ item }) => (
            <NovosItens props={item} funcao={deletarItem} />
          )} />
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

});
