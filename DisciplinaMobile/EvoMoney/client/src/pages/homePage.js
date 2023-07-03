import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { ListaInformacoes } from '../components/home/lista/flatlist';

export function HomePage({ navigation }) {
  return (

    <View style={styles.container}>

      <View style={styles.navegacao}>

        <Image source={require('../../assets/img/logo.png')} style={styles.logo} />

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('loginPage')}>
          <Text style={styles.texto}>Entrar</Text>
        </TouchableOpacity>

      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.home}>

          <Text style={styles.textoPrincipal}>Com contas organizadas,</Text>
          <Text style={styles.textoPrincipal2}>você conquista as metas traçadas.</Text>
          <Text style={styles.textoSecundario}>O EvoMoney, auxilia você a alcançar suas metas muito mais fácil.</Text>

          <View style={styles.caixaIcone}>

            <Text style={styles.textoIcone}>Disponível para:</Text>

            <TouchableOpacity style={styles.iconeBotao}>
              <AntDesign name="apple1" size={20} color="#fff" style={styles.icone} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconeBotao}>
              <AntDesign name="android1" size={20} color="#fff" style={styles.icone} />
            </TouchableOpacity>

          </View>

        </View>

        <ListaInformacoes />

        <View style={styles.rodape}>

          <View style={styles.caixaIconeRodape}>
            <TouchableOpacity style={styles.iconeRodape}>
              <AntDesign name="instagram" size={18} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconeRodape}>
              <AntDesign name="youtube" size={18} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconeRodape}>
              <AntDesign name="twitter" size={18} color="#fff" />
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47c83e',
  },

  botao: {
    width: 70,
    height: 35,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navegacao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },

  logo: {
    width: 150,
    resizeMode: 'contain',
  },

  home: {
    paddingBottom: 5,
  },

  textoPrincipal: {
    marginTop: 6,
    marginLeft: '3%',
    marginRight: '3%',
    color: '#fff',
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 26.6,
  },

  textoPrincipal2: {
    marginLeft: '3%',
    marginRight: '3%',
    color: '#fff',
    fontSize: 23,
    fontWeight: 700,
    lineHeight: 26.6,
  },

  textoSecundario: {
    marginTop: 8,
    marginLeft: '3%',
    marginRight: '3%',
    color: '#fff',
    lineHeight: 19.95,
    fontSize: 20,
    fontWeight: 300,
  },

  caixaIcone: {
    width: 170,
    marginTop: 15,
    marginLeft: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textoIcone: {
    color: '#fff',
    fontSize: 17,
  },

  iconeBotao: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  icone: {
    padding: 5,
  },

  caixaIconeRodape: {
    marginTop: 12,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  iconeRodape: {
    padding: 12,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 8,
    marginRight: 8,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 30,
  },

});
