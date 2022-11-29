import { StatusBar } from "expo-status-bar";
import {Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="bg-red-300">testing</Text>
      <Text>testing</Text>
      <StatusBar style="auto" />
    </View>
  );
}

