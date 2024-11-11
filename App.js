import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './src/screen/HomeScreen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "red",
        }}
      >
        <Tab.Screen
          name="HOME"
          component={HomeScreen}
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
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return <Ionicons name="cart" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="ACCOUNT"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return <MaterialIcons name="account-circle" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
