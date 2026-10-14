import { View, Text, StyleSheet } from "react-native";
import { homeStyle } from "../styles/HomeStyle";

export default function HomeScreen() {
  return (
    <View style={homeStyle.container}>
      <View style={homeStyle.headerView}>
        <Text style={homeStyle.header}>
          Athena
        </Text>
        <Text style={homeStyle.headerDesc}> The home of movies </Text>
      </View>
      <Text style={homeStyle.text}>
        The only place to go regarding movies!
      </Text>
    </View>
  );
}
