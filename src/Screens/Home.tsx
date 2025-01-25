import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Test from "@/components/NativeUI/Test";

export default function Home(){
    const navigation = useNavigation();
    return (
        <View>
        {/* <Text>Home</Text> */}
        {/* <View style={styles.container}> */}
        <Text style={styles.text} >Welcome</Text>
            {/* <Button title="Go to Detail" onPress={() => navigation.navigate('Detail')} /> */}

        {/* </View> */}

        
        </View>
    );
}





  
  


const styles  = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'rgb(215, 22, 22)',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
    
        marginTop: 20,


    }


})