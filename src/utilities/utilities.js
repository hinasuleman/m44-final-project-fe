export const fetchBooks = async (searchTerm, searchType, setBooks) => {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchType}:${searchTerm}`
  );
  const data = await res.json();
  setBooks(data.items);
  console.log(`fetchBooks:${data.items}`);
};
