import React from "react";
import PageNav from "./src/components/PageNav";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { StatusBar, LayoutAnimation, UIManager } from "react-native";
import MaterialIconsPack from "./src/util/MaterialIconsPack";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  return (
    <>
      <IconRegistry icons={MaterialIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <StatusBar hidden />
        <PageNav />
      </ApplicationProvider>
    </>
  );
};

export default App;
