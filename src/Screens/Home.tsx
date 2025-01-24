import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default function Home(){
    const navigation = useNavigation();
    return (
        <View>
        <Text>Home</Text>
        {/* <View style={styles.container}> */}
            <Button title="Go to Detail" onPress={() => navigation.navigate('Detail')} />
        {/* </View> */}
        </View>
    );
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})