import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({navigation}) {
    <SafeAreaView style={styles.container}>
        <Text styles={styles.textStyles}>This is the HomePage!</Text>
    </SafeAreaView>
}


const styles = StyleSheet.create({

  textStyles: {
    fontSize: 20,
    color: 'white',
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  }
})
