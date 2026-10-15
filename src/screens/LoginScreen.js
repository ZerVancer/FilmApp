import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text> Name </Text>
      <TextInput value={name} onChangeText={setName}/>
      <Text> Password </Text>
      <TextInput value={password} onChangeText={setPassword}/>
      <Pressable>
        <Text>
          !!!
        </Text>
      </Pressable>
    </View>

  );
}
