import React from "react";
import { ScrollView, Text } from "react-native";
import Collapsible from "./components/Collapsible";
import { Layout } from "@ui-kitten/components";


const Favorites = () => {
  return (
    <Layout
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        paddingTop: 19,
      }}
    >
      <ScrollView>
        <Collapsible title="HEY">
            
        </Collapsible>
      </ScrollView> 
    </Layout>
  );
};

export default Favorites;
