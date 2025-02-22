import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

// Imports dos meus componentes
import NavBarTop from './src/components/NavBarTop/NavBarTop';
import ViaCEP from './src/components/ViaCEP/ViaCEP';

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
                  <ScrollView>
                    <View style={styles.viewForm}>
                    <ViaCEP></ViaCEP>
                    </View>
                    <View style={styles.viewPokemon}>
                    <Text>shalalalala</Text>
                    </View>
                  </ScrollView>
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
    viewForm:{
        backgroundColor: "pink",
        borderBottomWidth: 20,
        borderStyle: "dotted",
        borderWidth: 4
    },
    viewPokemon:{
        backgroundColor: "blue",
        borderStyle: "dotted",
        borderWidth: 4,
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
        padding: "20"
    },

});