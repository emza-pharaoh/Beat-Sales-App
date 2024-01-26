import {React} from "react";
import { ScrollView, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import theme from "../themes";





function ArtistDisplay({ Username, picDir, isVerified}){


    return(
        
        <TouchableOpacity style={{}}>
            <View style={{flex: 1 ,marginRight: 5,marginLeft: 15}}>
                {/* Profile Image */}
                <Image source={picDir} style={styles.profilePic}/>
                
                {/* Username */}
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Text variant="titleMedium" style={styles.textStyles}>{Username}</Text>

                {/* Check If the Artist is Verified */}
                {isVerified && <Image source={require('../../Assets/icons/verified.png')} style={{ marginTop: 12 }} />}
                </View>
                
            
            </View>
            
        </TouchableOpacity>
    )
}

export default ArtistDisplay


const styles = StyleSheet.create({

    profilePic:{
        height: 120,
        width: 120,
        justifyContent: 'center',
        borderRadius: 300,
        

    },

    textStyles: {
       
        color : theme.colors.white,
        marginBottom: 0,
        marginLeft: 10,
        marginRight: 3,
        marginTop: 5,
        alignSelf: 'flex-start'

    },
})
