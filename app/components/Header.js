import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/brand.jpg")}
        style={{
          width: 150,
          height: 40,
          resizeMode: "contain",
        }}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#5EC8F2",
    width: "100%",
    height: "7.5%",
    // flexDirection: "row",
    alignItems: "center",
  },
});
