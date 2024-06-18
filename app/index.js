import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {  hp, wp } from '../helpers/common'
import { LinearGradient } from 'expo-linear-gradient'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { theme } from '../constants/theme'
import { useRouter } from 'expo-router'

const index = () => {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <Image source={require("../assets/images/happy.jpeg")} style={styles.bgImage} resizeMode='cover'/>
    {/* linear gradient */}
        <Animated.View entering={FadeInDown.duration(600)} style={{flex:1}}>
            <LinearGradient
            colors={["rgba(196, 162, 64, 0)", "rgba(196, 162, 64, 0.3)"]}
            style={styles.gradient}
            start={{x:0.5, y:0}}
            end={{x:0.5, y:0.9}}/>
            {/* content */}
            <View style={styles.contentContainer}>
                <Animated.Text entering={FadeInDown.delay(400).springify()} style={styles.title}>
                    WPDG
                </Animated.Text>
                <Animated.Text entering={FadeInDown.delay(500).springify()} style={styles.punchline}>
                    Encuentra la imagen perfecta
                </Animated.Text>
                <Animated.View entering={FadeInDown.delay(600).springify()}>
                    <Pressable onPress={()=> router.push("home")} style={styles.startButton}>
                        <Text style={styles.startText}>Explorar</Text>
                    </Pressable>
                </Animated.View>
            </View>
        </Animated.View>
    </View>
  )
}
const styles = StyleSheet.create({
    
    container:{
        flex:1,
        height:"100%"
    },
    bgImage:{
        // width:"100%",
        height:"100%",
        width:wp(100),
        // height:hp(100),
        position:"absolute",
        
    },
    gradient:{
        width:wp(100),
        height:hp(55),
        bottom:0,
        position:"absolute"
        
    }
    ,
    contentContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        gap:14,
    },
    title:{
        fontSize:hp(7),
        color:theme.colors.neutral(0.9),
        fontWeight:theme.fontWeights.bold
    },
    punchline:{
        fontSize:hp(2),
        letterSpacing:1,
        marginBottom:10,
        fontWeight:theme.fontWeights.medium
    }
    ,
    startButton:{
        backgroundColor:theme.colors.neutral(0.9),
        padding:15,
        paddingHorizontal:70,
        borderRadius:theme.radius.xl,
        borderCurve:"continuous"
    },
    startText:{
        color:theme.colors.white,
        fontSize:hp(2),
        fontWeight:theme.fontWeights.medium,
        letterSpacing:1
    }
})
export default index