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

  commentButtonBlock: {
    marginTop: 5,
    marginLeft: "auto",
    marginRight: 5,
    flexDirection: "row",
    gap: 5,
  },

  commentUsername: {
    fontSize: 20,
  },

  commentContent: {
    fontSize: 15,
  },

  editingComment: {
    backgroundColor: "#646464",
    borderWidth: 1,
  },

  movieDetailsView: {
    paddingBottom: 20,
    borderBottomWidth: 3,
  },

  movieDetails: {
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
  },

  imdbButton: {
    width: 60,
    alignItems: "center",
    marginRight: 20,
    marginLeft: "auto",
  }
})