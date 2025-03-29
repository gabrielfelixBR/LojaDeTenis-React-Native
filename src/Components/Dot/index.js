import React from 'react';
{/*Dimensions: Deixar o tamanho da sua estilização responsiva*/}
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function Dot(props) {
 return (
   <View style={[style.container, {backgroundColor: props.color}]} />
  );
}

const style= StyleSheet.create({
    container:{
        /*Estrutura do Dimensions*/
        width: Dimensions.get('window').width * 0.050,
        height: Dimensions.get('window').width * 0.050,
        borderRadius: Dimensions.get('window').width * 0.050 / 2,
        marginHorizontal: '2.5%',
        elevation: 5
    }
})