

import { View, Text , Button} from "react-native";
import CameraScreen from "@/components/NativeUI/CamaraUi";
import { useNavigation } from "@react-navigation/native";


export default function Detail() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>
                Details page 
            </Text>

            <Button onPress= {() => navigation.navigate('camera-open')} title="Open camera"/>
        </View>
    );
}