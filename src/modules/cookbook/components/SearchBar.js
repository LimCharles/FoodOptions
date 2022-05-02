import React from "react";
import { Input } from "@ui-kitten/components";
import Icon from "react-native-vector-icons/MaterialIcons";

const SearchBar = () => {
  const [searchEntry, setSearchEntry] = React.useState("");

  return (
    <Input
      style={{
        width: "100%",
        backgroundColor: "#5EA629",
        borderRadius: 30,
        borderWidth: 0,
        paddingBottom: 19,
      }}
      textStyle={{
        color: "white",
        fontSize: 18,
      }}
      placeholderTextColor="white"
      value={searchEntry}
      accessoryRight={<Icon color="white" size={25} name="search" />}
      size="large"
      placeholder="Look for Recipes"
      onChangeText={(e) => setSearchEntry(e)}
    />
  );
};

export default SearchBar;
