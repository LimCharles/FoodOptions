import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import SearchBar from "./components/SearchBar";
import { ScrollView } from "react-native";
import RecipeCard from "./components/RecipeCard";

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
          paddingLeft: 25,
          paddingRight: 25,
          paddingTop: 19,
        }}
      >
        <SearchBar />

        <Layout style={{ paddingBottom: 30 }}>
          <RecipeCard
            label="Bryan's Chicken Fritters"
            foodDescription="Delicious and Mexican"
          />
        </Layout>
        <Layout style={{ paddingBottom: 40 }}>
          <RecipeCard
            label="Bryan's Chicken Fritters"
            foodDescription="Delicious and Mexican"
          />
        </Layout>
      </ScrollView>
    </Layout>
  );
};

export default Cookbook;
