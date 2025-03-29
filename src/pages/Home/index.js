import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";
import {  MaterialIcons} from '@expo/vector-icons'
{/*useNavigation para navegar entre páginas*/}
import { useNavigation } from '@react-navigation/native'
import Shoes from "../../Components/Shoes";

export default function Home() {
    {/*Função useNavigation*/}
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={require('../../Assets/banner.png')}
                    style={styles.image}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>TÊNIS</Text>
                    <Text style={styles.text}>•</Text>
                    <Text style={[styles.text, {color: '#cececf'}]}>MASCULINO</Text>
                    <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}> 
                        <MaterialIcons
                            name="filter-list"
                            size={24}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.line}/>

            <ScrollView>
                <Text style={styles.text}>LANÇAMENTO</Text>
   
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}> 
                    {/*No onClick mostra como direciona para página*/}
                    <Shoes img={require('../../Assets/1.png')} cost="R$140,90" onClick={()=> navigation.navigate('Detail') }>
                        Nike Air Max Dia
                    </Shoes>
                    <Shoes img={require('../../Assets/2.png')} cost="R$280,90" onClick={()=> navigation.navigate('Detail') }>
                        Nike Downshifter 10
                    </Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../Assets/3.png')} cost="R$560,90" onClick={()=> alert('CLICOU')}>
                        Nike Squidward Tentacles
                    </Shoes>
                    <Shoes img={require('../../Assets/4.png')} cost="R$220" onClick={()=> alert('CLICOU')}>
                    Nike Epic React Flyknit 2
                    </Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../Assets/5.png')} cost="R$120,90" onClick={()=> alert('CLICOU')}>
                        Nike Joyride Run Flyknit
                    </Shoes>
                    <Shoes img={require('../../Assets/6.png')} cost="R$920" onClick={()=> alert('CLICOU')}>
                        Nike Air Max Dia Sujeito Programador
                    </Shoes>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    header: {
        marginBottom: 8
    },
    image: {
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical:  '5%',
        marginHorizontal: '5%'
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line: {
        borderBlockColor: '#d8d8d8',
        borderBottomWidth: 2
    }
})