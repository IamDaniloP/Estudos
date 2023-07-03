import React, {useState} from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
//import { StatusBar } from 'expo-status-bar';

export default function App() {
  /*
  const [pessoa, setPessoa] = useState ({nome: 'Cleiton', idade: 52});
  const [lista, setLista] = useState (['Maça', 'Uva', 'Abacaxi'])

  return (
  <View style={styles.container}>
    <Text>{nome}</Text>
    <Text>{pessoa.nome + ' ' + pessoa.idade}</Text>
    <Text>{lista[0] + " " + lista[1] + " " + lista[2]}</Text>
  </View>
  );
  --------------------------------------- */ 

  /* ---------------------------------------
  const [nome, setName] = useState ('Danilo');
  const clicarBotao = () => {
    setName('Cleiton Cabral')
  }

  return (

    <View style={styles.container}>

    <Text> Meu nome é {nome} </Text>

      <View style={styles.buttonContainer}>
        <Button title='Apertar' onPress={clicarBotao}>

        </Button>
      </View>
    </View>
  );
*/

  const [ligar, setLigar] = useState(true);
  const [ligarSegundo, setLigarSegundo] = useState(true);
  const [texto, setTexto] = useState('LIGADO');
  const [textoSegundo, setTextoSegundo] = useState('LIGADO');

  const clicarBotao = () => {
    
    setLigar(!ligar); //toda vez que a função é chamada o estado de ligar é trocado

    if (ligar == false) {
      setTexto ('DESLIGADO');
    } else {
      setTexto ('LIGADO');
    }

  }

  const clicarBotao2 = () => {
    
    setLigarSegundo(!ligarSegundo); //toda vez que a função é chamada o estado de ligar é trocado

    if (ligarSegundo == false) {
      setTextoSegundo ('DESLIGADO');
    } else {
      setTextoSegundo ('LIGADO');
    }

  }

  return (

    <View style={styles.container}>

      {
        ligar ? //se ligar for igual a false faça
        <Text> </Text>
        : //se ligar for diferente de false faça
        <Text>Aqui tem um texto que desaparece!</Text>
      }

      <View style={styles.buttonContainer}>
        <Button title={texto} onPress={clicarBotao} />
      </View>

      {
        ligarSegundo ? //se ligar for igual a false faça
        <Text> </Text>
        : //se ligar for diferente de false faça
        <Text>Aqui tem um texto que desaparece!</Text>
      }

      <View style={styles.buttonContainer}>
        <Button title={textoSegundo} onPress={clicarBotao2} />
      </View>
    
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
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