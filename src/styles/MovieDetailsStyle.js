import { StyleSheet } from "react-native";

export const movieDetailsStyle = StyleSheet.create({
  commentsBlock: {
    padding: 10,
  },

  addCommentBlock: {
    flexDirection: "row",
    margin: 5,
    padding: 15,
    paddingBottom: 0,
  },

  textInputBlock: {
    backgroundColor: "dimgray",
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 10,
  },

  commentBlock: {
    backgroundColor: "dimgray",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    padding: 15,
  },

  commentUsername: {
    fontSize: 20,
  },

  commentContent: {
    fontSize: 15,
  }
})