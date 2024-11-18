import { Image, StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";
import React, {useState} from "react";
import { Dimensions } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ProductCatd = () => {
//   console.log("ความกว้าง", windowWidth);
//   console.log("ความสูง", windowHeight);

  //const [isLiked, setIsLiked] = useState(false);
   const isLiked = true;
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/girl2.png")}
        style={styles.coverImage}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Test</Text>
        <Text style={styles.price}>$9.99</Text>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.likeContainer}>
        {isLiked ? (
          <Entypo name="heart-outlined" size={24} color="red" />
        ) : (
          <Entypo name="heart" size={24} color="red" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProductCatd;

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
    height: windowHeight / 3,
    width: "windowWidth",
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#444444",
  },
  price: {
    fontSize: 18,
  },
  contentContainer: {
    padding: 10,
  },
});
