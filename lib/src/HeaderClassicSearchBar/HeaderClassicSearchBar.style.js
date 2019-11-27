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

export const container = backgroundColor => {
  return {
    height: isAndroid ? 70 : 115,
    width: "100%",
    backgroundColor,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24
  };
};

export default {
  searchboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: hasNotch() ? getStatusBarHeight() + 16 : isAndroid? 16 : 0
  },
  rippleContainer: {
    bottom: 2,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center"
  }
};
