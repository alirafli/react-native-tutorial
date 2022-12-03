import React from "react";
import { Text, TouchableOpacity } from "react-native";


export default function TodoItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text className="p-4 mt-7 rounded-2xl border ">{item.text}</Text>
    </TouchableOpacity>
  )
}

