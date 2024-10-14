import React, { forwardRef, LegacyRef } from "react";
import {View, Text, TextInput, TextInputProps, TouchableOpacity} from 'react-native';
import { Style } from "./styles";
import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import { themas } from "@/src/global/themes";
import { style } from "@/src/pages/login/styles";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRigth?: IconComponent,
    IconLeftName?: string,
    IconRigthName?: string,
    title?: string,
    onInconLeftPress?: () => void,
    onInconRigthPress?: () => void,
}

export const Input = forwardRef((Props: Props, ref: LegacyRef<TextInput> | null) =>{

    const {IconLeft, IconRigth, IconLeftName, IconRigthName, title, onInconLeftPress, onInconRigthPress, ...rest } = Props


    const calculateSizeWidth =() => {
        if(IconLeft && IconRigth){
            return '80%'
        }else if(IconLeft || IconRigth){
            return '90%'
        }else{
            return '100%'
        }
    };

    const calculateSizePaddingLeft =() => {
        if(IconLeft && IconRigth){
            return 0;
        }else if(IconLeft || IconRigth){
            return 10;
        }else{
            return 20;
        }
    }
    return(
        <>
            {title&&<Text style = {Style.titleInput}> {title} </Text>}
            <View style = {[Style.boxInput, {paddingLeft: calculateSizePaddingLeft()}]}>
                {IconLeft && IconLeftName &&(
                    <TouchableOpacity onPress={onInconLeftPress} style={style.Button}>
                        <IconLeft name ={IconLeftName as any}
                                        size={20}
                                        color={themas.colors.gray}
                                        style={Style.Icon}/>
                    </TouchableOpacity>
                )}
                <TextInput
                    style = {[
                        Style.input,{width: calculateSizeWidth()}
                    ]}
                    {...rest}
                />
                {IconRigth && IconRigthName &&(
                    <TouchableOpacity onPress={onInconRigthPress}>
                        <IconRigth name ={IconRigthName as any}
                                        size={20}
                                        color={themas.colors.gray}
                                        style={Style.Icon}/>
                    </TouchableOpacity>
                )}
            </View>
        </>
    )
})