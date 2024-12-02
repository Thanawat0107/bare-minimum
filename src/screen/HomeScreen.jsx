import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import data from "../data/data.json";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [products, setProducts] = useState(data.products);

  const navigation = useNavigation();

  // const [isLiked, setIsLiked] = useState(false);

  const handleProductDetails = (item) => {
    navigation.navigate("PRODUCT_DETAILS", { item });
  };

  const toggleFavorite = (item) => {
    const newProduct = products.map((prod) => {
      if (prod.id === item.id) {
        console.log("prod: ", prod);
        return {
          ...prod,
          isFavorite: !prod.isFavorite,
        };
      }
      return prod;
    });

    setProducts(newProduct);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.5)", "transparent"]}
        style={styles.background}
      />
      <Header />

      <FlatList
        numColumns={2}
        ListHeaderComponent={
          <>
            <Text style={styles.headingText}>Match Your Style</Text>
            <View style={styles.inputContainer}>
              <Image
                source={require("../assets/search.png")}
                style={styles.searchIcon}
              />
              <TextInput placeholder="Search" style={styles.textInput} />
            </View>

            <Category />
          </>
        }
        data={products}
        renderItem={({ item, index }) => (
          <ProductCard
            key={index}
            item={item}
            toggleFavorite={toggleFavorite}
            handleProductClick={handleProductDetails}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: Platform.OS == "android" ? 25 : 0,
    padding: 20,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  headerText: {
    fontSize: 28,
    color: "#000000",
    marginVertical: 20,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  searchIcon: {
    height: 26,
    width: 26,
    marginHorizontal: 12,
  },
  textInput: {
    fontSize: 18,
  },
});
