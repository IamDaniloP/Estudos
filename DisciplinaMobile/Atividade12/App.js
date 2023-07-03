import React, {useState} from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import{AntDesign}from'@expo/vector-icons'; //serve para importar os ícones. Sempre recomendado utilizar itens da mesma família.
import{Feather}from'@expo/vector-icons';

export default function App() {


  const [ligar, setLigar] = useState(true);
  const [texto, setTexto] = useState('LIGADO');

  const clicarBotao = () => {
    
    setLigar(!ligar); //toda vez que a função é chamada o estado de ligar é trocado

    if (ligar == false) {
      setTexto ('ATIVAR');
    } else {
      setTexto ('DESATIVAR');
    }

  }

  return (

    <View style={styles.container}>

    <Text style={styles.titulo}>Letra b</Text>

      {
        ligar ? //se ligar for igual a false faça
        <Text> </Text>
        : //se ligar for diferente de false faça
        <View style={styles.caixa}>
         
          <Text>
            Aqui é um exemplo de texto de uma postagem!
            Aqui é um exemplo de texto de uma postagem!
            Aqui é um exemplo de texto de uma postagem!
            Aqui é um exemplo de texto de uma postagem!
          </Text>
          
          <View style={styles.caixaIcones}> 
            <AntDesign style={styles.icone1} name="delete" size={24} color="black"/>
            <Feather name="send" size={24} color="black"/> 
          </View>
        
        </View>  
      }

      <View style={styles.buttonContainer}>
        <Button title={texto} onPress={clicarBotao} />
      </View>
    
    </View>

  );

}

const styles = StyleSheet.create({
  
  titulo: {
    fontSize: 40,
    fontWeight: 400,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  caixa: {
    margin: 35,
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#d3d3d3',
    flexDirection: 'row',
  },

  caixaIcones: {
    paddingLeft: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },

  icone1: {
    marginRight: 5,
  },

  buttonContainer: {
    backgroundColor: '#eeeeee',
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    borderTopStartRadius: 5,
    marginTop: 20,
  }
});