import { accountPath } from "./DatabasePath";


export async function getAccountById(accountId) {
  try {
    const response = await fetch(accountPath+"/"+accountId, {
      method: "GET",
    })

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error.message);
  }
}
