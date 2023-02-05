import React from "react";
import { Image, Text, StyleSheet, Dimensions, View, ScrollView, TouchableOpacity, FlatList } from "react-native";
import ItemList from "../component/ItemList";
import TextCustom from "../component/TextCustom";
const width = Dimensions.get('screen').width

export default function Cesta({Topo,details,itens}){  
    const render = (({item})=>{
        return(
        <View key={item.nome} style={styles.ListaCard} >
        <Image style={styles.CardImage}  source={item.imagem}/>
        <Text style={styles.CardName} >{item.nome}</Text>
    </View>)
    })
    return(
        <> 
        
       <FlatList style={styles.FlatContents}
        data={itens.lista}
        renderItem={render}
        keyExtractor={(item)=>item.nome}
        ListHeaderComponent={()=>{
            return(
                <>

        <Image source={Topo.topoImage} style={styles.topo}/>
        <TextCustom style={styles.titleCesta}>{Topo.titleCesta}</TextCustom>

        <View style={styles.CestaContents}> 
            <Text style={styles.NameCesta}>{details.NameCesta}</Text>
            <View style={styles.FarmContents}>
                <Image style={styles.logoFarm} source={details.logoFarm}/> 
                <Text style={styles.NameFarm}>{details.NameFarm}</Text>
            </View>
            <TextCustom style={styles.DescriptionCesta}>{details.DescriptionCesta}</TextCustom>
            <Text style={styles.PriceCesta}>{details.PriceCesta}</Text>
            <TouchableOpacity style={styles.ButtonBuy} >
                <TextCustom style={styles.ButtonBuyText} >{details.botao}</TextCustom>
            </TouchableOpacity>
        </View>
        <ItemList {...itens}/>
                </>
            )
        }}
        />
       
        
        </>
    
    )

}

const styles = StyleSheet.create({
    CestaPage:{
        width:"100%",
        height:"100%"
    },
    topo:{
        width:"100%",
        height: 768/ 578 * width
    },
    titleCesta:{
        position: "absolute",
        textAlign:"center",
        width:"100%",
        fontSize:26,
        lineHeight:26,
        fontWeight:"bold",
        padding:32,
        color: "white",
    },
    CestaContents:{
        paddingHorizontal:16,
        paddingVertical:8
    },
    NameCesta:{
        fontSize:26,
        lineHeight:42,
        color:"#464646",
        fontFamily:"MontserratBold"

    },
    FarmContents:{
        flexDirection:"row",
        paddingVertical:8
    },
    logoFarm:{
        width:32,
        height:32,
        marginRight:12
    },
    NameFarm:{
        fontSize:16,
        lineHeight:26,
        fontFamily:"MontserratRegular"
    },
    DescriptionCesta:{
        color:"#A3A3A3",
        fontSize:16,
        lineHeight:26,
    },
    PriceCesta:{
        color:"#2A9F85",
        fontWeight:"bold",
        fontSize:26,
        lineHeight:42,
        marginTop:8
    },
    ButtonBuy:{
        marginTop:16,
        backgroundColor:"#2A9F85",
        paddingVertical:16,
        borderRadius:6


    },
    ButtonBuyText:{
        textAlign:"center",
        color:"#fff",
        fontSize:16,
        lineHeight:26,
        fontWeight:"bold"

    },
    ListaCard:{
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor:"#ECECEC",
        paddingVertical:16,
        marginHorizontal:16,
        alignItems:"center"
    },
    CardImage:{
        width:46,
        height:46,
    },
    CardName:{
        fontSize:16,
        lineHeight:26,
        marginLeft:11,
        color:"#464646"
    },
})