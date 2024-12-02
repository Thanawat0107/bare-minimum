import {
  Text,
  TouchableOpacity,
  FlatList,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import CartProduct from "../components/CartProduct";

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(38, 181, 185, 0.8)", "transparent"]}
        style={styles.background}
      />
      <Header isCart={true} />

      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={({ item }) => <CartProduct />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 40, paddingBottom: 200 }}
        ListFooterComponent={
          <>
            <View style={styles.bottomContentContainer}>
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Total:</Text>
                <Text style={styles.priceText}>$1000.00</Text>
              </View>
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Shpping:</Text>
                <Text style={styles.priceText}>$50.0</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Grand Total:</Text>
                <Text style={[styles.priceText, styles.grandPriceText]}>
                  $1050.00
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
          </>
        }
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
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
  },
  header: {},
  flexRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  bottomContentContainer: {
    marginHorizontal: 10,
    marginTop: 30,
  },
  titleText: {
    fontSize: 18,
    color: "#757575",
    fontWeight: "500",
  },
  priceText: {
    fontSize: 18,
    color: "#757575",
    fontWeight: "600",
  },
  divider: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    marginTop: 10,
    marginBottom: 5,
  },
  grandPriceText: {
    color: "#3C3C3C",
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#E96E6E",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
