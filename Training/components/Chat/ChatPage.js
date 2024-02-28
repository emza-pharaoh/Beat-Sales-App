import React from "react";
import { TouchableOpacity, ImageBackground, Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation} from "@react-navigation/native";

//theme
import theme from "../themes";

//Components
import BottomNav from "../BottomNav";




export default function ChatPage() {
    const navigate = useNavigation()
    return(
        <ImageBackground style={{flex: 1}} source={require('../../Assets/img/background/nastyBg.png')}>
             {/* Top Navigation Component */}
             <ImageBackground source={require('../../Assets/icons/TopNav/TopBlur.png')} style={{flex: 0.15, height: '100%'}} >
                
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    {/* Back Button */}
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image source={require('../../Assets/icons/TopNav/ArrowLeft.png')} style={{margin: 20, marginTop: 40}}/>
                    </TouchableOpacity>
                    <Text variant='bodyLarge' style={[styles.textStyles]}>Messages</Text>
                    {/* Search Button */}
                    <TouchableOpacity>
                        <Image source={require('../../Assets/icons/TopNav/Search.png')} style={{margin: 20, marginTop: 40}}/>
                    </TouchableOpacity>
                    
                  
                </View>

            </ImageBackground>



      <View style={{position: 'absolute', bottom: 1}}>
      <BottomNav/>
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
    marginTop: 40,
    fontSize: 24,
    justifyContent: 'center',
    alignSelf: 'center'
    
  
    
  },
  })
  