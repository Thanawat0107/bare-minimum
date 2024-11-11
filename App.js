import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HOME" component={HomeScreen} />
        <Tab.Screen name="REORDER" component={HomeScreen} />
        <Tab.Screen name="CART" component={HomeScreen} />
        <Tab.Screen name="ACCOUNT" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
