import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles, {
  shadowStyle,
  container,
  searchboxContainer
} from "../HeaderClassicSearchBar/HeaderClassicSearchBar.style";
import Androw from "react-native-androw";
import SearchBox from "../components/SearchBox/SearchBox";
import Icon from "react-native-dynamic-vector-icons";
import Ripple from "react-native-material-ripple";
import { useSafeArea } from "react-native-safe-area-context";

const HeaderClassicSearchBar = props => {
  const { shadowColor, backgroundColor, onPress } = props;
  const insets = useSafeArea();
  return (
    <Androw style={shadowStyle(shadowColor)}>
      <View style={container(backgroundColor, insets)}>
        <View style={searchboxContainer(insets)}>
          <SearchBox searchBoxWidth="80%" {...props} />
          <Ripple
            rippleColor="gray"
            style={styles.rippleContainer}
            rippleContainerBorderRadius={100}
            onPress={onPress}
            {...props}
          >
            <Icon name="filter" type="FontAwesome" {...props} />
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
