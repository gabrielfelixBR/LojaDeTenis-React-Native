import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from '../Shoes';

export default function ShelfPageProduct() {
 return (
   <View style={styles.container}>
    <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
    <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
            <View style={{marginHorizontal: 10}}>
                <Shoes img={require('../../Assets/1.png')} cost="R$110,90"> 
                    Nike Air Max Dia
                </Shoes>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Shoes img={require('../../Assets/2.png')} cost="R$360,90"> 
                    Nike Downshifter 10
                </Shoes>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Shoes img={require('../../Assets/5.png')} cont="R$890,90"> 
                    Nike Joyride Run Flyknit
                </Shoes>
            </View>
        </ScrollView>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 40
    },
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
})