import { View, Text } from "react-native";

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login Page</Text>

      <Text>This is the auth page. You can login or SignUp here.</Text>
    </View>
  );
}
