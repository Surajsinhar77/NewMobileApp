import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function LoginCompo() {
  const navigate = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleContinue() {
    console.log("Continue");
    navigate.navigate("Home");
  }
  return (
    <View style={styles.LoginContainer}>
      <View>
        <Image
          source={require("../../assets/images/react-logo.png")}
          width={10}
        />
      </View>
      <View style={styles.inputItem}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 400,
              paddingTop: 5,
              color: "gray",
            }}
          >
            Enter Your Phone Number
          </Text>
        </View>
        <View style={styles.PhoneInput}>
          <TextInput style={styles.input} placeholder="+91 1234567890" onChangeText={(text) => setPhoneNumber(text)} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            phoneNumber.length !== 10 && styles.buttonDisabled,
          ]}
          onPress={handleContinue}
          disabled={phoneNumber.length !== 10}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text style={{ color: "gray", fontSize: 18 }}>Switch to Admin</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.poweredBy}>
        <View>
          <Text style={{ color: "red", fontSize: 13 }}>Powered By</Text>
        </View>
        <Image
          source={require("../../assets/images/react-logo.png")}
          width={10}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
    flexDirection: "column",
    // borderColor: "red",
    gap: 20,
    // borderWidth: 1
  },

  inputItem: {
    width: "95%",
    flexDirection: "column",
    gap: 10,
  },

  phoneTextInput: {
    fontSize: 16,
    fontWeight: "300",
    // paddingTop: 5,
    color: "#767578",
  },

  inoutLabel: {
    fontSize: 18,
    color: "#767578",
    fontWeight: "bold",
  },

  PhoneInput: {
    // borderColor: "#767578",
    // borderWidth: 1,
    // paddingLeft: 10,
    // backgroundColor: "#767578",
    borderRadius: 5,
    letterSpacing: 2,
    width: "100%",
  },

  buttonContainer: {
    width: "100%",
    // backgroundColor: "skyblue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },

  submitBtnContainer: {
    backgroundColor: "skyblue",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },

  submitBtn: {
    color: "black",
    fontSize: 16,
    fontWeight: "light",
    letterSpacing: 1,
  },

  poweredBy: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "#7fb3d5",
    borderRadius: 10,
    // paddingHorizontal: 15,
    fontSize: 16,
    paddingLeft: 12,
    backgroundColor: "#fff",
    color: "#1a3b5d",
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonDisabled: {
    backgroundColor: "#bdc3c7",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
