import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Header({ isCart }) {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate("HOME");
  };

  return (
    <View style={styles.header}>
      <View style={styles.appDrawerContainer}>
        {isCart ? (
          <TouchableOpacity
            style={styles.appDrawerContainer}
            onPress={handleBack}
          >
            <Image
              source={require("../assets/arrowback.png")}
              style={styles.appBackIcon}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.appDrawerContainer}>
            <Image
              source={require("../assets/apps.png")}
              style={styles.appDrawerIcon}
            />
          </View>
        )}
      </View>

      {isCart ? <Text style={styles.titleText}>My Cart</Text> : null}
      <View>
        <Image
          source={require("../assets/Ellipse2.png")}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 28,
    color: "#000000",
  },
  appDrawerContainer: {
    backgroundColor: "white",
    height: 44,
    width: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  appDrawerIcon: {
    height: 30,
    width: 30,
  },
  appBackIcon: {
    height: 24,
    width: 24,
    marginLeft: 10,
  },
  profileImage: {
    height: 44,
    width: 44,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
