import React from "react";
import { View, StatusBar } from "react-native";

import HeaderSearchBar from "./lib/src/HeaderSearchBar";

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <HeaderSearchBar />
    </View>
  );
};

export default App;
