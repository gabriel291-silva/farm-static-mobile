import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ItemList({titulo,lista}){
    return(
    <View style={styles.ListaContents} >
        <Text style={styles.ListaTitle} >{titulo}</Text>
        
    </View>)
    
}

const styles = StyleSheet.create({
ListaContents:{
 paddingHorizontal:16,

},
ListaTitle:{
        marginTop:32,
        fontWeight:"bold",
        color:"#464646",
        marginBottom:8,
        fontSize:20,
        lineHeight:32
}
})