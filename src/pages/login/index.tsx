import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { style } from "./styles";
import Logo from '../../assets/logo.png'
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { themas } from "@/src/global/themes";
import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Login (){
    const[email,setEmail] = useState ('');
    const[password, setPassword] = useState('');
    const[showPassword, setShowPassword] = useState(true);
    const[loading, setLoading] = useState(false)
    const navigation = useNavigation<NavigationProp<any>>()

    async function getLogin(){
        try{
            setLoading(true)

            if(!email || !password){
                return Alert.alert('Atenção', 'Informe os campos obrigatórios')
            }

            navigation.reset({routes:[{name :'BottomRoutes'}]});
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
         
    }

    return(
       <View style = {style.container}>
            <View style = {style.boxTop}>
                <Image
                    source= {Logo}
                    style = {style.logo}
                    resizeMode = "contain"
                />
                <Text>Bem vindo de volta!</Text>
            </View>
            <View style = {style.boxMid}>
            <Input
                    value= {email}
                    onChangeText={setEmail}
                    title="ENDEREÇO DE E-MAIL"
                    IconRigth={MaterialIcons}
                    IconRigthName = 'email'
                    onInconRigthPress={()=> console.log('OLÁ')}
                />
                <Input 
                    value= {password}
                    onChangeText={setPassword}
                    title="SENHA"
                    IconRigth={Octicons}
                    IconRigthName ={showPassword?"eye-closed":'eye'}
                    secureTextEntry={showPassword}
                    onInconRigthPress={() => setShowPassword(!showPassword)}
                />
            </View>
            <View style = {style.boxBottom}>
                <Button text='ENTRAR' loading={loading} onPress={()=>getLogin}/>
            </View>
            <Text style = {style.textBottom}> Não tem conta? <Text style = {{color: themas.colors.primary}}>Crie agora</Text></Text>
       </View>
    )
}