import React from "react";
import { StyleSheet, View, ImageBackground, Text, ScrollView} from "react-native";
import { useNavigation} from "@react-navigation/native";
import { useState } from "react";
import ProfileNav from "./ProfileNav";
import ArtistDisplay from "./ArtistDisplay";
import theme from "../themes";



export default function HomeScreen({}) {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');



  return(
    <ImageBackground 
    style={{flex: 1,}
    }
    source={require("../../Assets/img/background/bgTravis.png")}
    >
      {/* Homepage Navbar */}
      <View style={{flex: 0.1, alignSelf:'flex-end'}}>
      <ProfileNav/>
      </View>

      {/* Scroll View for Activity Feed */}
      <View style={{flex:0.9, alignSelf: 'flex-start', marginTop: 30, flexDirection: 'column'}}>
      <ScrollView>
        <Text variant={'headMedium'} style={styles.textStyles}>Activity Feed</Text>

      {/* Artist Profile Component - Horizontal Scroll View*/}
      <ScrollView horizontal={true}>
      <ArtistDisplay Username={'blaxckie'} picDir={require('../../Assets/img/profile/blxckie.jpg')} isVerified={true}/>
      <ArtistDisplay Username={'Dj Speedsta'} picDir={require('../../Assets/img/profile/djSpeedsta.jpg')} isVerified={true}/>
      <ArtistDisplay Username={'Scumie'} picDir={require('../../Assets/img/profile/scumie.jpg')} isVerified={false}/>
      <ArtistDisplay Username={'Emza Pharaoh'} picDir={require('../../Assets/img/profile/EmzaPharaoh.jpeg')} isVerified={true}/>
     
      </ScrollView>
      

      </ScrollView>
      </View>
      

      
    
      
   </ImageBackground>
    
  )
    
}


const styles = StyleSheet.create({
  
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    rowGap: 10
    
},

textStyles: {
  
  color : theme.colors.white,
  marginBottom: 20,
  marginLeft: 10,
  marginRight: 0,
  marginTop: 10,
  fontSize: 20,
  fontWeight: 'bold'

  
},
})
