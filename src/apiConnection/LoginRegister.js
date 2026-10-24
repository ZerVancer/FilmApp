
import { ToastAndroid } from "react-native";
import { accountPath } from "./DatabasePath";
import * as SecureStore from "expo-secure-store";

async function isLogedIn() {
  const result = (await SecureStore.getItemAsync("user") != null)
  if (result) ToastAndroid.show("An user is already logged in on this machine!", ToastAndroid.SHORT)
  return result
}

async function login(account) {
  await SecureStore.setItemAsync(
        "user",
        account
      )
}

export async function registerAccount(name, password) {
  if (await isLogedIn()) return
  try {
    const response = await fetch(accountPath+"/register", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, password: password })
    })

    let responseBody = await response.text();

    if (response.status == 500) {
      responseBody = ""
    } else if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    } 

    if(responseBody != "") {
      const result = JSON.parse(responseBody);
      console.log(result)
      login(responseBody)
      ToastAndroid.show("Account registered and you are signed in!", ToastAndroid.SHORT)
      return true
    } else {
      ToastAndroid.show("Account name is taken!", ToastAndroid.SHORT)
    }

  } catch (error) {
    console.error(error.message);
    ToastAndroid.show("An error accured, try again.", ToastAndroid.SHORT)
    return false
  }
}

export async function loginAccount(name, password) {
  if (await isLogedIn()) return
  try {
    const response = await fetch(accountPath+"/login="+name+"/"+password, {
      method: "GET",
    })

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const responseBody = await response.text();

    if(responseBody != "") {
      const result = JSON.parse(responseBody)
      console.log(result)
      login(responseBody)
      ToastAndroid.show("You are now logged in!", ToastAndroid.SHORT)
      return true
    } else {
      ToastAndroid.show("Name or password was incorrect!", ToastAndroid.SHORT)
      return false
    }
    
  } catch (error) {
    console.error(error.message);
    ToastAndroid.show("An error accured, try again.", ToastAndroid.SHORT)
    return false
  }
}

export async function getAllAccounts() {
  try {
    const response = await fetch(accountPath+"/all", {
      method: "GET",
    })

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const responseBody = await response.text();

    if(responseBody != "") {
      const result = JSON.parse(responseBody);
      console.log(result);
    }
  } catch (error) {
    console.error(error.message);
    ToastAndroid.show("An error accured, try again.", ToastAndroid.SHORT)
  }
}