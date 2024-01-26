import React from "react"
import { View, TouchableOpacity, Image, StyleSheet, Button } from "react-native"
import { Text } from "react-native-paper"

import theme from "../themes"


export default function BeatsSaleCard({Username, beatImageDir, beatTitle, isVerified, BPM, Key, Comment}) {

    return(
        // Whole Card View
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', width: '100%', marginBottom: 25} }>


            {/* Left Section - Beat and Title */}
            <View style={{width: '45%', marginTop: 0}}>
                <TouchableOpacity style={{flexDirection: 'column', justifyContent: 'center'}}>

                    <Image source={beatImageDir} style={styles.beatPic}/>

                    <Text style={styles.textTitle}>{beatTitle}</Text>

                </TouchableOpacity>
                
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'flex-start'}}>

               
                    {/* Check If the Artist is Verified */}
                    <Text variant='labelMedium' style={styles.textStyles} textC>{Username} </Text>
                    {isVerified && <Image source={require('../../Assets/icons/verified.png')} style={{ marginTop: 9 }} />}

                </TouchableOpacity>
              
            </View>


            {/* Right Section - Details */}
            <View style={{width: '55%'}} >
                <TouchableOpacity style={{flexDirection: 'column', justifyContent:'center'}}>
                    {/* <Text variant='titleLarge' style={styles.textTitle}>Details</Text> */}
                    <Text variant='bodyLarge' style={styles.textDetails}>BPM - {BPM}</Text>
                    <Text variant='bodyLarge' style={styles.textDetails}>Key - {Key}</Text>
                    <Text variant='bodyMedium' style={[styles.textTitle]}>Creator Comment</Text>
                    <Text variant='bodyLarge' style={[styles.textDetails,  {color: theme.colors.tertiary}]} numberOfLines={3} ellipsizeMode="tail"> 
                    {Comment}</Text>

                </TouchableOpacity>
                <View style={{}}>
                  
                <TouchableOpacity style={[styles.purchaseBtn, {flexDirection: 'row', marginTop: 10, borderColor: theme.colors.primary, borderWidth: 1, borderRadius: 8, height: 45, alignItems: 'center'}]}>
                <Image source={require('../../Assets/icons/Buy.png')} style={{marginTop: -2, marginLeft: 15}}/>
                    <Text variant='titleLarge' style={[styles.textDetails, {color: 'white', marginTop: 8}]}>Purchase Beat</Text>

                </TouchableOpacity>
                </View>
               

            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    beatPic:{
        height: 150,
        width: 150,
        marginLeft: 10,
        marginRight: 3,
        justifyContent: 'center',
        borderRadius: 2,
        

    },

    textStyles: {
       
        color : theme.colors.white,
        marginBottom: 0,
        marginLeft: 10,
        marginRight: 3,
        marginTop: 5,
        alignSelf: 'flex-start'
        

        
    },
    textTitle: {
       
        color : theme.colors.white,
        marginBottom: 0,
        marginLeft: 10,
        marginRight: 3,
        marginTop: 2,
        alignSelf: 'center',
        fontWeight: 'bold',
        
        

        
    },
    textDetails: {
       
        color : theme.colors.primary,
        marginBottom: 0,
        marginLeft: 10,
        marginRight: 3,
        marginTop: 5,
        alignSelf: 'flex-start'
     
    },
    textComment: {
       
        
        marginBottom: 0,
        marginLeft: 10,
        marginRight: 3,
        marginTop: 5,
        alignSelf: 'flex-start',
        color: theme.colors.tertiary,

        purchaseBtn: {
            width: 180,
            height: 50,
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 15,
            
        }
        
     
    },
})