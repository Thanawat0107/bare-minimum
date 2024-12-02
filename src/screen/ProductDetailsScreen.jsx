import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ProductDetailsScreen = ({ route }) => {
    const { item } = route.params;
  
    return (
      <View style={styles.container}>
        <Text>Product Title: {item.title}</Text>
        <Text>Price: ${item.price}</Text>
      </View>
    );
  };

export default ProductDetailsScreen

const styles = StyleSheet.create({ container: {
    backgroundColor: "white",
    marginTop: Platform.OS == "android" ? 25 : 0,
    padding: 20,
  },})
