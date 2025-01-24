import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import Home from "../Screens/Home";
import Detail from "../Screens/Details";
import CamaraScreen from "@/components/NativeUI/CamaraUi";

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen
        name="camera-open"
        component={CamaraScreen}
        options={{
          title: "",
          headerTransparent: true, // Makes the header background transparent
          headerStyle: {
            backgroundColor: "transparent",
            elevation: 0,
            shadowOpacity: 0,
          }, // Removes background, shadow
          headerTintColor: "#fff", // Sets the color of the text in the header
        }}
      />
    </Stack.Navigator>
  );
}
