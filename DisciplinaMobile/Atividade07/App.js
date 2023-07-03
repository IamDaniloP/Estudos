import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View, TextInput } from 'react-native';




export default function App() {

  const [ligar, setLigar] = useState(true);
  const [texto, setTexto] = useState('LIGADO');
  const [name, setName] = useState('Gabriel');
  const [age, setAge] = useState('18')

  const clicarBotao = () => {

    setLigar(!ligar); //alternate value function

    if (ligar == false) {
      setTexto('APRESENTAR TEXTO');
    } else {
      setTexto('REMOVER TEXTO');
    }

  }

  return (

    <View style={styles.container}>

      <View style={styles.form}>

        <Text>Digite seu nome:</Text>
        <TextInput style={styles.input} placeholder='Ex: Gabriel' onChangeText={setName}/>
        <Text style={styles.textInput}>Digite sua idade:</Text>
        <TextInput style={styles.input} placeholder='Ex: 18' onChangeText={setAge}/>
 
      </View>

      {
        ligar ? //if ligar = false
          <Text> </Text>
          :
          <View style={styles.box}>

            <Text>
              Seu nome é: {name}
            </Text>
            <Text>
              Sua idade é: {age}
            </Text>

          </View>
      }

      <View style={styles.button}>
        <Button title={texto} onPress={clicarBotao} color='#fff'/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  box: {
    width: 190,
    margin: 15,
    padding: 10,
    textAlign: 'justify',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d2d2d2',
    borderRadius: 5,
  },

  form: {
    width: 200,
    padding: 10,
    paddingBottom: 15,
    backgroundColor: '#d2d2d2',
    borderRadius: 5,
  },

  textInput: {
    paddingTop: 10,
  },

  input: {
    marginTop: 5,
    padding: 7,
    borderRadius: 5,
    backgroundColor: '#fff',
  },

  button: {
    backgroundColor: '#c2c2c2',
    borderRadius: 5,
  },
});
