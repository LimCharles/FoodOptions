import React from "react";
import { ScrollView, Text } from "react-native";
import Collapsible from "./components/Collapsible";
import { Layout } from "@ui-kitten/components";
import FavCard from "./components/FavCard";

const Favorites = () => {
  return (
    <Layout
      style={{
        flex: 1,
        display: "flex",
      }}
    >
      <ScrollView style={{ paddingLeft: 25, paddingRight: 25, paddingTop: 19 }}>
        <Text
          style={{
            fontSize: 30,
            marginLeft: 5,
            color: "#5EA629",
            fontWeight: "600",
            marginBottom: 10,
          }}
        >
          My Saved Recipes
        </Text>
        <Collapsible style={{ marginBottom: 10 }} title="Breakfast">
          <Layout style={{ display: "flex", flexDirection: "row" }}>
            <FavCard left />
            <FavCard right />
          </Layout>
        </Collapsible>
        <Collapsible style={{ marginBottom: 10 }} title="Lunch">
          <Layout style={{ display: "flex", flexDirection: "row" }}>
            <FavCard left />
            <FavCard right />
          </Layout>
        </Collapsible>
        <Collapsible style={{ marginBottom: 10 }} title="Dinner">
          <Layout style={{ display: "flex", flexDirection: "row" }}>
            <FavCard left />
            <FavCard right />
          </Layout>
        </Collapsible>
        <Collapsible style={{ marginBottom: 40 }} title="Snacks">
          <Layout style={{ display: "flex", flexDirection: "row" }}>
            <FavCard left />
            <FavCard right />
          </Layout>
        </Collapsible>
      </ScrollView>
    </Layout>
  );
};

export default Favorites;
