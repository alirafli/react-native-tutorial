import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Home({ onLayout }) {
  return (
    <View className="bg-yellow-500 p-9" onLayout={onLayout}>
      <Text className="font-poppins-reg">Home Screens</Text>
    </View>
  );
}
