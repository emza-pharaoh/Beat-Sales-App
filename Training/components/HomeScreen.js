import React from "react";
import { StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation} from "@react-navigation/native";
import { useState } from "react";
import { Button, Text, Searchbar } from "react-native-paper";



export default function HomeScreen({}) {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  return(
    <SafeAreaView style={styles.container}>

      <Searchbar mode="bar" placeholder="Search" onChangeText={setSearch} value={search} style={{marginBottom: 100, width: 300}}/>
        <Text styles={styles.textStyles}>This is the HomePage!</Text>
        <Button mode="contained" icon={'chevron-left'} onPress={() => navigation.navigate('Welcome')}> Go Back </Button>
    </SafeAreaView>
    
  )
    
}


const styles = StyleSheet.create({

  textStyles: {
    fontSize: 20,
    color: 'white',
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   

  }
})
