import { themas } from "@/src/global/themes";
import { Button, StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal: 40,
        backgroundColor: themas.colors.lightGray,
        borderColor: themas.colors.lightGray
    },
    input: {
        height: '100%',
        width: '90%',
        //backgroundColor: 'red',
        borderRadius: 50,
        paddingLeft: 5
    },
    titleInput: {
        marginLeft: 5,
        color: themas.colors.gray,
        marginTop: 20
    },
    Icon:{
        width:'100%'
    },
    Button:{
        width:'100%'
    }
})