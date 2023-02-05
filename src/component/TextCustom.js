import React, { Children } from "react";
import { Image, Text, StyleSheet, Dimensions, View, ScrollView } from "react-native";

export default function TextCustom({ children,style }){

    if(style?.fontWeight === "bold"){
        return<Text style={[style, styles.TextBold]}>{ children }</Text>
    }
        return<Text style={[style, styles.Text]}>{ children }</Text>
    

}

const styles = StyleSheet.create({
Text:{
    fontFamily:"MontserratRegular",
    fontWeight:"normal"
},
TextBold:{
    fontFamily:"MontserratBold",
    fontWeight:"normal"
}
})