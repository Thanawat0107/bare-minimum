import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { useRoute } from "@react-navigation/native";

const ProductDetailsScreen = () => {
  const route = useRoute();
  const product = route.params.item;

  const [selectedSize, setSelectedSize] = useState(0);

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(20, 11, 178, 0.8)", "transparent"]}
        style={styles.background}
      />
      <Header />

      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.coverImage} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.fontText}>{product.title}</Text>
          <Text style={styles.fontText}>${product.price}</Text>
        </View>

        {/* size container */}
        <Text style={[styles.fontText, styles.sizeText]}>Size</Text>
        <View style={styles.sizeContainer}>
          {["S", "M", "L", "XL"].map((size) => (
            <TouchableOpacity
              key={size}
              onPress={() => setSelectedSize(size)}
              style={styles.sizeValueContainer}
            >
              <Text
                style={[
                  styles.sizeValueText,
                  selectedSize === size && styles.sizeSelected,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  contentContainer: {
    padding: 20,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fontText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#444444",
  },
  sizeText: {
    marginTop: 20,
  },
  sizeContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
  },
  sizeValueContainer: {
    backgroundColor: "#FFFFFF",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  sizeValueText: {
    fontSize: 18,
    fontWeight: "700",
  },
  sizeSelected: {
    color: "#E55B5B",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  coverImage: {
    width: "100%",
    height: 300,
    borderRadius: 20,
  },
});
