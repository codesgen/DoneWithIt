import React from "react";
import {
  Button,
  StyleSheet,
  View,
  Alert,
  SafeAreaView,
  Text,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
      <Button
        color="orange"
        title="Click me"
        onPress={() =>
          Alert.alert("My Title", "My Message", [
            {
              text: "Yes",
              onPress: () => console.log("Yes"),
            },
            {
              text: "No",
              onPress: () => console.log("No"),
            },
          ])
        }
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
