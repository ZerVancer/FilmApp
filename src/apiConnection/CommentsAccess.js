import { commentPath } from "./DatabasePath";

export async function getMovieComments(movieId) {
  try {
    const response = await fetch(commentPath+"/"+movieId, {
      method: "GET",
    })

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error.message);
  }
}

export async function createComment(movieId, accountId, content) {
  try {
    const response = await fetch(commentPath, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: content, movie: {"id": movieId}, account: {"id": accountId}})
    })

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error.message);
  }
}

export async function updateComment(id, content) {
  try {
    const response = await fetch(commentPath+"/"+id, {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: content })
    })

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error.message);
  }
}

export async function deleteComment(id) {
  try {
    const response = await fetch(commentPath+"/"+id, {
      method: "DELETE",
    })

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error.message);
  }
}
