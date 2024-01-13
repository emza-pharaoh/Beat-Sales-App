import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen';
import HomeScreen from './components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNavigationContainerRef } from '@react-navigation/native';


const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

export default function App() {
    
if(navigationRef.isReady){
  return(
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
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

