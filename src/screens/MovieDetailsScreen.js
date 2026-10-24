import { useEffect, useState } from "react";
import { FlatList, Linking, Pressable, Text, TextInput, ToastAndroid, View } from "react-native";
import { getMovie } from "../apiConnection/MoviesAccess";
import { createComment, deleteComment, getMovieComments, updateComment } from "../apiConnection/CommentsAccess";
import { defaultStyle } from "../styles/DefaultStyle";
import { movieDetailsStyle } from "../styles/MovieDetailsStyle";
import * as SecureStore from "expo-secure-store"

export default function MovieDetailsScreen({
  route
}) {
  const [movie, setMovie] = useState();
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState()
  const [user, setuser] = useState()
  const [focusedComment, setFocusedComment] = useState()
  const [focusedCommentContent, setFocusedCommentContent] = useState()

  const movieId = route.params.movieId;

  useEffect(() => {
    const init = async () => {
      setMovie(await getMovie(movieId));
      setComments(await getMovieComments(movieId));
      setuser(JSON.parse(await SecureStore.getItemAsync("user")))
    }

    init();

  }, [])

  async function comment(content, userId) {
    await createComment(movie.id, userId, content)
    setComments(await getMovieComments(movie.id))
    setContent("")
  }

  async function trycomment(content) {
    const user = JSON.parse(await SecureStore.getItemAsync("user"))

    user ? 
    comment(content, user.id) : 
    ToastAndroid.show("You must be logged in to comment!", ToastAndroid.SHORT)
  }

  async function removeComment(commentId) {
    await deleteComment(commentId)

    ToastAndroid.show("Comment deleted", ToastAndroid.SHORT)

    setComments(await getMovieComments(movieId))
  }

  async function edit(commentId) {
    await updateComment(commentId, focusedCommentContent)

    ToastAndroid.show("Comment updated", ToastAndroid.SHORT)

    setComments(await getMovieComments(movieId))

    setFocusedComment(null)
  }

  function focusOn(commentId, content) {
    setFocusedCommentContent(content)

    setFocusedComment(commentId)
  }

  function openWebsite(link) {
    Linking.openURL(link)
  }
  
  return !movie?
    <View style={defaultStyle.loadingScreen}>
      <Text style={defaultStyle.text}>Loading...</Text>
    </View>:
    <View style={defaultStyle.container}>
      <Text style={defaultStyle.header}>
        {movie.title}
      </Text>
      <View style={movieDetailsStyle.movieDetailsView}>
        <Text style={[defaultStyle.text, movieDetailsStyle.movieDetails]}>
          {movie.details}
        </Text>
        <Pressable style={[defaultStyle.button, movieDetailsStyle.imdbButton]} onPress={() => openWebsite(movie.imdbLink)}>
          <Text style={defaultStyle.text}>IMDB</Text>
        </Pressable>
      </View>
      <View style={movieDetailsStyle.addCommentBlock}>
        <TextInput value={content} style={[movieDetailsStyle.textInputBlock, defaultStyle.text]} onChangeText={setContent} />
        <Pressable style={defaultStyle.button} onPress={() => trycomment(content)}><Text style={defaultStyle.text}>Publish</Text></Pressable>
      </View>
      <FlatList
          style={movieDetailsStyle.commentsBlock}
          ListEmptyComponent={<Text style={defaultStyle.text}>No comments</Text>}
          data={comments}
          keyExtractor={(comment) => comment.id}
          renderItem={(comment) => (
            focusedComment == comment.item.id ?
            <View style={movieDetailsStyle.commentBlock}>
              <Text style={[defaultStyle.text, movieDetailsStyle.commentUsername]}>
                {comment.item.account.name}
              </Text>
              <TextInput value={focusedCommentContent} defaultValue={comment.item.content} style={[defaultStyle.text, movieDetailsStyle.commentContent, movieDetailsStyle.editingComment]} onChangeText={setFocusedCommentContent}>
              </TextInput>
              <View style={movieDetailsStyle.commentButtonBlock}>
                <Pressable style={defaultStyle.button} onPress={() => edit(comment.item.id)}>
                  <Text style={defaultStyle.text}>Save</Text>
                </Pressable>
                <Pressable style={defaultStyle.button} onPress={() => setFocusedComment(null)}>
                  <Text style={defaultStyle.text}>Cancel</Text>
                </Pressable>
              </View>
            </View>
            :
            <View style={movieDetailsStyle.commentBlock}>
              <Text style={[defaultStyle.text, movieDetailsStyle.commentUsername]}>
                {comment.item.account.name}
              </Text>
              <Text style={[defaultStyle.text, movieDetailsStyle.commentContent]}>
                {comment.item.content}
              </Text>
              {user && comment.item.account.name == user.name ?
              <View style={movieDetailsStyle.commentButtonBlock}>
                <Pressable style={defaultStyle.button} onPress={() => focusOn(comment.item.id, comment.item.content)}>
                  <Text style={defaultStyle.text}>Edit</Text>
                </Pressable>
                <Pressable style={defaultStyle.button} onPress={() => removeComment(comment.item.id)}>
                  <Text style={defaultStyle.text}>Delete</Text>
                </Pressable>
              </View> :
              null}
            </View>
          )}
        />
    </View>
}
