import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import { Button, Input } from '@rneui/themed';
import React from 'react'

export default function WelcomeScreen() {
  return (
        <ImageBackground 
        style={styles.background}
        source={require("../Assets/img/Welcome.jpg")}
        >

            <Input 
             placeholder='Username'
             containerStyle={styles.inputStyle}
            />

    
          <Button 
          style={styles.loginbtn} 
          title={"Login"}
          color= {'#FEBF23'}
          size="lg"
          />

          <Button 
          style={styles.registerbtn} 
          title={"Register"}
          color= {'#CFA977'}
          size="lg"
          />
            
        
          
        </ImageBackground>  
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        
    },

    inputStyle: {
        width: 350,
        

    },

    loginbtn:{
        width: 250,
        margin:'auto',
        borderRadius: 50,
    
    },
    registerbtn:{
        width: 250,
        marginTop: 10,
        marginBottom: 150,
    
    },
})