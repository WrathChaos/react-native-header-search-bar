import {
  hasNotch,
  getStatusBarHeight,
  isAndroid
} from "@freakycoder/react-native-helpers";

export const shadowStyle = shadowColor => {
  return {
    shadowColor,
    shadowRadius: 9,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 4
    }
  };
};

export const container = (backgroundColor, insets) => {
  return {
    width: "100%",
    backgroundColor,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
    height: isAndroid ? insets.top + 70 : 115
  };
};

export const searchboxContainer = insets => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  marginTop: hasNotch()
    ? getStatusBarHeight() + 16
    : isAndroid
    ? insets.top + 16
    : 0
});

export default {
  rippleContainer: {
    bottom: 2,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center"
  }
};
