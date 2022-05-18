import React from "react";
import { View, Image, StyleSheet } from "react-native";

function WelcomeScreen(props) {
  return (
    <View style={styles.background}>
      <Image
        style={{
          width: 300,
          height: 200,
          resizeMode: "contain",
        }}
        source={require("../assets/brand.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#5EC8F2",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WelcomeScreen;
