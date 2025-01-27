import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Detail from "../Screens/Details";
import { LucideHome, SunMedium } from "lucide-react-native"; // Import Lucide icons

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Carvach",
          tabBarIcon: ({ color, size }) => (
            <LucideHome color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={Detail}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SunMedium color={color} size={size} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}
