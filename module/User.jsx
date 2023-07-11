import { Image, View,Text, SafeAreaView } from 'react-native';
import { style } from '../component/style';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
export default function User(){
    const options = [] 
    return(
        <View style={{width:"100%"
        ,height:"100%",
        backgroundColor:"#240046",
        display:'flex',
        flexDirection:'column',
        }}>
       <TagUser/>
        
   
        </View>
       
    )

function TagUser(){
    return(
        <View style={style.user_info}>
            <Image style={style.user_image} 
            source={require('../assets/icon_user.jpg')}/>
            <View style={{display:'flex',flexDirection:'column',alignItems:"center",gap:15,marginTop:10}}>
                <Text style={{fontSize:28,color:"white"}}>USERNAME</Text>
                <Text style={{fontSize:20,color:"white"}}>RANK</Text>
            </View>
        </View>
    )
}
}