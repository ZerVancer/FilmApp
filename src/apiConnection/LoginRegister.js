
import { ToastAndroid } from "react-native";
import { accountPath } from "./DatabasePath";

export async function registerAccount(name, password) {
  try {
    const response = await fetch(accountPath+"/register", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, password: password })
    })

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const responseBody = await response.text();

    if(responseBody != "") {
      const result = JSON.parse(responseBody);
      console.log(result);
      ToastAndroid.show("Account registered!", ToastAndroid.SHORT)
    } else {
      ToastAndroid.show("Account name is taken!", ToastAndroid.SHORT)
    }

  } catch (error) {
    console.error(error.message);
    ToastAndroid.show("An error accured, try again.")
  }
}

export async function loginAccount(name, password) {
  try {
    const response = await fetch(accountPath+"/"+name+"&"+password, {
      method: "GET",
    })

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const responseBody = await response.text();

    if(responseBody != "") {
      const result = JSON.parse(responseBody);
      console.log(result);
      ToastAndroid.show("You are now logged in!", ToastAndroid.SHORT)
    } else {
      ToastAndroid.show("Name or password was incorrect!", ToastAndroid.SHORT)
    }
    
  } catch (error) {
    console.error(error.message);
    ToastAndroid.show("An error accured, try again.")
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

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
    ToastAndroid.show("An error accured, try again.")
  }
}