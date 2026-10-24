import { StyleSheet } from "react-native";

export const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    overflow: "scroll"
  },

  aligned_horizontally: {
    alignItems: "center",
    paddingTop: 50,
    rowGap: 10,
  },

  header: {
    backgroundColor: "indigo",
    padding: 20,
    textAlign: "center",
    fontSize: 30,
    color: "white",
  },

  text: {
    color: "white",
  },

  button: {
    backgroundColor: "indigo",
    borderRadius: 20,
    padding: 10,
  },

  loadingScreen: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A1A1A",
    flex: 1,
  },
})