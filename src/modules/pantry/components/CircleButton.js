import React from "react";
import { Text, Pressable } from "react-native";

const CircleButton = (props) => {
  const { onPress, title = "Save" } = props;
  return (
    <Pressable
      style={({ pressed }) => [
        {
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 12,
          paddingHorizontal: 12,
          borderRadius: 4,
          elevation: 3,
          backgroundColor: "black",
          borderRadius: 30,
          backgroundColor: pressed ? "#4B8620" : "#5EA629",
        },
      ]}
      onPress={() => {
        onPress();
      }}
    >
      <Text
        style={{
          fontSize: 16,
          lineHeight: 21,
          fontWeight: "bold",
          letterSpacing: 0.25,
          color: "white",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default CircleButton;
