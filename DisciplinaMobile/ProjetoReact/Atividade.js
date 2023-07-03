import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.titulo}>Titulo da aplicação</Text>
        <Text style={styles.texto1}>
          um texto corrido  um texto corrido  um texto corrido  um texto corrido
          um texto corrido  um texto corrido  um texto corrido  um texto corrido
          um texto corrido  um texto corrido  um texto corrido  um texto corrido
          um texto corrido  um texto corrido
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  container2: {
    alignItems: 'center',
  },
  container3: {
    paddingLeft: 20,
    paddingTop: 25,
    paddingBottom: 25,
  },
  containerFoto: {
    padding: 100,
    backgroundColor: 'red',
    textAlign: 'center',
  },
  texto1: {
    padding: 20,
    textAlign: 'justify',
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 40,
  },
  titulo2: {
    fontWeight: "bold",
    fontSize: 16,
  },
  titulo3: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});