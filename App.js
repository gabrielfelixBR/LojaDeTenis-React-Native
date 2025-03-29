{/*Obrigatorio importar quando se usa o React-Navigation*/}
import 'react-native-gesture-handler'
import React from 'react';
{/*Barra na parte superior da tela, onde mostra a hora, rede, ...*/}
import { StatusBar } from 'expo-status-bar';
{/*AppLoading serve para segurar a tela de carregamento até quando os componentes estejam carregados*/}
import AppLoading from 'expo-app-loading';
{/*Importando a fonte instalada*/}
import { useFonts, Anton_400Regular} from '@expo-google-fonts/anton'

import Routes from './src/Routes';

export default function App() {

  {/*Chamando a fonte*/}
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  })

  if(!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <>
      
      <StatusBar style='auto' backgroundColor='#000' translucent={true}/>
      <Routes/>
    </>
  )
}