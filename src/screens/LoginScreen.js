import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

import { LoginStyle } from "../styles/LoginRegisterStyle";
import { getAllUsers, loginAccount } from "../apiConnection/LoginRegister"

export default function LoginScreen() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text> Name </Text>
      <TextInput value={name} onChangeText={setName}/>
      <Text> Password </Text>
      <TextInput value={password} onChangeText={setPassword}/>
      <Pressable onPress={() => registerAccount(name, password)}>
        <Text >
          !!!
        </Text>
      </Pressable>
      <Pressable onPress={() => loginAccount(name, password)}>
        <Text> 2 </Text>
      </Pressable>
      <Pressable onPress={getAllUsers}>
        <Text> O </Text>
      </Pressable>
    </View>

  );
}
