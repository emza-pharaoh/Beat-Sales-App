import {React, useState, useEffect} from "react";
import { Audio } from "expo-av";


 //Sound State
 const [audio, setAudio] = useState()
 const [isPlaying, setIsPlaying] = useState(false)

 export async function playAudio() {
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
 export async function pauseSound() {
     if (audio) {
         if(isPlaying){
             console.log('Stopping currently playing sound');
             await audio.pauseAsync();
             setIsPlaying(false)
             console.log(isPlaying)

             
             useEffect(() => {
                return audio ? () => {
                    audio.unloadAsync()
                } : undefined
            }, [audio])
             
         }else{
             console.error('failed to Pause Audio Or is Not Playing')
         }
       
     }
   }


