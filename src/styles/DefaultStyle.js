import { StyleSheet } from "react-native";

export const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },

  aligned_horizontally: {
    alignItems: "center",
    paddingTop: 50,
    rowGap: 10,
  },

  text: {
    color: "white",
  },

  button: {
    backgroundColor: "indigo",
    borderRadius: 20,
    padding: 10,
  },
})