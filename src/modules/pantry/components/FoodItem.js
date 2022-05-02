import React from "react";
import { Image, View } from "react-native";
import { Divider } from "@ui-kitten/components";
const FoodItem = ({ foodname, foodquantity }) => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
      <Text>{foodname}</Text>
      <Text>{foodquantity}</Text>
      <Divider />
    </View>
  );
};

export default FoodItem;
