import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen';
import HomeScreen from './components/HomeScreen';
import Catalogue from './components/Catalogue';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNavigationContainerRef } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';




const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

export default function App() {
    
if(navigationRef.isReady){
  return(
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Welcome'>
        <Stack.Screen  name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Catalogue' component={Catalogue}/>

      </Stack.Navigator>
    </NavigationContainer>

  );
}else{
  return(
    <SafeAreaView>
    <ActivityIndicator size={large}/>
    </SafeAreaView>
  )
  
}
    
     
  
}

