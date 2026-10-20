import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
  headerBlock: {
    alignItems: "center",
    height: "140",
    padding: 10,
    backgroundColor: "indigo",

  },

  headerBlockText: {
    fontSize: 60,
  },

  headerBlockDesc: {
    fontSize: 20,
    paddingRight: 2,
  },

  textBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  textblockText: {
    color: "white",
  },

  moviesBlock: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  moviesBlockText: {
    color: "white",
  },

  loginoutBlock: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  loginoutBlockText: {
    color: "white",
  }
});