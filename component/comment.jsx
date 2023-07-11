import { TextInput,View } from 'react-native';
import { style } from './style';

export default function Comment(){
    return(
        <View style={style.comment}>
                
                <TextInput 
                multiline
                placeholder='Comentarios'
                caretHidden={true} 
                onContentSizeChange={style.comment.height}
                style={style.comment_input}/>
            </View>
    )
}