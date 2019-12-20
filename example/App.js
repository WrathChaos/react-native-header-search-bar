import React from "react";
import { View, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import {
//   HeaderSearchBar,
//   HeaderClassicSearchBar
// } from "react-native-header-search-bar";
import HeaderClassicSearchBar from "./lib/src/HeaderClassicSearchBar/HeaderClassicSearchBar";

const App = () => {
  return (
    <SafeAreaProvider>
      <View>
        <StatusBar barStyle="dark-content" />
        <HeaderClassicSearchBar onChangeText={text => console.log(text)} />
      </View>
    </SafeAreaProvider>
  );
};

export default App;
