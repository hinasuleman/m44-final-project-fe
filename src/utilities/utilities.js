export const fetchBooks = async (searchTerm, searchType, setBooks, setFetchError, fetchError) => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchType}:${searchTerm}`
    );
    const data = await res.json();
    setBooks(data.items);
    console.log(`fetchBooks:${data.items}`);
  } catch (error) {
    console.log(error);
  }
  
};
