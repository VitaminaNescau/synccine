import { cloneElement } from 'react';
import { StyleSheet } from 'react-native';


export  const style = StyleSheet.create({
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        width:"100%",
        marginTop:"10%",
        alignItems:'center',
      
        
    },
    barOption:{
       
        display:'flex',
        width:"100%",
        height:90,
        flexDirection:'row',
        justifyContent:'space-around',
        
        
    },
    option:{
        // marginHorizontal: 30,
        alignItems:'center',
        justifyContent:'center'
        
    },
    input:{
        backgroundColor:"white",
        padding:8,
        borderRadius:20,
        width:"60%",
        maxHeight:40,
        textAlign:'center',
        fontSize:16,
        marginHorizontal:25,


    },
    logo:{
        width:60,
        height:60
    },
    random:{
        width:"100%",
        height:"100%",
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        gap:10,
        position:'relative'
        
       
    },
    sugest:{
        width:"100%",
        height:"100%",
        backgroundColor:"blue"
    },
    favorite:{
        width:"100%",
        height:"100%",
        backgroundColor:"yellow",
        
    },
    image:{
        width:"40%",
        height:"40%",
        borderRadius:20,
        position:'absolute',
        left:"10%",
        top:"10%"
        // overlayColor:"white"
    },
    rating:{
        width:100,
        height:30,
        backgroundColor:"red",
        position:'absolute',
        top:"15%",
        right:"20%"

    },
    user_info:{
        width:"100%",
        height:"100%",
        display:'flex',
        padding:10,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    user_image:{
        borderRadius:100,
        width:200,
        height:200,
        borderColor:"white",
        borderWidth:5,
        
    },
    comment:{
        width:"80%",
        height:120,
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"red"

    },
    comment_input:{
        backgroundColor:"white",
        width:"90%",
        height:"50%",
        padding:8,
        borderRadius:15

    }
})