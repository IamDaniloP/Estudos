import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from './src/components/Header'
import {EmployeeList} from './src/components/EmployeeList'


const data = [
  {key: 1, name: 'Maria Clara', number: '(81) 98989-0000'},
  {key: 2, name: 'Gilberto Oliveira', number: '(81) 40002-8922'},
  {key: 3, name: 'José Flávio', number: '(81) 93454-4444'},
  {key: 4, name: 'Cristina Maria', number: '(81) 98989-1111'},
]

export default function App() {
  return (
    <View style={styles.container}>
      <Header title='Agenda Telefônica'/>
      <EmployeeList data={data} style={styles.item}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 50,
  },
  item: {
    
  },
});
