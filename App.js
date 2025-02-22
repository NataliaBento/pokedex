import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Imports dos meus componentes
import NavBarTop from './src/components/NavBarTop';

export default function App() {
  return (
      <>
          <View style={styles.viewApp}>
              {/* // ViewTop */}
              <View id="topo" style={styles.viewTop}>
                  <NavBarTop></NavBarTop>
              </View>
              {/* // ViewContent */}
              <View id="conteudo" style={styles.viewContent}>
                  <Text>Conteúdo</Text>
              </View>
          </View>
      </>
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <StatusBar style="auto" />
      // </View>
  );
}

const styles = StyleSheet.create({
    viewApp: {
        backgroundColor: 'purple',
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        width: 'auto'
    },
    viewTop: {
        alignItems: "center",
        backgroundColor: "green",
        flexDirection: 'row',
        height: 50,
        justifyContent: "left",
        padding: 20,
    },
    viewContent: {
        alignItems: "center",
        backgroundColor: "red",
        flex: 1,
        flexDirection: 'column',
        justifyContent: "top",
    },
});