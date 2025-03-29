import { View, Text, StyleSheet } from 'react-native';

export default function SizeButton(props) {
 return (
   <View style={[style.container, {backgroundColor: props.bgColor || '#fff',}]}>
        <Text style={[style.text, {color: props.color || '#c9c'}]}>{props.children}</Text>
   </View>
  );
}

const style = StyleSheet.create({
    container: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#e6e6e6',
        borderWidth: 3,
        marginHorizontal: 10
    },
    text: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})