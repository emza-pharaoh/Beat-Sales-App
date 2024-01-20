import { useState } from 'react';
import { StyleSheet,  View, SafeAreaView, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { TextInput, Button, Text } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import theme from './themes';




// Register Component/////



export default function RegisterScreen() {
    // hooks and variables
    const navigation = useNavigation();
    const [text, setText] = useState("");
   
  return (
        <ImageBackground 
        style={styles.background}
        source={require("../Assets/img/background/bg1.png")}
        >
            <View style={styles.inputView}>

            <TextInput
            style={styles.inputStyle}
            mode={'outlined'}
            outlineStyle={{borderRadius: 10, borderWidth: 1.5}}
            value={text}
            onChangeText={text => setText(text)}
            textColor={theme.colors.secondary}
            placeholder={'Username'}
            placeholderTextColor={theme.colors.tertiary}
            />

            <TextInput
            style={styles.inputStyle}
            mode={'outlined'}
            outlineStyle={{borderRadius: 10,  borderWidth: 1.5}}
            value={text}
            onChangeText={text => setText(text)}
            textColor={theme.colors.secondary}
            placeholder={'Password'}
            placeholderTextColor={theme.colors.tertiary}
            
            />

            </View>
        
            
           

    
          <Button 
          style={styles.loginbtn} 
          mode="contained"
          buttonColor={theme.colors.primary}
          textColor={theme.colors.black}
          onPress={() => navigation.navigate('Home')}
          >Login</Button>

        

        <View >

        <Text variant='labelLarge' style={styles.textStyles}> Or continue with the following:</Text>
            
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>

            <TouchableOpacity style={styles.imageStyle}>
                <Image source={require('../Assets/icons/Google.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.imageStyle}>
                <Image source={require('../Assets/icons/Facebook.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.imageStyle}>
                <Image source={require('../Assets/icons/Apple.png')}/>
            </TouchableOpacity>
          </View>
        </View> 
        
          
        </ImageBackground>  
  )
}






///////////////////////////////////////////////////////////////////
//Styles
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        
    },

    inputStyle: {
        width: 350,
        marginTop: 50,
        borderRadius: 10,
        backgroundColor: 'transparent'
    
    
    },

    loginbtn:{
        width: 250,
        margin:'auto',
        marginTop: 70,
        marginBottom: 10,
        borderRadius: 8,
    
    },
    registerbtn:{
        
        
        marginBottom: 50,
    
    },

    imageStyle: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 25,
    },

    textStyles: {
        color : theme.colors.tertiary,
        margin: 10,
        marginBottom: 10,
        marginTop: 20,
        marginLeft: 25,
        alignItems: 'center',
    }

})


