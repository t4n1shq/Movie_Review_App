import { Text, View } from "react-native";
import { verifyInstallation } from "nativewind"
import { Link } from "expo-router";

export default function Index() {
  verifyInstallation()

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-extrabold text-primary text-5xl">Welcome!</Text>
    </View>
  );
}
