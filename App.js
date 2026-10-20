import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import MovieListScreen from './src/screens/MovieListScreen';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "#1A1A1A"
            },
            headerTintColor: "white"
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: "#1A1A1A"
            },
            headerTintColor: "white"
          }}
        />
        <Stack.Screen
          name="MovieListScreen"
          component={MovieListScreen}
          options={{
            title: "MovieList",
            headerStyle: {
              backgroundColor: "#1A1A1A"
            },
            headerTintColor: "white"
          }}
        />
        <Stack.Screen
          name="MovieDetailsScreen"
          component={MovieDetailsScreen}
          options={{
            title: "MovieDetails",
            headerStyle: {
              backgroundColor: "#1A1A1A"
            },
            headerTintColor: "white"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
