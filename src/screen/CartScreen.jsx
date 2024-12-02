import { Platform,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import Header from '../components/Header';


const CartScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(38, 181, 185, 0.8)", "transparent"]}
        style={styles.background}
      />
      <Header />
    </View>
  )
}


export default CartScreen


const styles = StyleSheet.create({ container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: Platform.OS == "android" ? 25 : 0,
    padding: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },})
