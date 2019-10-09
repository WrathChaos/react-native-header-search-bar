import React from "react";
import { View, StatusBar } from "react-native";

import HeaderSearchBar from "react-native-header-search-bar";

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <HeaderSearchBar onChangeText={text => console.log(text)} />
    </View>
  );
};

export default App;
