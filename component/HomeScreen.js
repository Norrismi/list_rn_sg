import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
   
  return (
    <View>
      <Text>Hi There</Text>
      <TouchableOpacity></TouchableOpacity>
      <Button
        onPress={() => console.log("pressed")}
        title="Go to Components Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;