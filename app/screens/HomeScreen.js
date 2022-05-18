import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style={{ backgroundColor: "#5EC8F2" }}></StatusBar>
        <Header></Header>
        <View
          style={{
            backgroundColor: "#fff",
            width: "100%",
            height: "85%",
          }}
        ></View>
        <Footer></Footer>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  safeArea: {
    backgroundColor: "#5EC8F2",
  },
});

export default HomeScreen;
