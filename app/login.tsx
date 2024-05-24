import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Page = () => {
  const { type } = useLocalSearchParams<{ type: string }>();
  return (
    <View>
      <Text>{type}</Text>
    </View>
  );
};

export default Page;
