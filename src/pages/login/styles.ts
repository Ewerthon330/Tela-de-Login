import { themas } from "@/src/global/themes";
import { Dimensions, StyleSheet } from "react-native";


export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop:{
        height: Dimensions.get('window').height/3,
        width: '100%',
        //backgroundColor: 'red',
        alignItems:'center',
        justifyContent:'center'
    },
    boxMid:{
        height: Dimensions.get('window').height/4,
        width: '100%',
        //backgroundColor: 'green',
        paddingHorizontal: 37
    },
    boxBottom:{
        height: Dimensions.get('window').height/3,
        //backgroundColor: 'blue',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
       
    },
    logo: {
        width: 80,
        height: 80
    },
    text: {
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18
    },
    button: {
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    textButton: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    textBottom: {
        fontSize: 16,
        color: themas.colors.gray
    },
    Button:{
        width:'100%',
    }
})

