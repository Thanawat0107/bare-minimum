import { Platform, StyleSheet, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.5)", "transparent"]}
        style={styles.background}
      />
    </View>
  );
};


export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: Platform.OS == "android" ? 25 : 0,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
