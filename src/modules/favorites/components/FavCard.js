import React from "react";
import { View, Text, Image, Dimensions } from "react-native";

const FavCard = ({ right = false, left = false }) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 10,
        marginRight: left ? 10 : 0,
        marginLeft: right ? 10 : 0,
      }}
    >
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={{
          borderRadius: 10,
          width: (Dimensions.get("window").width - 70) / 2,
          height: (Dimensions.get("window").width - 70) / 2,
        }}
      />
      <Text style={{ fontSize: 19, marginTop: 5, fontWeight: "600" }}>
        HELLO
      </Text>
    </View>
  );
};

export default FavCard;
