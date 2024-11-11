import React from 'react'
import { Text, View } from 'react-native'

export default function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 0.5,
        backgroundColor: "orange",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Text>Header</Text>
      <Text>Header</Text>
    </View>
  );
}
