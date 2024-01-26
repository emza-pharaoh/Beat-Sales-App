import React from "react";
import { TouchableOpacity, View, ImageBackground, StyleSheet, Image } from "react-native";
import theme from "../themes";

export default function BottomNav() {
    
    return(
        <ImageBackground source={require('../../Assets/icons/BottomNav/blurBg.png')} style={styles.background}>

            <TouchableOpacity>
                <Image source={require('../../Assets/icons/BottomNav/Iconly/Light-Outline/Home.png')} style={styles.iconStyle}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../Assets/icons/BottomNav/Iconly/Light-Outline/Search.png')} style={styles.iconStyle}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../Assets/icons/BottomNav/Iconly/Light-Outline/Chat.png')} style={styles.iconStyle}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../Assets/icons/BottomNav/Iconly/Light-Outline/Upload.png')} style={styles.iconStyle}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../Assets/icons/BottomNav/Iconly/Light-Outline/Profile.png')} style={styles.iconStyle}/>
            </TouchableOpacity>

        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        
        
        
        
    },

    iconStyle: {
        margin: 10,
        marginTop: 15
    }
})