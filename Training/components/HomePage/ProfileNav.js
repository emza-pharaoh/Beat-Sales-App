 import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import theme from "../themes";

function Profile(){

    return(
    <View style={{flex: 1, flexDirection: 'row', marginTop: 40, marginRight: 15, marginLeft: 15, justifyContent: 'space-evenly'}}>
        {/* Logo  */}
        <TouchableOpacity style={{width: '40%', marginTop: -5}}>
        <Image source={require('../../Assets/icons/LogoPlaceholderSmall.png')}/>
        </TouchableOpacity>
        
        {/* Inbox Icon Button */}
        <TouchableOpacity style={{marginRight: 10}}>
        <Image source={require('../../Assets/icons/Inbox.png')} />
        </TouchableOpacity>

        {/* Profile Username and Role (Artist or Producer or both) */}
        <View style={{ flexDirection: 'column'}}>
        <Text variant='bodySmall' style={styles.textStyles}>@Profile</Text>
        <Text variant='bodySmall' style={styles.textStyles}>Artist/Producer</Text>
        </View>
       {/* Profile Picture Button */}
        <TouchableOpacity >
        <Image source={require('../../Assets/icons/profile.png')} />
        </TouchableOpacity>
    </View>
    )
    
}

export default Profile;


const styles = StyleSheet.create({
    textStyles: {
        flex: 1,
        color : theme.colors.white,
        marginBottom: 0,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',

        
    },
})