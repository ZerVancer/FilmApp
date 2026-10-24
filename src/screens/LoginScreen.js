import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

import { defaultStyle } from "../styles/DefaultStyle";
import { loginStyle } from "../styles/LoginRegisterStyle";
import { getAllAccounts, loginAccount, registerAccount } from "../apiConnection/LoginRegister"

export default function LoginScreen({
  navigation
}) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function goBackIf(statement) {
    if (await statement) navigation.goBack()
  }

  return (
    <View style={[defaultStyle.container, defaultStyle.aligned_horizontally]}>
      <Text style={defaultStyle.text}> Name: </Text>
      <TextInput value={name} autoCorrect={false} style={loginStyle.inputField} onChangeText={setName}/>
      <Text style={defaultStyle.text}> Password: </Text>
      <TextInput value={password} secureTextEntry={true} autoCorrect={false} style={loginStyle.inputField} onChangeText={setPassword}/>
      <Pressable style={defaultStyle.button} onPress={() => {goBackIf(registerAccount(name, password))}}>
        <Text style={defaultStyle.text}>
          Register
        </Text>
      </Pressable>
      <Pressable style={defaultStyle.button} onPress={() => {goBackIf(loginAccount(name, password))}}>
        <Text style={defaultStyle.text}> Login </Text>
      </Pressable>
    </View>

  );
}
