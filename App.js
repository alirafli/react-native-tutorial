import React, { useState } from "react";
import {
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy food in supermarket", key: "1" },
    { text: "read novel in night", key: "2" },
    { text: "cook some food for dinner", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prev) => {
        return [{ text: text, key: Math.random().toString() }, ...prev];
      });
    } else {
      Alert.alert("OOPS!", "todos must be 3 chars long", [
        { text: "understood", onPress: () => console.log("alert closed!") },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className="flex-1">
        <Header />
        <View className="mt-10 mx-4 flex-1">
          <AddTodo submitHandler={submitHandler} />
          <View className="flex-1 py-10">
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
