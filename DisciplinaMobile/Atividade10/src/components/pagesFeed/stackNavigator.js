import { DetalheCarro } from '../pagesFeed/detalheCarro';
import { DetalheMoto } from './detalheMoto';
import { Feed } from '../Feed'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function Navegar () {
    return (
        <Stack.Navigator initialRouteName='Feed'>
            <Stack.Screen name='Feed' component={Feed} options={{headerShown: false}}/>
            <Stack.Screen name='detalheCarro' component={DetalheCarro} options={{headerShown: false}}/>
            <Stack.Screen name='detalheMoto' component={DetalheMoto} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};