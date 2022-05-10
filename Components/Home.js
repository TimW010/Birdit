import { StatusBar } from "expo-status-bar";
import React from "react";
import { Animated, Dimensions, Image, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Home() {
  const edges = useSafeAreaInsets();

  return (
    <View>
      <ScrollView>
        <View
          style={{
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: edges.top + 65,
            paddingBottom: 25,
          }}
        ></View>
      </ScrollView>
    </View>
  );
}
