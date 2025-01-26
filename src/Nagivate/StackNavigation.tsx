import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login";
import TabsNavigation from "./TabsNavigation";
import Detail from "../Screens/Details";
import CamaraScreen from "@/components/NativeUI/CamaraUi";
import { useSelector } from "react-redux";


const Stack = createStackNavigator();

export default function StackNavigation() {
  // const {isAuthenticated} = useSelector((state : any) => state.auth) || true;
  // console.log(isAuthenticated, "Check isAuthenticated 13" );

  const isAuthenticated = true; // Replace with actual auth check

  return (
    <Stack.Navigator 
      initialRouteName={isAuthenticated ? "Tabs" : "Login"}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      {isAuthenticated && (
        <>
          <Stack.Screen
            name="Tabs"
            component={TabsNavigation}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Home"
            component={TabsNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Detail" 
            component={Detail} 
            options={{ headerShown: true }}
          />
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
        </>
      )}
    </Stack.Navigator>
  );
}