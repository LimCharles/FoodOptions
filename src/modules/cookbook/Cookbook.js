import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import SearchBar from "./components/SearchBar";
import { ScrollView } from "react-native";
import RecipeCard from "./components/RecipeCard";

const Row = ({ children }) => (
  <Layout style={{ display: "flex", flexDirection: "row", paddingBottom: 20 }}>
    {children}
  </Layout>
);

const Cookbook = () => {
  return (
    <Layout
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
      }}
    >
      <ScrollView
        style={{
          display: "flex",
          width: "100%",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 19,
        }}
      >
        <SearchBar />

        <Row>
          <RecipeCard
            label="Bryan's Chicken Fritters"
            foodDescription="Delicious and Mexican"
          />
        </Row>
        <Row>
          <RecipeCard
            label="Bryan's Chicken Fritters"
            foodDescription="Delicious and Mexican"
          />
        </Row>
      </ScrollView>
    </Layout>
  );
};

export default Cookbook;
