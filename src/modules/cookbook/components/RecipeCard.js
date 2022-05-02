import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import Button from "../../../components/Button";
import { ImageBackground, View, Dimensions } from "react-native";

const RecipeCard = ({ recipeImg, label, foodDescription }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://reactnative.dev/img/tiny_logo.png",
      }}
      style={{
        width: Dimensions.get("window").width - 50,
        height: Dimensions.get("window").width - 50,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Layout style={{ backgroundColor: "rgba(255,255,255,0.6)" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 24,
              paddingTop: 5,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            {label}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 14,
              paddingLeft: 10,
              paddingRight: 10,
              marginBottom: 5,
            }}
          >
            {foodDescription}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "none",
            justifyContent: "flex-end",
            paddingRight: 10,
            paddingBottom: 10,
          }}
        >
          <Button onPress={() => console.log("HEY")} title="View Full Recipe" />
        </View>
      </Layout>
    </ImageBackground>
  );
};

export default RecipeCard;
