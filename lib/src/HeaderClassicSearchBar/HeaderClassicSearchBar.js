import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles, {
  shadowStyle,
  container
} from "../HeaderClassicSearchBar/HeaderClassicSearchBar.style";
import Androw from "react-native-androw";
import SearchBox from "../components/SearchBox/SearchBox";
import Icon from "react-native-dynamic-vector-icons";
import Ripple from "react-native-material-ripple";

const HeaderClassicSearchBar = props => {
  const { shadowColor, backgroundColor, onPress } = props;
  return (
    <Androw style={shadowStyle(shadowColor)}>
      <View style={container(backgroundColor)}>
        <View style={styles.searchboxContainer}>
          <SearchBox searchBoxWidth="80%" {...props} />
          <Ripple
            rippleColor="gray"
            style={{
              bottom: 2,
              width: 35,
              height: 35,
              alignItems: "center",
              justifyContent: "center"
            }}
            rippleContainerBorderRadius={100}
            onPress={onPress}
          >
            <Icon name="filter" type="FontAwesome" />
          </Ripple>
        </View>
      </View>
    </Androw>
  );
};

HeaderClassicSearchBar.propTypes = {
  shadowColor: PropTypes.string,
  backgroundColor: PropTypes.string
};

HeaderClassicSearchBar.defaultProps = {
  shadowColor: "#000",
  backgroundColor: "#fff"
};

export default HeaderClassicSearchBar;
