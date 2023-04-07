import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";


export default function App() {
  return (
    <View>
      <Text style={styles.post}>
        123
      </Text>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#25dd44" translucent = {false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    color: 'red',
  }
})