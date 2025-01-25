import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import Logincompo from "@/components/Auth/LoginCompo";

export default function Login() {
  return (
    <View style={styles.mainContainer}>
      {/* <View>
        
      </View> */}

      {/* <View style={styles.LoginItem}>
        <View style={styles.inputItem}>
          <Text style={{ fontSize: 18, color: "#767578", fontWeight: "bold" }}>
            Enter Your Phone Number
          </Text>
          <TextInput style={styles.loginInput} placeholder="23737823964" />
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={{ color: "white", fontSize: 16 }}>Continue</Text>
        </TouchableOpacity>


        <View>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={{ color: "gray", fontSize: 18}}>Switch to Admin</Text>
          </TouchableOpacity>
        </View>
      </View> */}
        <Logincompo />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
    flexDirection: "column",
  },

  LoginItem: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
  },

  inputItem: {
    flexDirection: "column",
    width: "100%",
    borderColor: "gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  loginInput: {
    width: 150,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#8c8f8d",
    borderRadius: 7,
    fontSize: 16,
    letterSpacing: 2,
  },

  loginButton: {
    width: "100%",
    height: 40,
    padding: 10,
    backgroundColor: "#6f20f7",
    color: "white",
    borderRadius: 10,
  },

  linkButton: {
    fontSize: 16,
    color: "#8c8f8d",
    marginTop: 10,
    marginBottom: 10,
  },


  powered_logo_Link :{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  }
});
