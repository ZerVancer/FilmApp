import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { getMovie } from "../apiConnection/MoviesAccess";
import { getMovieComments } from "../apiConnection/CommentsAccess";
import { defaultStyle } from "../styles/DefaultStyle";
import { menuDetailsStyle } from "../styles/MovieDetailsStyle";

export default function MovieDetailsScreen({
  route
}) {
  const [movieTitle, setMovieTitle] = useState("");
  const [movie, setMovie] = useState();
  const [comments, setComments] = useState([]);

  const movieId = route.params.movieId;

  useEffect(() => {
    const init = async () => {
      const m = await getMovie(movieId);
      setMovie(m);
      setMovieTitle(m.title);
      setComments(await getMovieComments(movieId));
    }

    init();

  }, [])

  return !movie?null:(
    <View style={defaultStyle.container}>
      <Text style={defaultStyle.header}>
        {movieTitle}
      </Text>
      {comments.length === 0
      ? <Text style={defaultStyle.text}>No comments</Text>
      : <FlatList
          style={menuDetailsStyle.commentsBlock}
          data={comments}
          keyExtractor={(comment) => comment.id}
          renderItem={(comment) => (
            <View style={menuDetailsStyle.commentBlock}>
              <Text style={[defaultStyle.text, menuDetailsStyle.commentUsername]}>
                {comment.item.account.name}
              </Text>
              <Text style={[defaultStyle.text, menuDetailsStyle.commentContent]}>
                {comment.item.content}
              </Text>
            </View>
          )}
        />
      }
    </View>
  )
}
