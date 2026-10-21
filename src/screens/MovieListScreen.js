import { View, FlatList, Text, Pressable, TextInput } from "react-native";
import { getMovies } from "../apiConnection/MoviesAccess";
import { useEffect, useState } from "react";
import { defaultStyle } from "../styles/DefaultStyle";
import { menuListStyle } from "../styles/MenuListStyle";

export default function MovieListScreen({
  navigation
}) {

  const [movies, setMovies] = useState();
  const [search, setSearch] = useState("");

  function matchesSearch(movieTitle) {
    return movieTitle.includes(search)
  }

  useEffect(() => {
    const listMovies = async () => {
      setMovies(await getMovies())
    }

    listMovies()
  }, [])

  const renderListItem = (movie) => {
    return !matchesSearch(movie.title) ? null :
    <Pressable style={[defaultStyle.button, menuListStyle.listItems]} onPress={() => navigation.navigate(
      "MovieDetailsScreen",
      {
        movieId: movie.id
      }
    )}>
      <Text style={defaultStyle.text}>
        Movie: {movie.title}
      </Text>
    </Pressable>
  }

  return (
    <View style={defaultStyle.container}>
      <Text style={defaultStyle.header}>Movies</Text>
      <TextInput placeholder="Search" value={search} style={menuListStyle.searchField} onChangeText={setSearch} />
      {!movies?<View style={[defaultStyle.loadingContainer, defaultStyle.container]}><Text style={defaultStyle.text}>Loading...</Text></View>:
      <FlatList
        style={menuListStyle.list}
        initialNumToRender={10}
        maxToRenderPerBatch={1}
        windowSize={11}
        data={movies}
        keyExtractor={(movie) => movie.id}
        renderItem={(movie) => (renderListItem(movie.item))}
      />
      }
    </View>
  )
}
