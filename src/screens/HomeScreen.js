import { View, Text, Pressable, ToastAndroid } from "react-native";
import { homeStyle } from "../styles/HomeStyle";
import { useCallback, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store"
import { defaultStyle } from "../styles/DefaultStyle";
import { useFocusEffect } from "@react-navigation/native";

export default function HomeScreen({
  navigation
}) {
  const [logedIn, setLogedIn] = useState(false);

  useFocusEffect(
    useCallback( () => {
      async function checkLogin() {
        const result = await SecureStore.getItemAsync("user")
        if (result != null) setLogedIn(true)
      }

      checkLogin()
    })
  )

  async function logOut() {
    setLogedIn(false)

    ToastAndroid.show("You are logged out", ToastAndroid.SHORT)

    await SecureStore.deleteItemAsync("user")
  }

  return (
    <View style={defaultStyle.container}>
      <View style={homeStyle.headerBlock}>
        <Text style={[homeStyle.headerBlockText, defaultStyle.text]}>
          Athena
        </Text>
        <Text style={[homeStyle.headerBlockDesc, defaultStyle.text]}> The home of movies </Text>
      </View>
      <View style={homeStyle.textBlock}>
        <Text style={defaultStyle.text}>
          The only place to go regarding movies!
        </Text>
      </View>
      <View style={homeStyle.moviesBlock}>
        <Pressable style={defaultStyle.button} onPress={() => navigation.navigate("MovieListScreen")}>
          <Text style={defaultStyle.text}>Movies!</Text>
        </Pressable>
      </View>
      <View style={homeStyle.loginoutBlock}>
        {logedIn ?
        <Pressable style={defaultStyle.button} onPress={() => logOut()}>
          <Text style={defaultStyle.text}>Log out</Text>
        </Pressable> :
        <Pressable style={defaultStyle.button} onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={defaultStyle.text}>Login or Register</Text>
        </Pressable>}
      </View>
    </View>
  );
}
