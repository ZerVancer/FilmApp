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

  return (
    <View style={[defaultStyle.container, defaultStyle.aligned_horizontally]}>
      <Text style={defaultStyle.text}> Name: </Text>
      <TextInput value={name} style={loginStyle.inputField} onChangeText={setName}/>
      <Text style={defaultStyle.text}> Password: </Text>
      <TextInput value={password} style={loginStyle.inputField} onChangeText={setPassword}/>
      <Pressable style={defaultStyle.button} onPress={() => {
        if (registerAccount(name, password)) () => {navigation.goBack()}
        }}>
        <Text style={defaultStyle.text}>
          Register
        </Text>
      </Pressable>
      <Pressable style={defaultStyle.button} onPress={() => {
        if (loginAccount(name, password)) () => {navigation.goBack()}
        }}>
        <Text style={defaultStyle.text}> Login </Text>
      </Pressable>
      <Pressable style={defaultStyle.button} onPress={getAllAccounts}>
        <Text style={defaultStyle.text}> Get Accounts </Text>
      </Pressable>
    </View>

  );
}
