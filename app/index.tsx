import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "@/src/Nagivate/StackNavigation";



//-----------------Screens----------------- testing 
import LoginPage from "@/src/Screens/Login";
import EnterOtp from "@/components/Auth/EnterOtp";
// import LoginPage from '@/components/Auth/Loginpage';


export default function index() {
<<<<<<< HEAD
  return (
    // <NavigationContainer>
      <StackNavigation />
    // </NavigationContainer>r
  );
}
=======
    return (
        <StackNavigationMain/>
        // <LoginPage/>
        // <EnterOtp/>
    );
}
>>>>>>> bfa0261 (done here with some update)
