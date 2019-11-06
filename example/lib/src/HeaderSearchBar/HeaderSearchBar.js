import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import Androw from "react-native-androw";
import Icon from "react-native-dynamic-vector-icons";
import SearchBox from "../components/SearchBox/SearchBox";
import styles, {
  shadowStyle,
  container,
  firstTitleStyle,
  secondTitleStyle
} from "./HeaderSearchBar.style";

const HeaderSearchBar = props => {
  const {
    firstTitle,
    secondTitle,
    shadowColor,
    iconComponent,
    backgroundColor,
    firstTitleColor,
    secondTitleColor,
    firstTitleFontSize,
    secondTitleFontSize,
    onPressHamburgerIcon
  } = props;
  return (
    <Androw style={shadowStyle(shadowColor)}>
      <View style={container(backgroundColor)}>
        <View style={styles.containerGlue}>
          <TouchableOpacity onPress={onPressHamburgerIcon}>
            {iconComponent || (
              <Icon
                size={25}
                name="menu"
                type="Entypo"
                color="black"
                {...props}
              />
            )}
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={firstTitleStyle(firstTitleColor, firstTitleFontSize)}>
              {firstTitle}
            </Text>
            <Text
              style={secondTitleStyle(secondTitleColor, secondTitleFontSize)}
            >
              {secondTitle}
            </Text>
          </View>
        </View>
        <View style={styles.searchboxContainer}>
          <SearchBox {...props} />
        </View>
      </View>
    </Androw>
  );
};

HeaderSearchBar.propTypes = {
  firstTitle: PropTypes.string,
  secondTitle: PropTypes.string,
  shadowColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  firstTitleColor: PropTypes.string,
  secondTitleColor: PropTypes.string,
  firstTitleFontSize: PropTypes.number,
  secondTitleFontSize: PropTypes.number
};

HeaderSearchBar.defaultProps = {
  shadowColor: "#000",
  firstTitleFontSize: 18,
  secondTitleFontSize: 18,
  backgroundColor: "#fff",
  firstTitle: "Find your",
  firstTitleColor: "#959597",
  secondTitleColor: "#34343b",
  secondTitle: "Favorite Art Work"
};

export default HeaderSearchBar;
