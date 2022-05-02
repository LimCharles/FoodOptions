import React from "react";
import { View, LayoutAnimation, Text, Pressable } from "react-native";

const Collapsible = ({ title, children }) => {
  const [isCollapsed, setState] = React.useState(true);
  return (
    <>
      <Pressable
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
          isCollapsed ? setState(false) : setState(true);
        }}
      >
        <Text style={{ fontWeight: "600", color: "#5EA629", fontSize: 28 }}>
          {title}
        </Text>
      </Pressable>
      {isCollapsed && (
        <View>
          {children}
          <Text> HELLO </Text>
        </View>
      )}
    </>
  );
};

export default Collapsible;
