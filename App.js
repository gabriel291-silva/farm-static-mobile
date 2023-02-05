import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
//fonts import
import { useFonts,Montserrat_400Regular,Montserrat_700Bold } from '@expo-google-fonts/montserrat';

// componentes import
import Cesta from './src/tela/Cesta';

// mock import
import mock from "./src/mocks/Cesta"
export default function App() {

  // objeto com as fontes importadas 
  const [fontesGoogleCarregada] = useFonts({
    "MontserratRegular":Montserrat_400Regular,
    "MontserratBold":Montserrat_700Bold
  })

  if(!fontesGoogleCarregada){
    return<View><Text>Loading...</Text></View>
  }
  return (
    <SafeAreaView style={ {flex: 1 }} >
      <StatusBar/>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}

