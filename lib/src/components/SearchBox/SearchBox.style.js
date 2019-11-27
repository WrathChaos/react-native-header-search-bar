import {
  isAndroid
} from "@freakycoder/react-native-helpers";

export function searchBoxContainer(
  searchBoxWidth,
  searchBoxBorderRadius,
  searchBoxBackgroundColor
) {
  return {
    left: 8,
    padding: isAndroid ? 0 : 6,
    width: searchBoxWidth,
    borderRadius: searchBoxBorderRadius,
    backgroundColor: searchBoxBackgroundColor,
    height: 40,
  };
}

export default {
  searchBoxGlue: {
    alignItems: "center",
    flexDirection: "row"
  },
  searchBoxTextStyle: {
    left: 3,
    width: "85%",
    fontSize: 12,
    color: "black"
  }
};
