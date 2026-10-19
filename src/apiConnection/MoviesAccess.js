
import { moviePath } from "./DatabasePath";

export async function getMovies() {
  try {
    const response = await fetch(moviePath+"/all", {
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

export async function getMovie(id) {
  try {
    const response = await fetch(moviePath+"/"+id, {
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
