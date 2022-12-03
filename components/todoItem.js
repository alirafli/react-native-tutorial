import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <View className="p-4 mt-7 rounded-2xl border flex flex-row items-center">
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <MaterialIcons name="delete" size={24} color="black" />
      </TouchableOpacity>
      <Text className="ml-3">{item.text}</Text>
    </View>
  );
}
