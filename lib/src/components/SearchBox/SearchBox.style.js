import { isAndroid } from "@freakycoder/react-native-helpers";

export function searchBoxContainer(
  searchBoxWidth,
  searchBoxBorderRadius,
  searchBoxBackgroundColor
) {
  return {
    left: 8,
    padding: 6,
    width: searchBoxWidth,
    height: isAndroid ? 30 : null,
    borderRadius: searchBoxBorderRadius,
    backgroundColor: searchBoxBackgroundColor
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
