import React from "react";
import { ImageBackground, View, StyleSheet, Image } from "react-native";
import { Button, Text, Icon } from "react-native-paper";

import { useNavigation } from '@react-navigation/native';
import theme from './themes';

export default function LandingScreen(){
     // hooks and variables
     const navigation = useNavigation();

     return(
        <ImageBackground 
        style={styles.background}
        source={require('../Assets/img/background/bg3.png')}>

        {/* Logo Image */}
        <Image source={require('../Assets/icons/LogoPlaceholder.png')}/>

        {/* Text Content Below */}

        <Text style={styles.textStyles} variant={'titleMedium'} >Connect & Collaborate!</Text>

        <Text style={{color: theme.colors.white, marginTop:170, textAlign: 'center'}} variant={'headlineLarge'} >Get to know new Producers & Artists</Text>
        
        {/* Buttons Below */}
        <Button 
          style={styles.createbtn} 
          
          mode="contained"
          buttonColor={theme.colors.primary}
          textColor={theme.colors.black}
          onPress={() => navigation.navigate('Register')
          
        
        }
          >
           
            Create an account</Button>

        <Button 
          style={styles.loginbtn} 
          
          mode="contained"
          buttonColor={theme.colors.white}
          textColor={theme.colors.black}
          onPress={() => navigation.navigate('Login')
          
        
        }
          >
           
            Already have an account</Button>

            <Button 
          style={styles.noAcountbtn}
          mode={'text'}
          textColor= {theme.colors.white}
          onPress={() => navigation.navigate('Home')}

          >continue without an account</Button>

        <View ></View>



        </ImageBackground>
     )

    

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    textStyles: {
        color : theme.colors.white,
        margin: 10,
        marginBottom: 10,
        marginTop: 30,
        marginLeft: 25,
        alignItems: 'center',
        
    },

    createbtn:{
        width: 315,
        height: 42,
        margin:'auto',
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 8,
        fontSize: 32,
        
    
    },
    loginbtn:{
        width: 315,
        height: 42,
        margin:'auto',
        marginTop: 15,
        marginBottom: 10,
        borderRadius: 8,
        fontSize: 32,
        
    
    },
    noAcountbtn:{
        width: 315,
        height: 42,
        margin:'auto',
        marginTop: 0,
        marginBottom:0,
        borderRadius: 8,
        fontSize: 32,
        
    
    },
})