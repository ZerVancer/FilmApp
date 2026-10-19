import { View, FlatList, Text, Pressable } from "react-native";
import { getMovies } from "../apiConnection/MoviesAccess";
import { useEffect, useState } from "react";

export default function MovieListScreen({
  navigation
}) {

  const [movies, setMovies] = useState();

  useEffect(() => {
    const listMovies = async () => {
      setMovies(await getMovies())
    }

    listMovies()
  }, [])

  return(
    <View>
      <Text>Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(movie) => movie.id}
        renderItem={(movie) => (
          <Pressable onPress={() => navigation.navigate(
            "MovieDetailsScreen",
            {
              movieId: movie.item.id
            }
          )}>
            <Text>
              Movie: {movie.item.title}
            </Text>
          </Pressable>
        )}
      />
    </View>
  )
}
