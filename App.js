import React, { useState } from "react";
import { View, FlatList } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy food in supermarket", key: "1" },
    { text: "read novel in night", key: "2" },
    { text: "cook some food for dinner", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prev) => {
      return prev.filter(todo => todo.key != key)
    })
  }
  return (
    <View className="">
      <Header />
      <View className="mt-10 mx-4">
        <View>
          <FlatList
            data={todos}
            renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler} />}
          />
        </View>
      </View>
    </View>
  );
}
