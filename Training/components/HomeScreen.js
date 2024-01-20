import React from "react";
import { StyleSheet, View, ImageBackground, Text} from "react-native";
import { useNavigation} from "@react-navigation/native";
import { useState } from "react";
import { Button, Searchbar, DefaultTheme, ActivityIndicator } from "react-native-paper";



export default function HomeScreen({}) {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');



  return(
    <ImageBackground 
    style={styles.container}
    source={require("../Assets/img/background/HomepageBg.jpg")}
    >
      <View style={{}}>
      <Searchbar mode="bar" placeholder="Search" onChangeText={setSearch} value={search} style={{marginBottom: 100, width: 300}}/>
      </View>

      <ActivityIndicator animating={true} color={'#FFF'} />

        <Text style={{color: '#FFF', fontSize: 24}}>Loading...
        This will be the page you land in after logging in, it will showcase the popular producers and their beats 
        kind of like Soundcloud vibes</Text>


      <View style={{flexDirection: 'row',}}>
      <Button 
        
        mode="contained"
        icon={'chevron-left'} 
        onPress={() => navigation.navigate('Login')}
        buttonColor={'#CFA977'}
        textColor={'black'}
        > Go Back </Button>
        
        <Button 
        mode="contained"
        icon={'chevron-right'} 
        
        buttonColor={'#CFA977'}
        textColor={'white'}

        onPress={() => navigation.navigate('Catalogue')}
        > Check Out Beats </Button>
      </View>
      
   </ImageBackground>
    
  )
    
}


const styles = StyleSheet.create({

 
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },

  btn: {
    color: '#CFA977'

  }
})
