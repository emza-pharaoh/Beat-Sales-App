import React from "react";
import { StyleSheet, View, ImageBackground, Text, ScrollView} from "react-native";
import { useNavigation} from "@react-navigation/native";
import { useState } from "react";

// Importing Components
import ProfileNav from "./ProfileNav";
import ArtistDisplay from "./ArtistDisplay";
import BeatsSaleCard from "./BeatSaleCard";
import BottomNav from "./BottomNav";

// App Theme
import theme from "../themes";



export default function HomeScreen({}) {
  const navigation = useNavigation();
 



  return(
    <ImageBackground 
    style={{flex: 1,}
    }
    source={require("../../Assets/img/background/bgTravis.png")}
    >
      {/* Profile Top Navbar */}
      <View style={{flex: 0.1, alignSelf:'flex-end'}}>
      <ProfileNav/>
      </View>

      {/* Scroll View for Activity Feed */}
      <View style={{flex:0.9, alignSelf: 'flex-start', marginTop: 30, flexDirection: 'column'}}>
      <ScrollView>
        {/* Activity Feed Text */}
        <Text variant={'headMedium'} style={styles.textStyles}>Activity Feed</Text>

      {/* Artist Profile Component - Horizontal Scroll View*/}
      
      <ScrollView horizontal={true}>
      <ArtistDisplay Username={'blxckie'} picDir={require('../../Assets/img/profile/blxckie.jpg')} isVerified={true}/>
      <ArtistDisplay Username={'Dj Speedsta'} picDir={require('../../Assets/img/profile/djSpeedsta.jpg')} isVerified={true}/>
      <ArtistDisplay Username={'Scumie'} picDir={require('../../Assets/img/profile/scumie.jpg')} isVerified={false}/>
      <ArtistDisplay Username={'Emza Pharaoh'} picDir={require('../../Assets/img/profile/EmzaPharaoh.jpeg')} isVerified={true}/>
      </ScrollView>
      
      

      {/* Popular */}
      <View style={{}}>
      <Text variant={'headMedium'} style={styles.textStyles}>Popular Sound!</Text>
      </View>

      <View>
        <BeatsSaleCard 
        Username={'Emza Pharaoh'} 
        beatTitle={'Melodic Trap Beat'} 
        beatImageDir={require('../../Assets/img/beatCovers/Melodic.jpg')}
        isVerified={true}
        BPM={136}
        Key={'Cm'}
        Comment={'I charge R400 for beat, what your budget?'}/>

        <BeatsSaleCard 
        Username={'Emza Pharaoh'} 
        beatTitle={'21 Svaage Type Beat'} 
        beatImageDir={require('../../Assets/img/beatCovers/21savage.jpg')}
        isVerified={true}
        BPM={145}
        Key={'D'}
        Comment={'I charge R400 for beat, what your budget?'}/>

        <BeatsSaleCard 
        Username={'Emza Pharaoh'} 
        beatTitle={'YN Jay type Beat'} 
        beatImageDir={require('../../Assets/img/beatCovers/YNJay.jpg')}
        isVerified={true}
        BPM={136}
        Key={'F#m'}
        Comment={'I charge R400 for beat, what your budget?'}/>
      </View>

      </ScrollView>

      <View style={{position: 'absolute', bottom: 1}}>
      <BottomNav/>
      </View>

      
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
  marginLeft: 15,
  marginRight: 0,
  marginTop: 20,
  fontSize: 20,
  fontWeight: 'bold'

  
},
})
