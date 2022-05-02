import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const MaterialIconsPack = {
  name: "materialicons",
  icons: createIconsMap(),
};

function createIconsMap() {
  return new Proxy(
    {},
    {
      get(target, name) {
        return IconProvider(name);
      },
    }
  );
}

const IconProvider = (name) => ({
  toReactElement: (props) => MaterialIcons({ name, ...props }),
});

function MaterialIcons({ name, style }) {
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
  return <Icon name={name} size={height} color={tintColor} style={iconStyle} />;
}

export default MaterialIconsPack;
