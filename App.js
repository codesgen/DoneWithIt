import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={() => console.log("Text clicked")}>
        In the following example, the nested title and body text will inherit
        the fontFamily from styles.baseText, but the title provides its own
        additional styles. The title and body will stack on top of each other on
        account of the literal newlines:
      </Text>
      <Image
        source={{
          uri: "https://picsum.photos/200/300",
          width: 200,
          height: 300,
        }}
      />
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
