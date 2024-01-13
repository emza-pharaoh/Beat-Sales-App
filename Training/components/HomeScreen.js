import { SafeAreaView } from "react-native/types";

export default function HomeScreen() {
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
