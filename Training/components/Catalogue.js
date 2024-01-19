import {React , useEffect, useState} from "react";
import { useNavigation} from "@react-navigation/native";
import { ScrollView, SafeAreaView, Image, TouchableOpacity, StyleSheet, ImageBackground, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { Card } from "@rneui/base";

// Importing the Sound/Video Library from expo
import { Audio } from "expo-av";

export default function Catalogue() {
    // Navigation Hook that helps with page Navigation
    const navigation = useNavigation();
    
    //Sound State
    const [audio, setAudio] = useState()
    const [isPlaying, setIsPlaying] = useState(false)

    async function playAudio() {
        try {
          console.log('Loading');
          
          // Use require to load the audio file
          const { sound } = await Audio.Sound.createAsync(require('../Assets/audio/song.mp3'))
          if(sound){

            // If the sound is playing, stop it before playing again
            
                setAudio(sound);
      
                console.log('Playing Track');
                
                // Use await to wait for the playback to finish
                await sound.playAsync();
                setIsPlaying(true)
                console.log(isPlaying)
            
          
          }else{
            console.error('Failed to load audio track.');
          }
         
        } catch (error) {
          // Handle the error
          console.error('Error playing audio:', error);
          
          // Optionally, you may want to unload the audio track if an error occurs
          if (sound) {
            await sound.unloadAsync();
          }
        }
      }

    //   Pause Function
    async function pauseSound() {
        if (audio) {
            if(isPlaying){
                console.log('Stopping currently playing sound');
                await audio.pauseAsync();
                setIsPlaying(false)
            }else{
                console.error('failed to Pause Audio Or is Not Playing')
            }
          
        }
      }

      async function resumeSound() {
        try {
          if (audio) {
            if (!isPlaying) {
              console.log('Resuming paused sound');
              await audio.playAsync();
              setIsPlaying(true);
            } else {
              console.error('Audio is already playing');
            }
          }
        } catch (error) {
          console.error('Error resuming audio:', error);
        }
      }
      

    useEffect(() => {
        return audio ? () => {
            audio.unloadAsync()
        } : undefined
    }, [audio])




    return(
        
        // Background Image
        <ImageBackground 
        style={styles.container}
        source={require("../Assets/img/HomepageBg.jpg")}
        >
            {/* Scrollable view Takes 90% of the Screen */}
          <ScrollView style={{height: '90%'}}>

            {/* Card 1 */}
           
            <Card>
            <TouchableOpacity>
                <Card.Title>
                    Melodic Trap Beat 
                </Card.Title>
            <Card.Image source={require('../Assets/img/Melodic.jpg')} style={{width: '100%', height: 300, justifyContent: 'center'}} />
            <Text variant="titleMedium">probucer - EmzaPharaohBeats</Text>
            <Text variant="titleSmall">BPM - 130</Text>
            

            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button mode="elevated" icon={'play'} onPress={playAudio}>Play </Button>
            
            <Button mode="elevated" icon={'stop'} onPress={pauseSound}>Stop</Button>
            </View>
            
            </Card>
           

            {/* Card 2 */}
            <TouchableOpacity>
            <Card>
                <Card.Title>
                    Monte Booker Type Beat 
                </Card.Title>
            <Card.Image source={require('../Assets/img/MonteBooker.jpg')} style={{width: '100%', height: 300, justifyContent: 'center'}} />
            <Text variant="titleMedium">probucer - EmzaPharaohBeats</Text>
            <Text variant="titleSmall">BPM - 130</Text>
            </Card>

            </TouchableOpacity>
            
           

        </ScrollView>

        <Button 
        mode="contained"
        style={{width: 350, marginTop: 0, marginLeft: 'auto', marginRight: 'auto'}}
        onPress={() => navigation.navigate('Home')}
        >
        Back
        </Button>

   </ImageBackground>
      

    )

    }

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center'
    },

    cardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})