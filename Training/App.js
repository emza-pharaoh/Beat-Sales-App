import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/HomePage/HomeScreen';
import Catalogue from './components/Artist Profile/Catalogue';
import LandingScreen from './components/LandingScreen';
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
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Landing'>

        <Stack.Screen  name='Landing' component={LandingScreen} />
        <Stack.Screen  name='Login' component={LoginScreen} />
        <Stack.Screen  name='Register' component={RegisterScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        

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

