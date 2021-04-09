import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "./../config/colors";
import AppText from "./AppText";

function ListItem({ image, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },

  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.medium,
  },
});

export default ListItem;
