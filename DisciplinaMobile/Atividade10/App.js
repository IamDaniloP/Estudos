import { Home } from './src/components/Home';
import { Navegar } from './src/components/pagesFeed/stackNavigator';
import { Profile } from './src/components/Profile';
import { Settings } from './src/components/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (

      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Navegar' component={Navegar} options={{title: 'Feed'}} />
        <Tab.Screen name='Profile' component={Profile}/>
        <Tab.Screen name='Settings' component={Settings}/>
      </Tab.Navigator>
      </NavigationContainer>

  );
}
