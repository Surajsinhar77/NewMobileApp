import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "@/src/Screens/Home";
import Detail from "@/src/Screens/Details";

const Tabs = createBottomTabNavigator();

export default function TabsNavigation() {
    return(
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="Detail" component={Detail} />
        </Tabs.Navigator>
    )
}