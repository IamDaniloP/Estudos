import { FlatList, StyleSheet, View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';

import axios from 'axios';

import { CabecalhoPerfil } from '../../components/metasPerfilPage/cabecalhoPerfil';
import { NovosItens } from '../../components/metasPerfilPage/novosItens';
import { AdicionarItem } from '../../components/metasPerfilPage/adicionarItem';


export function CriarMetasPerfilPage() {

  const [lista, setLista] = useState();

  useEffect(() => {
    axios.get("http://192.168.1.2:3001/metas").then(
      (response) => {
        setLista(response.data)
      }
    )
  }, [lista]);

  const submeterInformacao = (metas) => {
    axios.post("http://192.168.1.2:3001/metas", { metas: metas });
  };

  const deletarItem = (id) => {
    axios.delete(`http://192.168.1.2:3001/metas/${id}`)
  };

  return (

    <View style={styles.container}>

      <View style={styles.container2}>

        <CabecalhoPerfil />

        <AdicionarItem funcao={submeterInformacao} />

        <View style={styles.ajustes}>
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

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#47c83e',
  },

  container2: {
    height: '70%',
    width: '90%',
    borderRadius: 15,
    backgroundColor: '#fff',
  },

  ajustes: {
    marginLeft: 10,
    marginRight: 10,
  },

});