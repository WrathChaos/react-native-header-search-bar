import React from "react";
import { View, StatusBar } from "react-native";
import {
  HeaderSearchBar,
  HeaderClassicSearchBar
} from "react-native-header-search-bar";

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <HeaderClassicSearchBar onChangeText={text => console.log(text)} />
    </View>
  );
};

export default App;
