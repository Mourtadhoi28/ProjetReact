// App.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ObjectifListe from './ObjectifListe';

export default function App() {
  return (
    <View style={styles.container}>
      <ObjectifListe />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Utilisez flex: 1 pour que le conteneur occupe tout l'espace disponible
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
