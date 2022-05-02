import React, { useRef } from "react";

import {
  View,
  LayoutAnimation,
  Text,
  Pressable,
  Animated,
  Easing,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Collapsible = ({ title, children, style }) => {
  const [isCollapsed, setState] = React.useState(true);
  const spinValue = useRef(new Animated.Value(isCollapsed ? 0 : 1)).current;

  const SpinIcon = () => {
    Animated.timing(spinValue, {
      toValue: isCollapsed ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-90deg"],
  });

  return (
    <View style={style}>
      <Pressable
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => {
          SpinIcon();
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          isCollapsed ? setState(false) : setState(true);
        }}
      >
        <Animated.View style={[{ transform: [{ rotate: spin }] }]}>
          <Icon color="black" size={30} name="keyboard-arrow-down" />
        </Animated.View>
        <Text style={{ fontWeight: "600", color: "#5EA629", fontSize: 28 }}>
          {title}
        </Text>
      </Pressable>
      {isCollapsed && <View>{children}</View>}
    </View>
  );
};

export default Collapsible;
