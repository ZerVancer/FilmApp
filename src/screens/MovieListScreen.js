import { View, FlatList, Text, Pressable } from "react-native";
import { getMovies } from "../apiConnection/MoviesAccess";
import { useEffect, useState } from "react";
import { defaultStyle } from "../styles/DefaultStyle";
import { menuListStyle } from "../styles/MenuListStyle";

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
    <View style={defaultStyle.container}>
      <Text style={[menuListStyle.header, defaultStyle.text]}>Movies</Text>
      <FlatList
        style={menuListStyle.list}
        data={movies}
        keyExtractor={(movie) => movie.id}
        renderItem={(movie) => (
          <Pressable style={[defaultStyle.button, menuListStyle.listItems]} onPress={() => navigation.navigate(
            "MovieDetailsScreen",
            {
              movieId: movie.item.id
            }
          )}>
            <Text style={defaultStyle.text}>
              Movie: {movie.item.title}
            </Text>
          </Pressable>
        )}
      />
    </View>
  )
}
