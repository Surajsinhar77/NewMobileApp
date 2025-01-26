import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "@/src/Nagivate/StackNavigation";
import { Provider } from "react-redux";
import store from "@/src/store/store";


//-----------------Screens----------------- testing 
import LoginPage from "@/src/Screens/Login";
import EnterOtp from "@/components/Auth/EnterOtp";
// import LoginPage from '@/components/Auth/Loginpage';


export default function index() {
    return (
        <Provider store={store}>
        <StackNavigation />
      </Provider>
        // <LoginPage/>
        // <EnterOtp/>
    );
}
