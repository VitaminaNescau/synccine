import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View,Text, TextInput,Image } from 'react-native';
import RandomMovie from '../component/RandomMovies';
import SugestMovies from '../component/SugestMovies';
import FavoriteMovies from '../component/FavoriteMovies';
import { style } from '../component/style'

export default function Main(){
    const options = ["Aleatorios","Recomendados","Favoritos"]
    const [mode,setModel] = useState(RandomMovie())
    return(
        <View style={{
        width:"100%",
        height:"100%",
        backgroundColor:"#240046",
        display:'flex',
        flexDirection:'column',
        }}>
            <Header/>
           
            <View style={style.barOption}>
                {options.map((option)=>
                    <TouchableOpacity key={option}  onPress={(event)=>{
                        switch (option) {
                            case "Aleatorios":
                               setModel(RandomMovie())
                                
                                break;
                            case "Recomendados":
                                setModel(SugestMovies())
                              
                                break;
                            case "Favoritos":
                                setModel(FavoriteMovies())
                              
                                break;
                            default:
                                break;
                        }
                    }} style={style.option}>
                        <Text style={{fontSize:16,color:"white"}}>{option}</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={{display:'flex',
                width:"100%",
                height:"100%",
                justifyContent:'center',
                alignItems:'center'}}>
                {mode != null &&(
                mode
                )}
            </View>
        </View>
    )
}
function Header(){
   const [search,setSearch] = useState(); 
    return(
            <View style={style.header}>
                <Image style={style.logo} source={require("../assets/logo.png")}/>
                <TextInput placeholder='Pesquise um filme' 
                placeholderTextColor={"black"} 
                caretHidden={true}
                onSubmitEditing={()=>{}}
                style={style.input}/>
            </View>
    )
}



