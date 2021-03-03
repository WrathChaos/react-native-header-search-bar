import {
  hasNotch,
  getStatusBarHeight
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
    height: 210,
    width: "100%",
    backgroundColor,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24
  };
};

export const firstTitleStyle = (color, fontSize) => {
  return {
    color,
    fontSize,
    fontWeight: "bold"
  };
};

export const secondTitleStyle = (color, fontSize) => {
  return {
    fontSize: 18,
    marginTop: 3,
    color: color,
    fontWeight: "bold"
  };
};

export default {
  containerGlue: {
    marginLeft: 24,
    marginTop: hasNotch() ? getStatusBarHeight() : 0
  },
  titleContainer: {
    marginTop: 12,
    marginLeft: 3
  },
  searchboxContainer: {
    top: 8,
    margin: 16
  }
};
