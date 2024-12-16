import { enableScreens } from "react-native-screens";
enableScreens();

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screen/HomeScreen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "./src/screen/ProductDetailsScreen";
import React, { useContext } from "react";
import CartScreen from "./src/screen/CartScreen";
import { CartContext, CartProvider } from "./src/Context/CartContext";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-BlackItalic.ttf": require("./src/assets/fonts/Poppins-BlackItalic.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return <Text>Font loading...</Text>;
  }

  return (
    <NavigationContainer>
      <CartProvider>
        <Tab.Navigator
          screenOptions={{
            headerShown: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "red",
          }}
        >

          <Tab.Screen
            name="HOME_STACK"
            component={MyHomeStack}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return <Entypo name={"home"} size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="REORDER"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return <FontAwesome name="reorder" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="CART"
            component={CartScreen}
            options={{
              tabBarIcon: ({ size, color }) => {
                const { cartItems } = useContext(CartContext);

                return (
                  <View>
                    <Ionicons name="cart-sharp" size={size} color={color} />
                    <View style={styles.badge}>
                      <Text style={{ color: "white", fontSize: 10 }}>
                        {cartItems.length}
                      </Text>
                    </View>
                  </View>
                );
              },
            }}
          />

          <Tab.Screen
            name="ACCOUNT"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return (
                  <MaterialIcons
                    name="account-circle"
                    size={size}
                    color={color}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    right: -5,
    bottom: 22,
    height: 14,
    width: 14,
    backgroundColor: "#E96E6E",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
});