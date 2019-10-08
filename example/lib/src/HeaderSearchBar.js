import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import Androw from "react-native-androw";
import Icon from "react-native-dynamic-vector-icons";
import {
  hasNotch,
  getStatusBarHeight
} from "@freakycoder/react-native-helpers";
import SearchBox from "./components/SearchBox/SearchBox";
import { shadowStyle } from "./HeaderSearchBar.style";

const HeaderSearchBar = props => {
  const { shadowColor, onPressHamburgerIcon } = props;
  return (
    <Androw style={shadowStyle(shadowColor)}>
      <View
        style={{
          height: 210,
          width: "100%",
          backgroundColor: "#ffffff",
          borderBottomEndRadius: 24,
          borderBottomStartRadius: 24
        }}
      >
        <View
          style={{
            marginLeft: 24,
            marginTop: hasNotch() ? getStatusBarHeight() : 0
          }}
        >
          <TouchableOpacity onPress={onPressHamburgerIcon}>
            <Icon name="menu" type="Entypo" size={25} color="black" />
          </TouchableOpacity>
          <View style={{ marginLeft: 3, marginTop: 12 }}>
            <Text
              style={{ color: "#959597", fontSize: 18, fontWeight: "bold" }}
            >
              Find your
            </Text>
            <Text
              style={{ color: "#34343b", fontWeight: "bold", fontSize: 18 }}
            >
              Favorite Art Work
            </Text>
          </View>
        </View>
        <View style={{ margin: 16, top: 8 }}>
          <SearchBox />
        </View>
      </View>
    </Androw>
  );
};

HeaderSearchBar.propTypes = {
  shadowColor: PropTypes.string
};

HeaderSearchBar.defaultProps = {
  shadowColor: "#000"
};

export default HeaderSearchBar;
