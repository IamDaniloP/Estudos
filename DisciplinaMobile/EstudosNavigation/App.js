import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; //Biblioteca de navegação base
import { createNativeStackNavigator } from '@react-navigation/native-stack';//Biblioteca de navegação em stack
import { StyleSheet, Text, View, Button } from 'react-native';

function HomeScreen({ navigation }) { //1° página da stack

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title='Próxima Página' onPress={() => navigation.navigate('DetailsScreen')}/>
    </View>
  );

};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

function DetailsScreen() {
  
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
    {/*Maneira alternativa para utilizar as propriedades de estilo.*/}
      <Text> Details Screen</Text>

    </View>

  );

};

const Stack = createNativeStackNavigator(); //função que retorna um objeto com duas props: Navigator e Screen.

export default function App() {
  return (

    //Estrutura de navegação base
    <NavigationContainer>
      {/* Estrutura de navegação em stack*/}

      <Stack.Navigator initialRouteName='Home'>

        {/*Tela de navegação em stack com as props: name e component*/}
        <Stack.Screen name='Home' 
        component={HomeScreen} 
        options={{title: "Início"}}/> 
        {/*É fazer com que cada tela possua sua especificação, um exemplo é o title. Utiliza-se o options.*/}

        {/*Nova tela adicionada*/}
        <Stack.Screen name='DetailsScreen' 
        component={DetailsScreen} 
        options={{title: 'Detalhes'}}/>
        

      </Stack.Navigator>

    </NavigationContainer>

  );
};

//também pode ser feito dessa maneira: export default App;