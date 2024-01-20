import React from "react";
import { StyleSheet, View, ImageBackground, Text} from "react-native";
import { useNavigation} from "@react-navigation/native";
import { useState } from "react";
import Profile from "./Profile";



export default function HomeScreen({}) {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');



  return(
    <ImageBackground 
    style={styles.background
    }
    source={require("../../Assets/img/background/bgTravis.png")}
    >
      <View>
      <Profile/>
      </View>
      
    
      
   </ImageBackground>
    
  )
    
}


const styles = StyleSheet.create({

 
  background: {
    flex: 1,
   
    
    
    
},

  btn: {
    color: '#CFA977'

  }
})
