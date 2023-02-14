export const fetchBooks = async (searchTerm, searchType, setBooks, setFetchError, fetchError) => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchType}:${searchTerm}&maxResults=39`
    );
    const data = await res.json();
    return data
  } catch (error) {
    console.log(error);
  }
  
};


export const deleteUser = async (userName,email,password) => {
  try {
    console.log("deleteuser")
    console.log(userName,email,password)
    const response = await fetch(
      `${process.env.REACT_APP_REST_API_URL}deleteUser`,{
        method:"DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          userName: userName,
          email: email,
          password: password
        })
      })
    const data = await response.json()
    console.log(data)
    
  } catch (error) {
    console.log(error);
  }
  
};
