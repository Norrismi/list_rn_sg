import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Larry", age: 20 },
    { name: "Tom", age: 20 },
    { name: "Moe", age: 20 },
    { name: "Sally", age: 20 },
    { name: "Sally", age: 20 },
    { name: "Britney", age: 20 },
    { name: "Dani", age: 20 }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(index, item) => item.toString()}
        data={friends}
        renderItem={({ item }) => {
          return <Text>{`${item.name} - Age ${item.age}`}</Text>;
        }}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // textAlignVertical: "center",
    // alignContent: "flex-end"
  },

  textStyle: {
    padding: 5,
    marginLeft: 15,
    marginVertical: 25
  }
});
