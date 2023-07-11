import { FlatList,Image,Text,TextInput,View } from 'react-native'
import { style } from './style'


export default function RandomMovie(){
    const title = <Text>Testando</Text>
    const image = <Image style={style.image} source={require('../assets/wallpaper.jpg')}/>
 
    const description = <Text>tetet</Text>
     
    
    const rating = ( <View style={style.rating} >
                        <Text style={{color:"white",fontSize:18}}>Nota</Text>
                    </View>)
    

    return(
        <View style={style.random}>
            <Text style={{fontSize:28,
                color:"white",
                width:"80%",
                textAlign:'center',
            }}>{title}</Text>
            {image}
            {description}
            {rating}
            
            </View>
       
    )
}