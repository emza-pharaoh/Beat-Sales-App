import { useState, useEffect } from "react";
import { ImageBackground, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { Text, ProgressBar } from "react-native-paper";

//Navigation Hook
import { useNavigation} from "@react-navigation/native";

// Importing the Sound Lib
import { Audio } from "expo-av";

//import themes Duh!
import theme from "../themes";


export default function PlayScreen() {

    const navigation = useNavigation();
    
//Sound State
const [audio, setAudio] = useState()
const [isPlaying, setIsPlaying] = useState(false)
const [isStop, setStop] = useState(false)

async function playAudio() {
    try {
      console.log('Loading');
      
      // Use require to load the audio file
      const { sound } = await Audio.Sound.createAsync(require('../../Assets/audio/song.mp3'))
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




/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

return(
    <ImageBackground style={styles.background} source={require('../../Assets/img/background/playBg.png')}>
        {/* Top Navigation Component */}
            <ImageBackground source={require('../../Assets/icons/TopNav/TopBlur.png')} style={{flex: 0.15, height: '100%'}} >
                
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    {/* Back Button */}
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image source={require('../../Assets/icons/TopNav/ArrowLeft.png')} style={{margin: 20, marginTop: 40}}/>
                    </TouchableOpacity>
                    {/* Search Button */}
                    <TouchableOpacity>
                        <Image source={require('../../Assets/icons/TopNav/Search.png')} style={{margin: 20, marginTop: 40}}/>
                    </TouchableOpacity>
                    
                  
                </View>

            </ImageBackground>
        
        {/* Body Section with Image and Buttons */}

        <View style={{marginTop: 50, justifyContent: 'center'}}>
        <Text variant='bodyLarge' style={[styles.textStyles]}>Now Playing</Text>

            <Image source={require('../../Assets/img/beatCovers/Melodic.jpg')} style={{height: 309, width: 309, alignSelf: 'center'}}/>

        {/* Title View */}
         <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text variant='labelLarge' style={{color: theme.colors.tertiary, marginRight:'50'}}>Emza Pharaoh {<Image source={require('../../Assets/icons/verified.png')}/>}</Text>
            <Text variant='labelLarge' style={{color: theme.colors.white,  marginLeft:'50'}}>Melodic Trap Type Beat</Text>
        </View>

        {/* Prgress Bar */}
        <View style={{marginTop: 30, alignSelf: 'center'}}>
        <ProgressBar progress={0.2} color={theme.colors.primary} style={{width: 315, height: 5 , alignSelf: 'center', borderRadius: 5}}/>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:5}}>
            <Text style={{color: theme.colors.secondary}} variant='bodySmall'>00:00</Text>
            <Text style={{color: theme.colors.secondary}} variant='bodySmall'>00:00</Text>
            
        </View>
        </View>


        {/* Buttons  View*/}
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 5}}>

        {/* Shuffle */}
        <TouchableOpacity>
                <Image source={require('../../Assets/icons/Shuffle.png')} style={{margin: 20, marginTop: 40}}/>
        </TouchableOpacity>
        {/* Rewind */}
        <TouchableOpacity>
                <Image source={require('../../Assets/icons/Rewind.png')} style={{margin: 20, marginTop: 40}}/>
        </TouchableOpacity>
        {/* Play-Pause */}
        <TouchableOpacity onPress={() => (isPlaying ? pauseSound() : playAudio())}>
                <Image source={ isPlaying ? require('../../Assets/icons/Pause.png') : require('../../Assets/icons/Play.png') } style={{margin: 20, marginTop: 40}}/>
        </TouchableOpacity>
        {/* Fast Forward */}
        <TouchableOpacity>
                <Image source={require('../../Assets/icons/fastForward.png')} style={{margin: 20, marginTop: 40}}/>
        </TouchableOpacity>
        {/* Replay */}
        <TouchableOpacity>
                <Image source={require('../../Assets/icons/Replay.png')} style={{margin: 20, marginTop: 40}}/>
        </TouchableOpacity>

        </View>
        </View>
          
          
        
    </ImageBackground>
)

}


const styles  = StyleSheet.create({
    background: {
        flex: 1,

    },
    textStyles: {
  
        color : theme.colors.white,
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 0,
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold'

      },

    
})