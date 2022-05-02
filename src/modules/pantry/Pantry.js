import React from "react";
import { Divider } from "@ui-kitten/components";
import { View } from "react-native";
import FoodItem from "./components/FoodItem";
const Pantry = () => {
  return (
    <View>
      <Divider />
      <FoodItem foodname="Pumpkin" foodquantity="500ml" />
      <FoodItem foodname="Pumpkin" foodquantity="500ml" />
      <FoodItem foodname="Pumpkin" foodquantity="500ml" />
      <CircleButton title="+" />
    </View>
  );
};

export default Pantry;
