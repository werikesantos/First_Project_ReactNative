import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá, Mundo!</Text>
      <Text>Esse é meu primeiro App ;) {"\n"}</Text>
      <Text>Assinado:</Text>
      <Text>Werike Santos</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
