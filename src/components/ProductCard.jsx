import { Image, StyleSheet, View, Text } from "react-native";
import React from "react";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProductCatd = () => {
    console.log("ความกว้าง", windowWidth);
    console.log("ความสูง", windowHeight);
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
  coverImage: {
    height: windowHeight/3,
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
