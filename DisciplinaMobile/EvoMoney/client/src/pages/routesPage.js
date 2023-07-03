import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CriarMetasPerfilPage } from './perfilPage/criarMetasPerfilPage';
import { ConfiguracoesPerfilPage } from './perfilPage/configuracoesPerfilPage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (


        <Tab.Navigator initialRouteName='metas' screenOptions={{
            tabBarActiveTintColor: '#47c83e',
            tabBarInactiveTintColor: '#a1a1a1',
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                height: 50,
                borderTopWidth: 0,
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 5,

                bottom: 14,
                left: 14,
                right: 14,
            }
        }}>

            <Tab.Screen name='metas' component={CriarMetasPerfilPage} options={{
                headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return (<AntDesign name="pluscircle" size={30} color={color} />);
                    } else {
                        return (<AntDesign name="pluscircleo" size={size} color={color} />);
                    }
                }
            }} />

            <Tab.Screen name='configuracao' component={ConfiguracoesPerfilPage} options={{
                headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return (<MaterialCommunityIcons name="calendar-month" size={30} color={color}/>);
                    } else {
                        return (<MaterialCommunityIcons name="calendar-month-outline" size={size} color={color} />)
                    }
                }
            }} />

        </Tab.Navigator>


    );
}
