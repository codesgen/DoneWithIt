import React from "react";
import { Image, View, StyleSheet } from "react-native";

import colors from "./../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image source={require("./../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for Sale</AppText>
        <AppText style={styles.price}> $100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/me.jpg")}
            title="Abel Masila"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
