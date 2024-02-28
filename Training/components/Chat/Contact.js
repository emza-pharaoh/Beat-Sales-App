import React from "react";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

//theme
import theme from "../themes";


export default function ContactView({ PicDir, ArtistName}) {

    return(
        <TouchableOpacity >
            <View style={styles.background}>
                <Image source={PicDir} style={styles.profileImg}/>
                <View style={{marginRight: 45,}}>
                    <Text variant={'bodyMedium'} style={styles.textStyles}>{ArtistName}</Text>
                    <Text variant={'bodySmall'} style={styles.messageText}>Hey Pharaoh!, Lets get to Work!</Text>
                </View>
                <Text variant={'bodySmall'} style={[styles.messageText, {alignSelf: 'flex-end', marginBottom: 5}]}>15:36</Text>
                
            </View>
            

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    background: {
        
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        borderColor: theme.colors.secondary,
        borderWidth: 0.3,
        borderRadius: 15,
        
       
    },
    profileImg:{
        
        borderRadius: 360,
        height: 60,
        width: 60,
        margin: 7
    },
    textStyles: {
  
        color : theme.colors.white,
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold'
      
        
      },
    messageText: {
  
        color : theme.colors.secondary,
        marginTop: 15,
        fontSize: 13
   
      },

})
