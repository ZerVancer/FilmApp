import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { getMovie } from "../apiConnection/MoviesAccess";
import { getMovieComments } from "../apiConnection/CommentsAccess";

export default function MovieDetailsScreen({
  route
}) {
  const [movieTitle, setMovieTitle] = useState();
  const [movie, setMovie] = useState();
  const [comments, setComments] = useState([]);

  const movieId = route.params.movieId;

  useEffect(() => {
    const init = async () => {
      setMovie(await getMovie(movieId));
      console.log("18", movie)
      setMovieTitle(movie.title);
      setComments(await getMovieComments(movieId));
    }

    init();

  }, [])
  console.log(movie);
  return !movie?null:(
    <View>
      <Text>
        {movieTitle}
      </Text>
      {comments.length === 0
      ? <Text>No comments</Text>
      : <FlatList
          data={comments}
          keyExtractor={(comment) => comment.id}
          renderItem={(comment) => (
            <View>
              <Text>
                {comment.item.account.name}
              </Text>
              <Text>
                {comment.item.content}
              </Text>
            </View>
          )}
        />
      }
    </View>
  )
}
