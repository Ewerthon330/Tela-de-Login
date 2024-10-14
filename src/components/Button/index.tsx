

import React from "react";
import { ActivityIndicator, TouchableHighlightProps, TouchableOpacity, Text} from 'react-native'
import { Style } from "./styles";


type Props = TouchableHighlightProps & {
    text: string,
    loading?: boolean
}

export function Button({...rest}:Props){
    return (
        <TouchableOpacity {...rest}
            style={Style.button}
            activeOpacity={0.6}
        >
            {rest.loading?<ActivityIndicator color={'#FFF'}/>:<Text style={[Style.textButton]}>{rest.text}</Text>}
        </TouchableOpacity>
    )
}