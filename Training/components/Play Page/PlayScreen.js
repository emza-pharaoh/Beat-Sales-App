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
const [progress, setProgress] = useState(0); // State to track the progress of audio playback
const [shuffleOn, setShuffle] = useState(false)
const [repeatState, setRepeatState] = useState(0)

async function playAudio() {
    try {
      console.log('Loading');
      
      // Use require to load the audio file
      const { sound } = await Audio.Sound.createAsync(require('../../Assets/audio/song.mp3'))
      if(sound){
        // If the sound is playing, stop it before playing again
            setAudio(sound);
            console.log('Playing Track');
            sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate); // Set the playback status update callback
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

// Function to update progress based on current playback status
async function updateProgress() {
    try {
      if (audio) {
        const status = await audio.getStatusAsync();
        const currentPosition = status.positionMillis; // Current position in milliseconds
        const duration = status.durationMillis; // Total duration of the audio in milliseconds
  
        // Calculate the progress value within the range of 0 to 1
        const calculatedProgress = duration > 0 ? currentPosition / duration : 0;
        setProgress(calculatedProgress);
      }
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  }

//Pause Function to pause the audio not stop it
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

//Resume Funtion to Continue playing where it was paused
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

 // Function to rewind the audio by 10 seconds
 async function rewindSound() {
    try {
      if (audio) {
        console.log('Rewinding sound');
        const status = await audio.getStatusAsync();
        const newPosition = Math.max(0, status.positionMillis - 10000); // Rewind by 10 seconds
        await audio.setPositionAsync(newPosition);
      }
    } catch (error) {
      console.error('Error rewinding audio:', error);
    }
  }

 // Function to fast forward the audio by 10 seconds
 async function fastForwardSound() {
    try {
      if (audio) {
        console.log('Fast forwarding sound');
        const status = await audio.getStatusAsync();
        const newPosition = Math.min(status.durationMillis, status.positionMillis + 10000); // Fast forward by 10 seconds
        await audio.setPositionAsync(newPosition);
      }
      console.log(progress)
    } catch (error) {
      console.error('Error fast forwarding audio:', error);
    }
  }


useEffect(() => {
    return audio ? () => {
        audio.unloadAsync()
    } : undefined
}, [audio])


// Load and play audio when the component mounts for the first time
useEffect(() => {
    playAudio();
  }, []); // Empty dependency array to run only once when component mounts


// Update progress periodically
useEffect(() => {
    const interval = setInterval(() => {
      updateProgress();
    }, 1000); // Update progress every second
    return () => clearInterval(interval);
}, [updateProgress]);


  // Function to handle playback status update
  const onPlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      // Audio playback has finished
      setProgress(0); // Reset progress to initial state
      setIsPlaying(false); // Update state to indicate audio is not playing
      
    }
  };

    // Function to handle repeat icon press
    const handleRepeatPress = () => {
      let nextState = repeatState + 1; // Calculate the next state
  
      // If the next state exceeds 2 (the maximum number of states), reset it to 0
      if (nextState > 2) {
        nextState = 0;
      }
  
      setRepeatState(nextState); // Update the repeat icon state
    };


  // Function to get the appropriate repeat icon based on the current state
  const getRepeatIcon = () => {
    switch (repeatState) {
      case 0:
        return require('../../Assets/icons/ReplayOff.png'); // Off icon
      case 1:
        return require('../../Assets/icons/ReplayAll.png'); // On icon
      case 2:
        return require('../../Assets/icons/Replay.png'); // Repeat same song icon
      default:
        return require('../../Assets/icons/ReplayAll.png'); // Default to off icon
    }
  };
  

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
        <ProgressBar progress={progress} color={theme.colors.primary} style={{width: 315, height: 5 , alignSelf: 'center', borderRadius: 5}}/>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:5}}>
            <Text style={{color: theme.colors.secondary}} variant='bodySmall'>00:00</Text>
            <Text style={{color: theme.colors.secondary}} variant='bodySmall'>01:47</Text>
            
        </View>
        </View>


        {/* Buttons  View*/}
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 5}}>

        {/* Shuffle */}
        <TouchableOpacity onPress={()=> ( shuffleOn ? setShuffle(false) : setShuffle(true))}>
                <Image source={ shuffleOn ? require('../../Assets/icons/Shuffle.png') : require('../../Assets/icons/ShuffleOff.png')} style={{margin: 20, marginTop: 40}}/>
        </TouchableOpacity>
        {/* Rewind */}
        <TouchableOpacity onPress={() => rewindSound()}>
                <Image source={require('../../Assets/icons/Rewind.png')} style={{margin: 20, marginTop: 40}}/>
        </TouchableOpacity>
        {/* Play-Pause */}
        <TouchableOpacity onPress={() => (isPlaying ? pauseSound() : resumeSound())}>
                <Image source={ isPlaying ? require('../../Assets/icons/Pause.png') : require('../../Assets/icons/Play.png') } style={{margin: 20, marginTop: 40}}/>
        </TouchableOpacity>
        {/* Fast Forward */}
        <TouchableOpacity onPress={()=> fastForwardSound()}>
                <Image source={require('../../Assets/icons/fastForward.png')} style={{margin: 20, marginTop: 40}}/>
        </TouchableOpacity>
        {/* Repeat */}
        <TouchableOpacity onPress={handleRepeatPress}>
                <Image source={getRepeatIcon()} style={{margin: 20, marginTop: 40}}/>
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