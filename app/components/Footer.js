import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={{ color: "#fff", fontSize: 40 }}>This is a footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#5EC8F2",
    width: "100%",
    height: "7.5%",
    alignItems: "center",
    alignContent: "center",
  },
});
