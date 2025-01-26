import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "@/src/Screens/Home";
import Detail from "@/src/Screens/Details";
import { LucideHome, Info } from "lucide-react-native"; // Import Lucide icons

const Tabs = createBottomTabNavigator();

export default function TabsNavigation() {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#3498db", // Background color for the header
                },

                headerTintColor: "#fff", // Color for the header text and icons
                headerTitleStyle: {
                    fontWeight: "bold", // Bold header title
                    fontSize: 20, // Custom font size
                },

                tabBarStyle: { backgroundColor: "#fff" }, // Tab bar background
                tabBarActiveTintColor: "tomato", // Active tab icon color
                tabBarInactiveTintColor: "#7f8c8d", // Inactive tab icon color
            }}
        >
            <Tabs.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Carvach", // Custom header title
                    tabBarIcon: ({ color, size }) => (
                        <LucideHome color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="Detail"
                component={Detail}
                options={{
                    title: "Details", // Custom header title
                    tabBarIcon: ({ color, size }) => (
                        <Info color={color} size={size} />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
}
