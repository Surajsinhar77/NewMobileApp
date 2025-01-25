import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Detail from "../Screens/Details";
import { Home as LucideHome, Info as LucideInfo } from "lucide-react-native"; // Import Lucide icons

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // Define icons for each route
          let IconComponent;

          if (route.name === "Home") {
            IconComponent = LucideHome;
          } else if (route.name === "Detail") {
            IconComponent = LucideInfo;
          }

          // Return the icon as a React component
          return <IconComponent size={size} color={focused ? "tomato" : "gray"} />;
        },
        tabBarActiveTintColor: "tomato", // Color for active tab
        tabBarInactiveTintColor: "gray", // Color for inactive tab
        tabBarStyle: {
          height: 60, // Adjust the height of the tab bar
        },
      })}
    >
      <Tab.Screen name="Home" options={{
        title: "Carvach",

        headerTitleStyle: { color: "tomato", fontSize: 30, fontWeight: "semi-bold" }
      }}
        component={Home}
      />

      <Tab.Screen name="Detail"

        headerTitleStyle={{ color: "tomato", fontSize: 30, fontWeight: "semi-bold" }}

        component={Detail} />
    </Tab.Navigator>
  );
}
