 import { TouchableOpacity, View, Image } from "react-native";
import { Text } from "react-native-paper";

function Profile(){

    return(
    <View style={{flex: 1, flexDirection: 'row'}}>
        <Text variant='bodySmall'>@Username</Text>
        <TouchableOpacity >
        <Image source={require('../../Assets/icons/profile.png')} />
        </TouchableOpacity>
    </View>
    )
    
}

export default Profile;