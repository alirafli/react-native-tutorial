import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Button from "./button";

export default function AddTodo({submitHandler}) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        className = "border mb-5 px-2 py-4 rounded-xl"
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button onPress={() => submitHandler(text)} title="add todo" className="bg-amber-400 rounded-xl px-3 py-4" />
    </View>
  );
}
