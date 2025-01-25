import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Detail from "../Screens/Details";
import CamaraScreen from "@/components/NativeUI/CamaraUi";
import MyTabs from "./Mytabs";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      {/* Tabs as the main entry point */}
      <Stack.Screen
        name="Tabs"
        component={MyTabs}
        options={{ headerShown: false }} // Hide header for tab navigation
      />
      <Stack.Screen name="Detail"  component={Detail} />
      <Stack.Screen
        name="camera-open"
        component={CamaraScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "transparent",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
