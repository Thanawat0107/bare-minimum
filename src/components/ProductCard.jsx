import { Image, StyleSheet, View } from "react-native";
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
    height: windowHeight/2.5,
    width: "windowWidth",
    borderRadius: 20,
  },
});
