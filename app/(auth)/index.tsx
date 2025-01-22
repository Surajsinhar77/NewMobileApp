import { Text, View } from "react-native";

export default function AuthPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Text>Auth Page</Text>


    <Text>
        This is the auth page. You can login or SignUp here.
    </Text>

    </View>
  );
}
