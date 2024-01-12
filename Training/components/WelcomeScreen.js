import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import { Button, Input } from '@rneui/themed';
import { Icon } from '@rneui/base';


export default function WelcomeScreen() {
  return (
        <ImageBackground 
        style={styles.background}
        source={require("../Assets/img/Welcome.jpg")}
        >
        
            <Input 
             placeholder='Username'
             containerStyle={styles.inputStyle}
             leftIcon={{ type: 'evilicon', name: 'envelope', color: 'white' }}
            />

            <Input 
             placeholder='Password'
             containerStyle={styles.inputStyle}
             leftIcon={{ type: 'evilicon', name: 'unlock', color: 'white' }
            }
            />

    
          <Button 
          style={styles.loginbtn} 
          title={"Login"}
          color= {'#FEBF23'}
          size="lg"
          />

          <Button 
          style={styles.registerbtn} 
          title={"New Here?, Register!"}
          color= {'#CFA977'}
          size="sm"
          type='clear'
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
        margin: 15,
        
        

    },

    loginbtn:{
        width: 250,
        margin:'auto',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 50,
    
    },
    registerbtn:{
        
        
        marginBottom: 150,
    
    },
})