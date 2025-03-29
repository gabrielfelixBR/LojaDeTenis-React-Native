import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';

import Routes from './src/Routes';

export default function App() {
  return (
    <>
      {/*Barra na parte superior da tela, onde mostra a hora, rede, ...*/}
      <StatusBar style='light' backgroundColor='#000' translucent={true}/>
      <Routes/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
