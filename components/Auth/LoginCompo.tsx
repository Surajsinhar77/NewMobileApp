import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/store/store";
import { loginUser } from "@/src/store/auth/authSlice";

export default function LoginCompo() {
  const navigate = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, user ,isAuthenticated} = useSelector((state: RootState) => state.auth);
  console.log(loading, error, user, "Check loading, error, user 14");

  const handleContinue = () => {
    // Phone number validation
    if (phoneNumber.length !== 10 || !/^\d{10}$/.test(phoneNumber)) {
      console.log("Phone number should be 10 digits");
      return;
    }
    
    const mockUser = { id: "123", name: "John Doe" }; // Replace with real user data
    dispatch(loginUser({ user: mockUser, role: "User" }));
    console.log("Login successful 25" , isAuthenticated);
    
    // navigate.navigate("Home");

    // Simulate phone number login (replace with your real login logic)
    // setTimeout(() => {
    //   // Redirect after successful login
       
    // }, );

  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate.navigate("Home");
    }
  }, [isAuthenticated]);


  return (
    <View style={styles.LoginContainer}>
      <View>
        <Image source={require("../../assets/images/react-logo.png")} width={10} />
      </View>
      <View style={styles.inputItem}>
        <Text style={styles.inputLabel}>Enter Your Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="+91 1234567890"
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, phoneNumber.length !== 10 && styles.buttonDisabled]}
          onPress={handleContinue}
          disabled={phoneNumber.length !== 10 || loading}
        >
          {/* {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Continue</Text>
          )} */}
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <View>
        <TouchableOpacity>
          <Text style={styles.switchText}>Switch to Admin</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.poweredBy}>
        <Text style={{ color: "red", fontSize: 13 }}>Powered By</Text>
        <Image source={require("../../assets/images/react-logo.png")} width={10} />
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
    gap: 20,
  },
  inputItem: {
    width: "95%",
    flexDirection: "column",
    gap: 10,
  },
  inputLabel: {
    fontSize: 18,
    color: "#767578",
    fontWeight: "bold",
  },
  PhoneInput: {
    borderRadius: 5,
    width: "100%",
  },
  buttonContainer: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
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
  switchText: {
    color: "gray",
    fontSize: 18,
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
    fontSize: 16,
    paddingLeft: 12,
    backgroundColor: "#fff",
    color: "#1a3b5d",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 10,
  },
});
