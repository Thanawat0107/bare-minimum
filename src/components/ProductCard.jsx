import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { fonts } from "../utils/fonts";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ProductCard = ({ item, toggleFavorite, handleProductClick }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleProductClick(item)}
    >
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>

      <TouchableOpacity
        onPress={() => toggleFavorite(item)}
        style={styles.likeContainer}
      >
        {item?.isFavorite ? (
          <Ionicons name="heart-outline" size={24} color="red" />
        ) : (
          <Ionicons name="heart" size={24} color="red" />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  likeContainer: {
    position: "absolute",
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    right: 10,
    top: 10,
  },
  coverImage: {
    height: windowHeight / 4,
    width: windowWidth / 2.5,
    borderRadius: 20,
  },
  title: {
    fontFamily: fonts.BlackItalic,
    fontSize: 18,
    fontWeight: "700",
    color: "#444444",
  },
  price: {
    fontSize: 18,
    fontFamily: fonts.BlackItalic,
  },
  contentContainer: {
    padding: 10,
  },
});
