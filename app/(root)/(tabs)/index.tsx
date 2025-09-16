import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link className="bg-red-300 font-bold" href="./sign-in">
        Sign in
      </Link>
    </View>
  );
}
