import React from "react";
import { Text, Pressable } from "react-native";

export default function Button({
  onPress,
  title = "your text",
  className,
  ...other
}) {
  return (
    <Pressable onPress={onPress} className={className} {...other}>
      <Text className="text-center text-white font-semibold text-lg">{title}</Text>
    </Pressable>
  );
}
