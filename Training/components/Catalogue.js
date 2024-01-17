import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, SafeAreaView } from "react-native";
import { Card, Text, Button } from "react-native-paper";

export default function Catalogue() {
    const navigation = useNavigation();

    return(<SafeAreaView>
          <ScrollView>
            <Card>
                <Card.Title mode={'contained'} title={'Melodic Trap beat'} subtitle={'prod by EmzaPharaohBeats'}>
                
                    <Card.Content>
                        <Text variant="titleLarge">Track No.1</Text>
                        <Text variant="bodyMedium">Track No.1</Text>
                    </Card.Content>
                    <Card.Cover  source={{uri: '../Assets/img/Melodic.jpg'}} style={{width:100, height: 100}}/>
                    
                </Card.Title>
            </Card>

        </ScrollView>

        <Button 
        mode="contained"
        style={{width: 350}}
        onPress={() => navigation.navigate('Home')}
        >
        Back
        </Button>

    </SafeAreaView>
      

    )

    }