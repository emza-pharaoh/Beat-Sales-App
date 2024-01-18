import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, SafeAreaView, Image, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { Text, Button } from "react-native-paper";
import { Card } from "@rneui/base";

export default function Catalogue() {
    const navigation = useNavigation();

    return(
        
        // Background Image
        <ImageBackground 
        style={styles.container}
        source={require("../Assets/img/HomepageBg.jpg")}
        >
            {/* Scrollable view Takes 90% of the Screen */}
          <ScrollView style={{height: '90%'}}>

            {/* Card 1 */}
            <TouchableOpacity>
            <Card>
                <Card.Title>
                    Melodic Trap Beat 
                </Card.Title>
            <Card.Image source={require('../Assets/img/Melodic.jpg')} style={{width: '100%', height: 300, justifyContent: 'center'}} />
            <Text variant="titleMedium">probucer - EmzaPharaohBeats</Text>
            <Text variant="titleSmall">BPM - 130</Text>


            </Card>
            </TouchableOpacity>

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