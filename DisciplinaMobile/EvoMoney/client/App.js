import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { HomePage } from './src/pages/homePage';
import { LoginPage } from './src/pages/loginPage';
import { Routes } from './src/pages/routesPage';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName='homePage'>
        <Stack.Screen name='homePage' component={HomePage} options={{headerShown: false}}/>
        <Stack.Screen name='loginPage' component={LoginPage} options={{headerShown: false}}/>
        <Stack.Screen name='routesPage' component={Routes} options={{headerShown:false}}/>
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}

