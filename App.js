import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={() => console.log("Text clicked")}>
        In the following example, the nested title and body text will inherit
        the fontFamily from styles.baseText, but the title provides its own
        additional styles. The title and body will stack on top of each other on
        account of the literal newlines:
      </Text>
      <TouchableNativeFeedback onPress={() => console.log("Image Touched")}>
        <View
          style={{ width: 200, height: 70, backgroundColor: "blue" }}
        ></View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
