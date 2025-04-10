import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Shoes(props) {

    function filterDesc(desc){
        if(desc.length < 27) {
            return desc
        }

        return `${desc.substring(0, 20)}...`
    }
    
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={props.onClick}>
                <Image
                    source={props.img}
                    style={styles.shoesImg}
                />
                <Text style={styles.shoesText}>
                    {filterDesc(props.children)}
                </Text>
                <View style={{opacity: 0.4}}>
                    <Text style={styles.shoesText}>
                       {props.cost}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shoesImg: {
        width: 175,
        height: 175,
    },
    shoesText: {
        fontSize: 16
    }
})